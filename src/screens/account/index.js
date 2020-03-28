import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

import styles from './styles';

/**
 * Account screen
 */
const AccountScreen = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <View style={styles.container}>
      <Text>Name : {user.name}</Text>
      <Text>Email : {user.email}</Text>
    </View>
  );
};

export default AccountScreen;
