import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import {TripsListScreen} from '../screens/TripsListScreen';
import InitialScreen from '../screens/InitialScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="InitialScreen" component={InitialScreen} />
      {/* <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="TripsListScreen" component={TripsListScreen} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
