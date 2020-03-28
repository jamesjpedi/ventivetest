import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ActivityIndicator, View, Platform } from 'react-native';

/**
 * Button component
 * 
 * @param {Object} props 
 */
export const Button = (props) => (
  <View style={styles.container}>
    <TouchableOpacity disabled={props.disabled} style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonTitle}>{props.title}</Text>
    </TouchableOpacity>
  </View>
);

//Define default prop values
Button.defaultProps = {
  title: '',
  onPress: () => { },
}

//Declare styles
const styles = StyleSheet.create({
  container: {
    maxWidth: 400,
    alignSelf: 'center',
    flexDirection: 'row',
    marginRight: 50,
    marginLeft: 50,
    marginTop: 30,
  },
  button: {
    padding: 5,
    width: '100%',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonTitle: {
    flex: 1,
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  }
});