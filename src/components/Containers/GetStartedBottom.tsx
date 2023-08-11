import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import appColors from '../../styles/appColors';
import GetStartedButton from '../Buttons/GetStartedButton';

const GetStartedBottom: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Trip Saver</Text>

      {/* Text */}
      <Text style={styles.text}>
        Una aplicación para ayudarte con tus viajes.
      </Text>

      {/* Button to Form */}
      <GetStartedButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 40,
    flex: 0.5,
  },
  title: {
    color: appColors.darkBlue,
    fontSize: 32,
    fontWeight: '500',
    marginBottom: 20,
  },
  text: {fontSize: 16, color: appColors.darkBlue, marginBottom: 100},
});

export default GetStartedBottom;
