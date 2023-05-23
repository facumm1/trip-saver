import React from 'react';
import {TopContainer} from '../components/TopContainer';
import {View, SafeAreaView, ScrollView, StatusBar} from 'react-native';

import {BottomContainer} from '../components/BottomContainer';

const MainScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{flexDirection: 'column', backgroundColor: '#000'}}>
          <TopContainer userName="Jose Luis" />
          <BottomContainer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;
