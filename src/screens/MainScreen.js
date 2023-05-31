import React, {useState} from 'react';
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
  const [addTripModal, setAddTripModal] = useState(false);
  //TODO refactor para evitar states en componentes padres

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={mainScreenStyles.container}>
          <FirestoreProvider setTripModal={setAddTripModal}>
            <TopContainer userName="Jose Luis" addTripModal={addTripModal} />
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
