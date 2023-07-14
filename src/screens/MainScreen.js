import React, {useState} from 'react';
import {TopContainer} from '../components/TopContainer';
import {
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  AsyncStorage,
} from 'react-native';

import {BottomContainer} from '../components/BottomContainer';
import FirestoreProvider from '../context/Firestore/FirestoreProvider';

const MainScreen = () => {
  const [addTripModal, setAddTripModal] = useState(false);
  //TODO refactor para evitar states en componentes padres

  const getUserInfo = async () => {
    const storedFullName = await AsyncStorage.getItem('fullName');
    const storedUid = await AsyncStorage.getItem('id');

    return {storedFullName, storedUid};
  };

  React.useEffect(() => console.log(getUserInfo()), []);

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={mainScreenStyles.container}>
          <FirestoreProvider setTripModal={setAddTripModal} /* uid={id} */>
            <TopContainer userName={'Fulano'} addTripModal={addTripModal} />
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
