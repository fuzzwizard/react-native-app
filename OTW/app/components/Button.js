import React from 'react';
import {
  Text,
  TouchableHighlight,
  StyleSheet 
} from 'react-native';

const Button = ({label, onPress, customStyles}) => {

  let buttonStyle;
  if (customStyles && customStyles.button) {
    buttonStyle = {...styles.button, ...customStyles.button};
    text = {...styles.buttonText, ...customStyles.buttonText}
  } else {
    let buttonStyle = styles.button;
    let text = styles.buttonText;
  }

  return (
    <TouchableHighlight
      underlayColor='transparent'
      onPress={onPress}
      style={buttonStyle}>
      <Text style={customStyles && customStyles.buttonText || styles.buttonText}>{label}</Text>
    </TouchableHighlight>
  );
};

const styles = {
  buttonText: {
    fontSize: 14,
    color: 'black',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  button: {
    height: 45,
    width: 100,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 2,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default Button;