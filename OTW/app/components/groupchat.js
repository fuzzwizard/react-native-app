import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  Dimensions,
  TouchableHighlight
} from 'react-native';

var SendBird = require('sendbird');
var windowSize = Dimensions.get('window');
var sb = SendBird.getInstance();
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class GroupChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows([]),
      myMessage: '',
      messageArray: [],
    };
  }

  componentWillUnMount() {
    sb.removeChannelHandler('MessageHandler');
  }

  componentWillMount() {
    this.getOldMessages();

    var thisInstance = this;

    var ChannelHandler = new sb.ChannelHandler();

    ChannelHandler.onMessageReceived = function(channel, message) {
      var _messages = [];
      _messages.push(message);
      console.log('the ChannelHandler onMessageReceived was called');
      _messages = _messages.concat(thisInstance.state.messageArray);
      thisInstance.setState({
        messageArray: _messages,
        dataSource: thisInstance.state.dataSource.cloneWithRows(_messages)
      });
      console.log(channel, message);
    };

    sb.addChannelHandler('MessageHandler', ChannelHandler);
  }

  onDisconnect() {
    var thisInstance = this;
    this.props.channel.leave(function(response, error) {
      if (error) {
        console.error(error);
      }
      console.log(response);
      thisInstance.props._handleNavigate({type: 'pop'});
    });
  }

  sendMessage() {
    var thisInstance = this;
    this.props.channel.sendUserMessage(this.state.myMessage, '', function(message, error) {
      if (error) {
        console.error(error);
        return;
      }
      thisInstance.setState({myMessage: ''});
      var _messages = [];
      _messages.push(message);
      _messages = _messages.concat(thisInstance.state.messageArray);
      thisInstance.setState({
        messageArray: _messages,
        dataSource: thisInstance.state.dataSource.cloneWithRows(_messages)
      });
      console.log(thisInstance.state.messageArray);
    });
  }

  getOldMessages() {
    var thisInstance = this;
    var _channel = this.props.channel;
  }

  render() {
    return (
      <View style={styles.mainContainer}>

        <View style={styles.topContainer}>
          <TouchableHighlight
            underlayColor={'transparent'}
            onPress={ () => this.props._handleNavigate({type: 'pop'}) }
            style={{marginLeft: 15}}
            >
            <Text style={styles.back}> BACK </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={'transparent'}
            onPress={this.onDisconnect.bind(this)}
            style={{marginLeft: 15}}
            >
            <Text style={styles.backBorder}> Leave chat </Text>
          </TouchableHighlight>
        </View>


        <View style={styles.chatContainer}>
          <ListView
            enableEmptySections={true}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => {
              return (
              <TouchableHighlight
              style={styles.button}
              >
                <View>
                  <Text style={styles.label}> {rowData.sender.nickname} </Text>
                  <Text style={styles.label}> {rowData.message} </Text>
                </View>
              </TouchableHighlight>
            );
            }}
        />

        </View>

        <View style={styles.inputContainer}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <TextInput
              placeholder={'Type a message'}
              style={styles.input}
              onChangeText={(myMessage) => this.setState({myMessage})}
              value={this.state.myMessage}
            >
            </TextInput>
          </View>

          <View style={styles.sendContainer}>
            <TouchableHighlight
              underlayColor={'transparent'}
              onPress={this.sendMessage.bind(this)}
              style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.send}>SEND</Text>
            </TouchableHighlight>
          </View>
        </View>

      </View>
      );
  }
}

var styles = {
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 20,
    borderBottomWidth: 0.5, 
    borderBottomColor: '#c3c1c1'
  },
  chatContainer: {
    flex: 11,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 0.5, 
    borderTopColor: '#c3c1c1'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  sendContainer: {
    justifyContent: 'flex-end',
    paddingRight: 10
  },
  input: {
    width: windowSize.width - 80,
    height: 32,
    borderColor: 'white',
    borderWidth: 1,
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  back: {
    color: '#36A8FF'
  },
  send: {
    color: '#36A8FF'
  }
};


module.exports = GroupChat;