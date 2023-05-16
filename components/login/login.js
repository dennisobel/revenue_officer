import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './login.style';

const Login = () => {
  const handleLogin = () => {
    // Handle login logic here
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Login</Text>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            // Handle email input value
          />
        </View>

        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="Password"
            secureTextEntry
            // Handle password input value
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleLogin}>
          <Text style={styles.searchBtnText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
