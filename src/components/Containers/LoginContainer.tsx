import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import appColors from '../../styles/appColors';
import {ChangeFormButton, GoogleButton} from '../Buttons';
import LoginForm from '../Forms/LoginForm';
import FadeAnimWrapper from '../../wrapper/HOC/FadeAnimWrapper';

type Props = {
  handleChangeForm: () => void;
};

const LoginContainer: React.FC<Props> = ({handleChangeForm}) => {
  return (
    <FadeAnimWrapper wrapperStyle={styles.container}>
      <View style={styles.content}>
        <LoginForm />

        <Text style={styles.optionText}>O también</Text>

        {/* Google OAuth */}
        <GoogleButton />

        <View style={styles.accContainer}>
          <Text style={styles.subtitle}>¿No tenés una cuenta?</Text>
          <ChangeFormButton
            title="Registrate ya!"
            handleChangeForm={handleChangeForm}
            textStyles={styles.btnText}
          />
        </View>
      </View>
    </FadeAnimWrapper>
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
  accContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  subtitle: {
    fontSize: 14,
  },
  btnText: {
    color: appColors.darkBlue,
    fontWeight: '600',
    marginLeft: 5,
  },
});

export default LoginContainer;
