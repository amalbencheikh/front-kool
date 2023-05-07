import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../../routes';
import Profile from "../../../ui/screens/Delivery/Profile";

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.PROFILE} component={Profile} />

    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
