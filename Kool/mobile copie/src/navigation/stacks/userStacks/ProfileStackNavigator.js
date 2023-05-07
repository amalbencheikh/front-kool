import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../../routes';
import Delivery from '../../../ui/screens/Delivery';
import Profile from "../../../ui/screens/Profile/Profile";
import Orders from "../../../ui/screens/Orders";
import EditProfile from "../../../ui/screens/Profile/EditProfile";
import {getFocusedRouteNameFromRoute} from "@react-navigation/native";
import {hideTabBar, showTabBar} from "../../../utils";
import DeliveryAddresses from "../../../ui/screens/Profile/DeliveryAddresses";
import Cards from "../../../ui/screens/Profile/Cards";

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = ({ navigation, route }) => {

    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName === routes.EDIT_PROFILE || routeName === routes.ORDERS || routeName === routes.DELIVERY_ADDRESSES){
            hideTabBar(navigation)
        }else {
            showTabBar(navigation)
        }
    }, [navigation, route])
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.PROFILE} component={Profile} />
      <Stack.Screen name={routes.EDIT_PROFILE} component={EditProfile} />
      <Stack.Screen name={routes.DELIVERY_ADDRESSES} component={DeliveryAddresses} />
      <Stack.Screen name={routes.CARDS} component={Cards} />
      <Stack.Screen name={routes.ORDERS} component={Orders} />
      <Stack.Screen name={routes.DELIVERY} component={Delivery} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
