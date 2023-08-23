import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import appColors from '../../styles/appColors';
import RegisterForm from '../Forms/RegisterForm';

type Props = {handleChangeForm: () => void};

const RegisterContainer: React.FC<Props> = ({handleChangeForm}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <RegisterForm />

        <TouchableOpacity onPress={handleChangeForm} style={styles.backBtn}>
          <Text style={styles.backBtnText}>Volver</Text>
        </TouchableOpacity>
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
  backBtn: {
    marginTop: 10,
    alignSelf: 'center',
    paddingVertical: 2.5,
    paddingHorizontal: 15,
  },
  backBtnText: {textAlign: 'center'},
});

export default RegisterContainer;
