import React from 'react';
import {StyleSheet, Text} from 'react-native';
import NavigateButton from './NavigateButton';
import appColors from '../../styles/appColors';

type Props = {
  handleAccept: () => void;
};

const AcceptTripButton: React.FC<Props> = ({handleAccept}) => {
  return (
    <NavigateButton btnStyles={styles.acceptBtn} handleNav={handleAccept}>
      <Text style={styles.acceptText}>Aceptar</Text>
    </NavigateButton>
  );
};

const styles = StyleSheet.create({
  acceptBtn: {
    alignSelf: 'center',
    backgroundColor: appColors.green,
    borderRadius: 50,
    paddingVertical: 12.5,
    width: '50%',
    marginBottom: 7.5,
  },
  acceptText: {
    fontWeight: '500',
    fontSize: 14,
    color: appColors.darkBlue,
    textAlign: 'center',
  },
});

export default AcceptTripButton;
