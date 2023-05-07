import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../../routes';

import DeliveryTabs from "../../tab/DeliveryTabs";
import Notifications from "../../../ui/screens/Delivery/Notifications";


const Stack = createNativeStackNavigator();

const DeliveryHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.HOME} component={DeliveryTabs} />
      <Stack.Screen name={routes.NOTIFICATIONS} component={Notifications} />
    </Stack.Navigator>
  );
};

export default DeliveryHomeStack;
