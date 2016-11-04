import SendBird from 'sendbird';
import { APP_ID } from './sendBirdConfig.js';
import store from '../store.js';

const sb = new SendBird({appId: APP_ID});

const sendBirdConnect = (userEmail, username, cb) => {
  sb.connect(userEmail, function(user, err) {
    if (err) {
      return console.error('SendBird.js: Error in sendBird login', err);
    }
    console.log('SendBird.js: connected but not updated');
    sb.updateCurrentUserInfo(username, '', function(response, error) {
      if (err) {
        return console.error('SendBird.js: Error sendBird login', err);
      }
      console.log('SendBird.js: Connected and updated.');
    });
  });
};

const sendBirdGetUsers = (cb) => {
  const query = sb.createUserListQuery();
  query.next(function(users, err) {
    if (err) {
      return console.error('SendBird.js: Error getting users with SendBird.', err);
    }
    cb(users.filter(user => user.userId !== sb.currentUser.userId));
  });
};

const sendBirdCreateGroupChat = (callback) => {
  var _friendsList = [];
  var friendsListState = store.getState().sendBirdState.get('friendsList');
  friendsListState.forEach((item) => { _friendsList.push(item); });
  var channel = store.getState().sendBirdState.get('channel');
  if (! channel) {
    sb.GroupChannel.createChannel(_friendsList, false, function(channel, error) {
      if (error) {
        return console.error('SendBird.js: Error creating channel.', error);
      } 
      callback(channel);      
    });
  } else {
    var _inviteIds = _friendsList.map(function(user) { return user.userId; });
    console.log('If the channel already exits', _inviteIds);
    channel.inviteWithUserIds(_inviteIds, function(response, error) {
      if (error) {
        return console.error(error);
      }
      callback();
    });
  }
};

export {
  sendBirdCreateGroupChat,
  sendBirdGetUsers,
  sendBirdConnect
};