import React, {Component} from 'react';
import {
  TabBarIOS,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

import Button from './Button';
import HamburgerButton from './HamburgerButton';
import Badge from './Badge';

class UserBar extends Component {
  render() {
    const user = this.props.user;
    if (user) {
      return (
      <View style={styles.bar}>
        <HamburgerButton
          onPress={this.props.openControlPanel}
        />
        <View style={{width: Dimensions.get('window').width, justifyContent: 'center', alignItems: 'center'}}>  
          <Text style={styles.tagline}>Compass</Text>
        </View>
      </View>
    );
    } else {
      return (<View><Text>Guest</Text></View>);
    }
  }
}

const styles = {
  bar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 30,
    alignItems: 'center',
    height: 40,
    width: Dimensions.get('window').width
  },
  user: {
    textAlign: 'center',
    margin: 10,
    color: 'black'
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'flex-end'
  },
  tagline: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  }
};

export default UserBar;

