import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../../routes';
import Cart from '../../../ui/screens/Cart';
import Checkout from '../../../ui/screens/Checkout';
import Delivery from '../../../ui/screens/Delivery';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {hideTabBar, showTabBar} from "../../../utils";

const Stack = createNativeStackNavigator();

const MarketStackNavigator = ({ navigation, route }) => {


    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName === routes.CHECKOUT || routeName === routes.DELIVERY){
            hideTabBar(navigation)
        }else {
            showTabBar(navigation)
        }
    }, [navigation, route])

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.CART} component={Cart} />
      <Stack.Screen name={routes.CHECKOUT} component={Checkout} />
      <Stack.Screen name={routes.DELIVERY} component={Delivery} />
    </Stack.Navigator>
  );
};

export default MarketStackNavigator;
