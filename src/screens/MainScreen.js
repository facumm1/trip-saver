import React from 'react';
import {TopContainer} from '../components/TopContainer';
import {
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import {BottomContainer} from '../components/BottomContainer';
import FirestoreProvider from '../context/Firestore/FirestoreProvider';

const MainScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={mainScreenStyles.container}>
          <FirestoreProvider>
            <TopContainer userName="Jose Luis" />
            <BottomContainer />
          </FirestoreProvider>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mainScreenStyles = StyleSheet.create({
  container: {flexDirection: 'column', backgroundColor: '#000'},
});

export default MainScreen;
