import React from 'react';
import { View, StyleSheet } from 'react-native';

HorizontalSeparator = (props) => (
  <View style={styles.separator} />
)

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    color: 'red',
    marginHorizontal: 5,
  }
})

export default HorizontalSeparator;