import React from 'react';
import {TopContainer} from '../components/TopContainer';
import {View, SafeAreaView, ScrollView, StatusBar} from 'react-native';

import {BottomContainer} from '../components/BottomContainer';

const MainScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <TopContainer userName="Jose Luis" />
          <BottomContainer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;
