import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Text,View, StyleSheet} from 'react-native';

import {FontAwesome, MaterialCommunityIcons} from "@expo/vector-icons";

import HomeStackNavigator from "../stacks/userStacks/HomeStackNavigator";
import ProfileStackNavigator from "../stacks/userStacks/ProfileStackNavigator";
import MarketStackNavigator from "../stacks/userStacks/MarketStackNavigator";
import Favorites from "../../ui/screens/Favorites";
import Icons from "@expo/vector-icons/MaterialIcons";
import {colors} from "../../themes/Colors";
import {routes} from "../routes";
import {tabBarStyle} from "../../ui/common/tabBarStyle";

const Tab = createBottomTabNavigator();

export default function UserTabs({navigation}) {
    const test = true;
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarStyle: tabBarStyle,
                tabBarLabel: ({focused}) => {
                    return <Text style={{
                        // marginHorizontal: 28,
                        fontSize: 14,
                        fontWeight: '600',
                        color: colors.ORANGE
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
                                backgroundColor: !focused? colors.TRANSPARENT : colors.ORANGE,
                                borderRadius: 50,
                                // top:-1,
                                // left:-1,
                                width:33,
                                height:33,
                            }}
                        ><Icons name={"home"} color={focused ? colors.WHITE : colors.DARKGRAY} size={focused? 23 : 28}/></View>
                        //     console.log("TEST")
                    } else if (route.name === routes.CART_TAB) {
                        return <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                // margin: '0 auto',
                                paddingVertical:  2,
                                // display: !focused? 'none' : null,
                                // position:'absolute',
                                backgroundColor: !focused? colors.TRANSPARENT : colors.ORANGE,
                                borderRadius: 50,
                                // top:-1,
                                // left:-1,
                                width:33,
                                height:33,
                            }}
                        ><Icons name={"shopping-cart"} color={focused ? colors.WHITE : colors.DARKGRAY} size={focused? 23 : 28}/></View>
                    } else if (route.name === routes.FAVORITES) {
                        return <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                // margin: '0 auto',
                                paddingVertical:  2,
                                // display: !focused? 'none' : null,
                                // position:'absolute',
                                backgroundColor: !focused? colors.TRANSPARENT : colors.ORANGE,
                                borderRadius: 50,
                                // top:-1,
                                // left:-1,
                                width:33,
                                height:33,
                            }}
                        ><Icons name={"favorite"} color={focused ? colors.WHITE : colors.DARKGRAY} size={focused? 23 : 28}/>
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
                                backgroundColor: !focused? colors.TRANSPARENT : colors.ORANGE,
                                borderRadius: 50,
                                // top:-1,
                                // left:-1,
                                width:33,
                                height:33,
                            }}
                        ><Icons name={"person"} color={focused ? colors.WHITE : colors.DARKGRAY}
                                       size={focused? 23 : 28}/></View>
                    }
                    //     iconSource = require('./assets/public.png');
                    // } else if (route.name === 'List') {
                    //     iconSource = require('./assets/numbered.png');
                    // } else if (route.name === 'Log') {
                    //     iconSource = require('./assets/menu.png');
                    // } else if (route.name === 'Talk') {
                    //     iconSource = require('./assets/chat.png');
                    // } else if (route.name === 'Account') {
                    //     iconSource = require('./assets/account.png');
                    // }


                },
                // tabBarShowLabel: false,
                headerShown: false,
                // tabBarActiveTintColor: colors.ORANGE,
                // tabBarInactiveTintColor: colors.DARKGRAY
            })
            }


            // tabBar={(props) => test ? <CustomBottomTabs {...props} /> : null}


        >
            <Tab.Screen
                name={routes.HOME_TAB}
                component={HomeStackNavigator}

            />
            {/*<Tab.Screen*/}
            {/*    name={routes.RESTAURANT}*/}
            {/*    component={Retaurant}*/}
            {/*    options={{*/}
            {/*        tabBarIcon: ({color, size}) => (*/}
            {/*            <Icon name="storefront" color={color} size={size} />*/}
            {/*        ),*/}
            {/*    }}*/}
            {/*/>*/}
            <Tab.Screen
                name={routes.CART_TAB}
                component={MarketStackNavigator}
            />
            <Tab.Screen
                name={routes.FAVORITES}
                component={Favorites}
                // options={{
                //     // tabBarLabel: "test",
                //     tabBarShowLabel: true,
                //     tabBarLabelPosition: "beside-icon",
                //
                //     tabBarIcon: ({color, size}) => (
                //         <Icon name="heart-circle" color={color} size={size}/>
                //     ),
                //
                //     // tabBarStyle: {backgroundColor:"red"}
                //     // tabBarItemStyle: {borderRadius:20, backgroundColor:"red"},
                //     // tabBarIconStyle: {backgroundColor:"blue", width: 20, height: 20, borderRadius: 20}
                //
                // }}

            />
            <Tab.Screen
                name={routes.PROFILE_TAB}
                component={ProfileStackNavigator}
                // options={{
                //     tabBarShowLabel: true,
                //     tabBarLabelPosition: "beside-icon",
                //
                //     tabBarIcon: ({color, size}) => (
                //         <Icon name="account-circle" color={color} size={size}/>
                //     ),
                // }}
            />

        </Tab.Navigator>
        // <Tab.Navigator
        //
        //   screenOptions={({ route }: any) => ({
        //     headerShown: false,
        //     initialRouteName: routes.HOME_SCREEN,
        //     tabBarIcon: ({ focused, size }) => {
        //       const color = focused ? COLORS.primary : COLORS.mediumGray;
        //
        //       switch (route.name) {
        //         case routes.MENU_SCREEN:
        //           return (
        //             <MaterialCommunityIcons
        //               name="dots-grid"
        //               color={color}
        //               size={size}
        //             />
        //           );
        //
        //         case routes.OFFERS_SCREEN:
        //           return (
        //             <MaterialCommunityIcons
        //               name="shopping"
        //               color={color}
        //               size={size}
        //             />
        //           );
        //
        //         case routes.PROFILE_SCREEN:
        //           return <FontAwesome color={color} name="user" size={size} />;
        //
        //         case routes.SETTINGS_SCREEN:
        //           return (
        //             <MaterialCommunityIcons
        //               color={color}
        //               name="menu-open"
        //               size={size}
        //             />
        //           );
        //       }
        //     },
        //     tabBarActiveTintColor: COLORS.primary,
        //     tabBarInactiveTintColor: COLORS.mediumGray,
        //
        //     tabBarStyle: {
        //       fontFamily: "Poppins",
        //       // paddingHorizontal: -30,
        //         // backgroundColor:'tomato',
        //         // margin: 20,
        //         padding: 20,
        //         height: 80,
        //         // borderRadius: 10,
        //         // width: '90%',
        //         // alignSelf: 'center',
        //         opacity: 0.8
        //
        //     },
        //   })}
        // >
        //   <Tab.Screen
        //     name={routes.MENU_SCREEN}
        //     component={MenuScreen}
        //     options={{
        //       title: "Menu",
        //     }}
        //   />
        //   <Tab.Screen
        //     name={routes.OFFERS_SCREEN}
        //     component={OffersScreen}
        //     options={{ title: "Offers" }}
        //   />
        //   <Tab.Screen
        //     name={routes.HOME_SCREEN}
        //     component={HomeScreen}
        //     options={({ navigation }) => ({
        //       tabBarButton: ({ accessibilityState }) => {
        //         return (
        //           <HomeButton
        //             focused={accessibilityState?.selected}
        //             onPress={() => navigation.navigate(routes.HOME_SCREEN)}
        //           />
        //         );
        //       },
        //       // tabBarItemStyle: {
        //       //   backgroundColor: COLORS.lightGray,
        //       //   borderBottomLeftRadius: 30,
        //       //   borderBottomRightRadius: 30,
        //       // },
        //       title: "",
        //     })}
        //   />
        //   <Tab.Screen
        //     name={routes.PROFILE_SCREEN}
        //     component={ProfileUI}
        //     options={{
        //         title: "Profile",
        //         // tabBarItemStyle: { backgroundColor : "red"},
        //   }}
        //
        //   />
        //   <Tab.Screen
        //     name={routes.SETTINGS_SCREEN}
        //     component={SettingsScreen}
        //     options={{ headerShown: true, title: "Settings" }}
        //   />
        // </Tab.Navigator>
    );
}
