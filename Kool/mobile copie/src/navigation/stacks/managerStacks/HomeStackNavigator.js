import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../../routes';
import Home from "../../../ui/screens/Manager/Home";


const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
