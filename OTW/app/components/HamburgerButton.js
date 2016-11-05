import React from 'react';
import {StyleSheet} from 'react-native';

import Button from './Button';

HamburgerButton = ({onPress}) => (
  <Button
    label='☰'
    onPress={onPress}
    customStyles={styles}
  />
);

const styles = {
  button: {
    marginLeft: 15,
    marginRight: 0,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0)',
    width: 20,
    position: 'absolute',
    top: -12,
    left: 0,
    zIndex: 1
  },
  buttonText: {
    color: 'grey',
    fontSize: 20,
    fontWeight: 'bold',
  }
};

export default HamburgerButton;