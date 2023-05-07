import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import UserTabs from "./tab/UserTabs";
import AuthStackNavigation from "./stacks/AuthStackNavigation";
import ManagerTabs from "./tab/ManagerTabs";
import DeliveryHomeStack from "./stacks/deliveryStacks/DeliveryHomeStack";
import {useSelector} from "react-redux";

export default function MainNavigation() {
  const jwtToken = useSelector(selector => selector.user.jwtToken);
  const isManager = useSelector(selector => selector.user.isManager);
  const isDelivery = useSelector(selector => selector.user.isDelivery);



  const appSettings ={
    vendorSection: true,
    deliverySection:true,
  }
  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {!jwtToken ?  <AuthStackNavigation />  : isManager && appSettings.vendorSection ? <ManagerTabs/> : isDelivery && appSettings.deliverySection ? <DeliveryHomeStack /> :  <UserTabs /> }
    </NavigationContainer>
  );
}
