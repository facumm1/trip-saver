import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import appColors from '../../styles/appColors';

type Props = {
  hidePassword: boolean;
  handleHidePassword: () => void;
};

const HidePasswordButton: React.FC<Props> = ({
  hidePassword,
  handleHidePassword,
}) => {
  return (
    <TouchableOpacity onPress={handleHidePassword} style={styles.btn}>
      <Ionicons
        name={hidePassword ? 'eye' : 'eye-off'}
        size={25}
        color={appColors.gray}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {position: 'absolute', right: 15, top: 12},
});

export default HidePasswordButton;
