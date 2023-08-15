import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import appColors from '../../styles/appColors';
import RightArrowIcon from '../Icons/RightArrowIcon';
import {StartAppType} from '../../screens/InitialScreen';

const GetStartedButton: React.FC<StartAppType> = ({handleStartApp}) => {
  return (
    <TouchableOpacity onPress={handleStartApp} style={styles.btn}>
      <Text style={styles.text}>Comenzar ahora</Text>
      <RightArrowIcon iconSize={17.5} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignItems: 'flex-end',
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: appColors.green,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 0,
    width: '50%',
  },
  text: {
    color: appColors.darkBlue,
    fontSize: 15,
    fontWeight: '500',
  },
});

export default GetStartedButton;
