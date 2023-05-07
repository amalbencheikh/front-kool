import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen, SignUpScreen, WelcomeScreen } from "../../ui/screens";
import Login from "../../ui/screens/Auth/Login";
import SignUpUI from "../../ui/screens/Auth/SignUp";
import ForgotPassword from "../../ui/screens/Auth/ForgotPassword";
import {routes} from "../routes";
import GeoLocationPrompt from "../../ui/screens/GeoLocationPrompt";
import ManualLocationPropmt from "../../ui/screens/ManualLocationPrompt";

export default function AuthStackNavigation({navigation}) {
  const Stack = createNativeStackNavigator();
    return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.WELCOME_SCREEN} component={WelcomeScreen} />
      <Stack.Screen name={routes.LOGIN_SCREEN} component={Login} />
      <Stack.Screen name={routes.SIGNUP_SCREEN} component={SignUpUI} />
      <Stack.Screen name={routes.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={routes.GEO_LOCATION_PROMPT} component={GeoLocationPrompt} />
      <Stack.Screen name={routes.GEO_LOCATION_MANUAL} component={ManualLocationPropmt} />
    </Stack.Navigator>
  );
}
