import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {LoginForm} from '../components/Forms/LoginForm';
import {RegisterForm} from '../components/Forms/RegisterForm';

const AuthScreen = () => {
  const [registerForm, setRegisterForm] = useState(false);
  const changeForm = () => setRegisterForm(prev => !prev);

  return (
    <View style={authScreenStyles.container}>
      <View
        style={{...authScreenStyles.header, flex: registerForm ? 0.4 : 0.6}}>
        <Text style={authScreenStyles.headerText}>My Trip Saver</Text>
      </View>

      <View style={authScreenStyles.contentContainer}>
        {!registerForm ? (
          <LoginForm changeForm={changeForm} />
        ) : (
          <RegisterForm changeForm={changeForm} />
        )}
      </View>
    </View>
  );
};

export default AuthScreen;

const authScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    backgroundColor: 'inherit',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 35,
  },
  contentContainer: {
    backgroundColor: '#fff',
    flex: 1,
    borderWidth: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
});
