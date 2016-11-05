import React from 'react';
import {Text, View} from 'react-native';

const Timeline = ({ messages }) => (
  <View style={styles.container}>
    { messages.map(m => <Text>Wow!</Text>) }
  </View>
);

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF',
  }
};

export default Timeline;