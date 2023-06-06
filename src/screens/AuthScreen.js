import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {LoginForm} from '../components/Inputs/LoginForm';
import {RegisterForm} from '../components/Inputs/RegisterForm';

const AuthScreen = () => {
  const [registerForm, setRegisterForm] = useState(false);

  return (
    <View style={authScreenStyles.container}>
      <View
        style={{...authScreenStyles.header, flex: registerForm ? 0.2 : 0.6}}>
        <Text style={authScreenStyles.headerText}>My Trip Saver</Text>
        <TouchableOpacity>
          <Text
            style={{color: '#fff'}}
            onPress={() => setRegisterForm(!registerForm)}>
            X
          </Text>
        </TouchableOpacity>
      </View>

      <View style={authScreenStyles.contentContainer}>
        {!registerForm ? (
          <LoginForm setRegisterForm={setRegisterForm} />
        ) : (
          <RegisterForm />
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
