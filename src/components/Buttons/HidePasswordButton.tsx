import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import appColors from '../../styles/appColors';

type Props = {
  inputName: string;
  handleHidePassword: () => void;
};

const HidePasswordButton: React.FC<Props> = ({
  inputName,
  handleHidePassword,
}) => {
  return (
    <>
      {inputName === 'password' && (
        <TouchableOpacity onPress={handleHidePassword} style={styles.btn}>
          <Ionicons name="eye-off-sharp" size={25} color={appColors.gray} />
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  btn: {position: 'absolute', right: 15, top: 12},
});

export default HidePasswordButton;
