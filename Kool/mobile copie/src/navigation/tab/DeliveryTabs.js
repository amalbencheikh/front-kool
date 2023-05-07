import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {FontAwesome, MaterialCommunityIcons} from "@expo/vector-icons";
import {routes} from "../routes";
import Home from "../../ui/screens/Home";
import {colors} from "../../themes/Colors";
import ManagerBottomTabs from "../../ui/components/navigation/ManagerBottomTabs";
import {tabBarStyle} from "../../ui/common/tabBarStyle";
import {Text, View} from "react-native";
import Icons from "@expo/vector-icons/MaterialIcons";
import Notifications from "../../ui/screens/Delivery/Notifications";
import ProfileStackNavigator from "../stacks/deliveryStacks/ProfileStackNavigator";



const Tab = createBottomTabNavigator();

export default function DeliveryTabs({navigation}) {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarStyle: tabBarStyle,
                tabBarLabel: ({focused}) => {
                    return <Text style={{
                        // marginHorizontal: 28,
                        fontSize: 14,
                        fontWeight: '600',
                        color: colors.BLUE
                    }}>{focused ? route.name : ""}</Text>
                },
                tabBarIconStyle: {
                    marginHorizontal: 25,
                },
                tabBarLabelPosition: 'beside-icon',
                tabBarIcon: ({focused}) => {
                    let iconSource;
                    // console.log(route.name)
                    if (route.name === routes.HOME_TAB) {
                        return <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                // margin: '0 auto',
                                paddingVertical:  2,
                                // display: !focused? 'none' : null,
                                // position:'absolute',
                                backgroundColor: !focused? colors.TRANSPARENT : colors.BLUE,
                                borderRadius: 50,
                                // top:-1,
                                // left:-1,
                                width:33,
                                height:33,
                            }}
                        ><Icons name={"home"} color={focused ? colors.WHITE : colors.DARKGRAY} size={focused? 23 : 28}/></View>

                    } else if (route.name === routes.NOTIFICATIONS) {
                        return <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                // margin: '0 auto',
                                paddingVertical:  2,
                                // display: !focused? 'none' : null,
                                // position:'absolute',
                                backgroundColor: !focused? colors.TRANSPARENT : colors.BLUE,
                                borderRadius: 50,
                                // top:-1,
                                // left:-1,
                                width:33,
                                height:33,
                            }}
                        ><Icons name={"notifications"} color={focused ? colors.WHITE : colors.DARKGRAY} size={focused? 23 : 28}/>
                        </View>
                    } else {
                        return <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                // margin: '0 auto',
                                paddingVertical:  2,
                                // display: !focused? 'none' : null,
                                // position:'absolute',
                                backgroundColor: !focused? colors.TRANSPARENT : colors.BLUE,
                                borderRadius: 50,
                                // top:-1,
                                // left:-1,
                                width:33,
                                height:33,
                            }}
                        ><Icons name={"person"} color={focused ? colors.WHITE : colors.DARKGRAY}
                                size={focused? 23 : 28}/></View>
                    }


                },
                headerShown: false,
            })
            }
        >

            <Tab.Screen
                name={routes.HOME_TAB}
                component={Home}
            />
            <Tab.Screen
                name={routes.NOTIFICATIONS}
                component={Notifications}
            />
            <Tab.Screen
                name={routes.PROFILE_TAB}
                component={ProfileStackNavigator}
            />
        </Tab.Navigator>

    );
}
