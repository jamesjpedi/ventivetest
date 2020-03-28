import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import styles from './styles';
import Auth from '../../services/auth';
import { logIn } from '../../store/actions/auth';
import { InputText, Button, TextButton } from '../../components';

/**
 * Signup screen
 */
class SignupScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name    : '',
      email   : '',
      password: '',
    }
  }

  /**
   * Function calls when signup button clicks
   */
  _handleSignup = async () => {
    if (!this.validateFields()) {
      return;
    }

    const { name, email, password } = this.state;
    Auth.signUpUser({
      name    : name,
      email   : email,
      password: password,
    })
    .then(userData => this.props.logIn(userData))
    .catch(err => alert(err));
  }

	/**
	 * Validate form fields.
	 * 
	 * @returns {boolen} Validation success or failed
	 */
  validateFields = () => {
    const { name, email, password } = this.state;
    if (name == '' || email == '' || password == '') {
      alert('All fields are required !');
      return false;
    }
    return true;
  }

  //Navigate to previous page
  _goToSignup = () => this.props.navigation.pop();

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Create account</Text>
        <InputText
          title="Name"
          placeholder="Name"
          autoCapitalize="none"
          value={this.state.name}
          onChangeText={(name) => this.setState({ name: name })}
        />
        <InputText
          title="Email"
          placeholder="Email"
          autoCapitalize="none"
          value={this.state.email}
          keyboardType="email-address"
          onChangeText={(email) => this.setState({ email: email })}
        />
        <InputText
          title="Password"
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password: password })}
        />
        <Button
          title="Sign Up"
          onPress={this._handleSignup}
        />

        <TextButton title='Alredy have an account?' onPress={this._goToSignup} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logIn: (user) => dispatch(logIn(user)),
  }
}

export default connect(null, mapDispatchToProps)(SignupScreen);
