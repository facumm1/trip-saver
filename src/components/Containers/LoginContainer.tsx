import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import appColors from '../../styles/appColors';
import {ChangeFormButton, GoogleButton} from '../Buttons';
import LoginForm from '../Forms/LoginForm';

type Props = {
  handleChangeForm: () => void;
};

const LoginContainer: React.FC<Props> = ({handleChangeForm}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <LoginForm />

        <Text style={styles.optionText}>O también</Text>

        {/* Google OAuth */}
        <GoogleButton />

        <ChangeFormButton handleChangeForm={handleChangeForm} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: appColors.white,
  },
  content: {
    width: '75%',
  },
  optionText: {
    textAlign: 'center',
    marginVertical: 15,
  },
});

export default LoginContainer;
