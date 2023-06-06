import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const GoogleButton = ({title}) => {
  return (
    <View style={styles.socialContainer}>
      <Text style={styles.socialText}>{title}</Text>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>G</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GoogleButton;

const styles = StyleSheet.create({
  socialContainer: {
    alignItems: 'center',
    marginTop: 15,
    width: '75%',
  },
  socialText: {
    fontSize: 17,
  },
  socialButton: {
    borderWidth: 0.7,
    paddingHorizontal: 25,
    paddingVertical: 5,
    marginTop: 7.5,
    borderRadius: 30,
  },
  socialButtonText: {
    fontSize: 20,
  },
});
