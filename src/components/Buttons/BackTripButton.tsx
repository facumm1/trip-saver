import React from 'react';
import {StyleSheet, Text} from 'react-native';
import NavigateButton from './NavigateButton';

type Props = {
  handleCancel: () => void;
};

const BackTripButton: React.FC<Props> = ({handleCancel}) => {
  return (
    <NavigateButton handleNav={handleCancel}>
      <Text style={styles.text}>Volver</Text>
    </NavigateButton>
  );
};

const styles = StyleSheet.create({
  text: {textAlign: 'center'},
});

export default BackTripButton;
