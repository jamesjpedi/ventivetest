import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

import styles from './styles';

/**
 * Home screen
 */
const HomeScreen = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {user.name} !</Text>
    </View>
  );
};

export default HomeScreen;
