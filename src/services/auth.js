import { AsyncStorage } from 'react-native';

/**
 * Object helper with login actions
 */
const Auth = {
  /**
   * Signin action
   * 
   * @param {String} email User email
   * @param {String} password User password
   * 
   * @returns {Promise}
   */
  signInUser: (email, password) => {
    return new Promise(async (resolve, reject) => {
      let allUsers = await AsyncStorage.getItem('users');
      allUsers = (allUsers == null) ? [] : JSON.parse(allUsers);

      let existingUser = Auth.validateUser(allUsers, email, password);
      if (existingUser.length) {
        let userData = existingUser[0];

        delete userData['password'];
        resolve(userData);
      }

      reject('Invalid Login');
    });
  },
  /**
   * Signup action
   * 
   * @param {Object} userData object contains user's name, email, password
   * 
   * @returns {Promise}
   */
  signUpUser: (userData) => {
    return new Promise(async (resolve, reject) => {
      let allUsers = await AsyncStorage.getItem('users');
      allUsers = (allUsers == null) ? [] : JSON.parse(allUsers);

      let existingUser = Auth.checkExistingUser(allUsers, userData.email);
      if (existingUser.length) {
        reject('Email already exist');
      }

      await Auth.saveUser(allUsers, userData);

      delete userData['password'];
      resolve(userData);
    });
  },
  /**
   * Save user to storage
   * 
   * @param {Array} allUsers array containing all users
   * @param {user} user object with new user details
   * 
   * @returns {Promise} with save action
   */
  saveUser: (allUsers, user) => {
    let users = [...allUsers];
    users.push(user);
    users = JSON.stringify(users);
    return AsyncStorage.setItem('users', users);
  },
  /**
   * Check user already exist by email
   * 
   * @param {Array} allUsers array containing all users
   * @param {String} email user email need to be checked
   * 
   * @returns {Array} with existing user object || empty array
   */
  checkExistingUser: (allusers, email) => {
    return allusers.filter(user => user.email == email);
  },
  /**
   * Check existing user by email and password
   * @param {Array} allUsers array containing all users
   * @param {String} email user email
   * @param {String} email user password
   * 
   * @returns {Array} with existing user object || empty array
   */
  validateUser: (allusers, email, password) => {
    return allusers.filter(user => user.email == email && user.password == password);
  },
}

export default Auth;
