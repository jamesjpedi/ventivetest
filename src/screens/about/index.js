import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

import styles from './styles';

/**
 * About screen
 */
const AboutScreen = () => {
	const user = useSelector(state => state.auth.user);

	return(
		<View style={styles.container}>
			<Text style={styles.title}>About {user.name} !</Text>
			<Text>Email : {user.email}</Text>
		</View>
	);
};

export default AboutScreen;
