import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import appColors from '../../styles/appColors';

const ChangeFormButton: React.FC<{handleChangeForm: () => void}> = ({
  handleChangeForm,
}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text style={styles.subtitle}>¿No tenés una cuenta?</Text>
      <TouchableOpacity onPress={handleChangeForm}>
        <Text style={styles.btnText}>Registrate ya!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 17,
    marginVertical: 2.5,
  },
  btnText: {
    color: appColors.blue,
    fontWeight: '600',
    marginLeft: 5,
  },
});

export default ChangeFormButton;
