import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {RegisterCredentialsTypes} from '../../hooks/useRegisterData';
import {registerValues} from '../../util/AuthFormValues';
import RegisterDataContext from '../../context/RegisterDataContext';
import appColors from '../../styles/appColors';
import Ionicons from 'react-native-vector-icons/Ionicons';

type FieldActiveTypes = {
  email: boolean;
  password: boolean;
};

const RegisterForm: React.FC = () => {
  const {showErrorMsg, registerCred, handleShowError, handleRegisterCred} =
    useContext(RegisterDataContext);

  const [hidePassword, setHidePassword] = React.useState<boolean>(true);
  const [fieldActive, setFieldActive] = React.useState<FieldActiveTypes>({
    email: false,
    password: false,
  });

  const handleActiveField = (inputName: string): void => {
    setFieldActive(() => ({
      ...fieldActive,
      [inputName]: !fieldActive[inputName as keyof FieldActiveTypes],
    }));
  };

  //TODO refactor de este componente como con login
  //TODO cambiar key de fragment, revisar type de inputName
  return (
    <>
      {registerValues.map(
        ({inputName, inputText, errorMsg, placeholder}, index) => (
          <View key={index}>
            <Text
              style={{
                color: appColors.darkBlue,
                fontWeight: '500',
                marginBottom: 10,
              }}>
              {inputText}
            </Text>
            <View>
              <TextInput
                onFocus={() => {
                  handleActiveField(inputName);
                  showErrorMsg && handleShowError();
                }}
                onBlur={() => handleActiveField(inputName)}
                onChangeText={text =>
                  handleRegisterCred(
                    inputName as keyof RegisterCredentialsTypes,
                    text,
                  )
                }
                value={
                  registerCred[inputName as keyof RegisterCredentialsTypes]
                }
                {...(inputName === 'password'
                  ? {secureTextEntry: hidePassword}
                  : {})}
                style={{
                  ...styles.input,
                  borderColor: fieldActive[inputName as keyof FieldActiveTypes]
                    ? appColors.darkBlue
                    : appColors.gray,
                }}
                placeholder={placeholder}
              />
              {inputName === 'password' && (
                <TouchableOpacity
                  onPress={() => setHidePassword(!hidePassword)}
                  style={{position: 'absolute', right: 15, top: 12}}>
                  <Ionicons
                    name="eye-off-sharp"
                    size={25}
                    color={appColors.gray}
                  />
                </TouchableOpacity>
              )}
            </View>
            <Text style={styles.errorMsg}>{showErrorMsg && errorMsg}</Text>
          </View>
        ),
      )}
    </>
  );
};

const styles = StyleSheet.create({
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
  errorMsg: {color: '#ff0008'},
});

export default RegisterForm;
