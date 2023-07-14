import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import buttonStyles from '../../styles/buttonStyle';
import {useNavigation} from '@react-navigation/native';
import FirestoreContext from '../../context/Firestore/FirestoreContext';

export const NavScreenButton = ({screenName}) => {
  const navigation = useNavigation();
  const {uid} = useContext(FirestoreContext);

  return (
    <TouchableOpacity
      style={navBtnStyles.btn}
      onPress={() => navigation.navigate(screenName, {uid})}>
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
