import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

/**
 * Button with custom styles
 * 
 * @param {object} props 
 */
export const TextButton = (props) => (
  <TouchableOpacity onPress={props.onPress} style={styles.button}>
    <Text>{props.title}</Text>
  </TouchableOpacity>
);

//Default values
TextButton.defaultProps = {
  title: '',
  onPress: () => { },
}

//Default styles
const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    alignItems: 'center'
  }
});