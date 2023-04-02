import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import TripSaver from './src/TripSaver';

function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <TripSaver />
      </ScrollView>
    </SafeAreaView>
  );
}

//const styles = StyleSheet.create({});

export default App;
