import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RegisterTypes, registerValues} from '../../util/AuthFormValues';
import RegisterDataContext from '../../context/RegisterDataContext';
import appColors from '../../styles/appColors';
import useFormField from '../../hooks/useFormField';
import RegisterField from '../TextField/RegisterField';
import HidePasswordButton from '../Buttons/HidePasswordButton';
import LoginFieldName from '../Text/LoginFieldName';

const RegisterFieldContainer: React.FC = () => {
  const {showErrorMsg, registerCred, handleShowError, handleRegisterCred} =
    useContext(RegisterDataContext);

  const formFieldHook = useFormField();

  return (
    <>
      {registerValues.map((data: RegisterTypes) => (
        <View key={data.inputName}>
          {/* Title */}
          <LoginFieldName inputText={data.inputText} />

          <View>
            <RegisterField
              inputName={data.inputName}
              placeholder={data.placeholder}
              registerCred={registerCred}
              handleRegisterCred={handleRegisterCred}
              {...formFieldHook}
            />

            <HidePasswordButton
              inputName={data.inputName}
              handleHidePassword={formFieldHook.handleHidePassword}
            />
          </View>

          <Text style={styles.errorMsg}>{showErrorMsg && data.errorMsg}</Text>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: appColors.darkBlue,
    fontWeight: '500',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 50,
    color: appColors.darkBlue,
    paddingLeft: 17.5,
    width: '100%',
    marginTop: 0,
  },
  backBtn: {
    marginTop: 10,
    alignSelf: 'center',
    paddingVertical: 2.5,
    paddingHorizontal: 15,
  },
  errorMsg: {fontSize: 13, color: '#ff0008', marginTop: 0, marginBottom: 10},
});

export default RegisterFieldContainer;
