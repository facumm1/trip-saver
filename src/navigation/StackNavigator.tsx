import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {InitialScreen, MainScreen, TripsListScreen} from '../screens';
import AddTripScreen from '../screens/AddTripScreen';

export type StackParamList = {
  InitialScreen: undefined;
  MainScreen: undefined;
  TripsListScreen: undefined;
  AddTripScreen: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AddTripScreen" component={AddTripScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="InitialScreen" component={InitialScreen} />
      <Stack.Screen name="TripsListScreen" component={TripsListScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
