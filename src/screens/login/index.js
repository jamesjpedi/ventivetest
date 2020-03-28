import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import styles from './styles';
import Auth from '../../services/auth';
import { logIn } from '../../store/actions/auth';
import { InputText, Button, TextButton } from '../../components';

class LoginScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email   : '',
      password: '',
    }
  }

  /**
   * Handle login action
   */
  _handleLogin = () => {
    if (!this.validateFields()) {
      return;
    }

    const { email, password } = this.state;
    Auth.signInUser(email, password)
      .then(userData => this.props.logIn(userData))
      .catch(err => alert(err));
  }

	/**
	 * Validate form fields.
	 * 
	 * @returns {boolen} Validation success or failed
	 */
  validateFields = () => {
    const { email, password } = this.state;
    if (email == '' || password == '') {
      alert('All fields are required !');
      return false;
    }
    return true;
  }

  //Navigate to signup page
  _goToSignup = () => this.props.navigation.navigate('Signup');

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        <InputText
          title='Email'
          placeholder='Email'
          autoCapitalize='none'
          value={this.state.email}
          keyboardType='email-address'
          onChangeText={(email) => this.setState({ email: email })}
        />
        <InputText
          title='Password'
          placeholder='Password'
          autoCapitalize='none'
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password: password })}
        />
        <Button
          title='Login'
          onPress={this._handleLogin}
        />

        <TextButton title='Sign Up' onPress={this._goToSignup} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logIn: (user) => dispatch(logIn(user)),
  }
}

export default connect(null, mapDispatchToProps)(LoginScreen);
