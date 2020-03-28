import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Button, Alert } from 'react-native';

import styles from './styles';
import { logOut } from '../../store/actions/auth'

/**
 * Settings screen
 */
const SettingsScreen = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  //Function prompt and camlling logout event
  const _logOut = () => {
    Alert.alert(
      'Alert',
      'Are you sure want to logout?',
      [
        { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'Yes', onPress: () => dispatch(logOut()) },
      ],
    );
  };

  //Render function
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actions</Text>
      <Text style={styles.description}>Logged in as {user.name}</Text>
      <Button title='Logout' onPress={_logOut} />
    </View>
  );
};

export default SettingsScreen;
