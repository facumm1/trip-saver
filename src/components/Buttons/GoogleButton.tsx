import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const GoogleButton: React.FC<{title: string}> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textBtn}>G</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 15,
    width: '75%',
  },
  title: {
    fontSize: 17,
    textAlign: 'center',
  },
  btn: {
    alignSelf: 'center',
    borderRadius: 30,
    borderWidth: 0.7,
    marginTop: 7.5,
    paddingHorizontal: 25,
    paddingVertical: 5,
    width: '40%',
  },
  textBtn: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default GoogleButton;
