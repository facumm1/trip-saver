import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import buttonStyles from '../../styles/buttonStyle';
import {useNavigation} from '@react-navigation/native';

export const NavScreenButton = ({screenName}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={navBtnStyles.btn}
      onPress={() => navigation.navigate(screenName)}>
      <Text style={navBtnStyles.textBtn}>Ver todos</Text>
    </TouchableOpacity>
  );
};

const navBtnStyles = StyleSheet.create({
  btn: {
    ...buttonStyles.btn,
    backgroundColor: '#000',
    width: '30%',
    marginRight: 15,
    borderRadius: 5,
  },
  textBtn: {
    ...buttonStyles.textBtn,
    color: '#fff',
    fontSize: 17.5,
    padding: 5,
  },
});
