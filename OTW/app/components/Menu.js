import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Button from './Button';
import Badge from './Badge';
//import removeUser from '../actions/userActions';

//import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

// function logout() {
//   GoogleSignin.revokeAccess()
//   .then(() => GoogleSignin.signOut())
//   .then(this.props.removeUser.bind(this))
//   .done();
// }

const Menu = ({_handleForwardAction, closeControlPanel, user}) => {

  return (
    <View style={styles.container}>
      <Button
        onPress={() => _handleForwardAction('help')}
        label='Help'
      />
      <Button
        onPress={() => _handleForwardAction('')}
        label='Timeline'
      />
      <Button
        onPress={closeControlPanel}
        label="Close Panel"
        style={{backgroundColor: 'red'}}
      />
      <Button
        //onPress={logout}
        label="Log Out"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    paddingLeft: 30,
  }
});

export default Menu;