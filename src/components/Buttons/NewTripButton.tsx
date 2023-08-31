import React from 'react';
import {StyleSheet, Text} from 'react-native';
import appColors from '../../styles/appColors';
import NavigateButton from './NavigateButton';

type Props = {
  handleNav: () => void;
};

const NewTripButton: React.FC<Props> = ({handleNav}) => {
  return (
    <NavigateButton btnStyles={styles.btn} handleNav={handleNav}>
      <Text style={styles.text}>Nuevo viaje</Text>
    </NavigateButton>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: appColors.white,
    borderRadius: 50,
    marginTop: 10,
    paddingVertical: 10,
    width: '50%',
  },
  text: {
    color: appColors.darkBlue,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default NewTripButton;
