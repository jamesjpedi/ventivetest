import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

/**
 * Text input field
 * 
 * @param {object} props 
 */
export const InputText = (props) => (
  <View style={styles.wrapper}>
    {props.title && (
      <Text style={styles.helpText}>{props.title}</Text>
    )}
    <View style={styles.container}>
      <TextInput style={styles.input}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        pointerEvents={props.pointerEvents}
        onTouchStart={props.onTouchStart}
        keyboardType={props.keyboardType}
        autoCapitalize={props.autoCapitalize}
        editable={props.editable}
        value={props.value} />
    </View>
  </View>
);

//Default values
InputText.defaultProps = {
  value: '',
  title: null,
  placeholder: '',
  keyboardType: 'default',
  onChangeText: () => { },
  secureTextEntry: false,
}

//Default styles
const styles = StyleSheet.create({
  wrapper: {
    marginRight: 50,
    marginLeft: 50,
  },
  container: {
    marginBottom: 5,
    maxWidth: 400,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  input: {
    width: '100%',
    padding: 5,
    borderWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    alignItems: 'center',
    borderColor: 'black',
  },
  helpText: {
    fontSize: 14,
    color: 'black',
    paddingLeft: 15,
  }
});