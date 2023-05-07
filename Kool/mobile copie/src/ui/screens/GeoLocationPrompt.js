import {
    StyleSheet,
    Text,
    View,
    Linking,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView, Platform,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {units} from '../../themes/Units';
import {colors} from '../../themes/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BackButton from '../components/BackButton';
import {AppTextInput} from "../components";
import {LinearGradient} from "expo-linear-gradient";
import {routes} from "../../navigation/routes";
import * as Device from 'expo-device';
import * as Location from 'expo-location';

const GeoLocationPrompt = ({navigation}) => {

    const getCurrentPosition = async () => {
        console.log("Getting Current Pos")
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        setNewLocation(location.coords)
    }
    const [location, setLocation] = useState(null);
    const [newLocation, setNewLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    useEffect(() => {
        (async () => {
            if (Platform.OS === 'android' && !Device.isDevice) {
                setErrorMsg(
                    'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
                );
                return;
            }
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            await setLocation(location);

        })();
    }, []);

    let text;
    if (errorMsg) {
        text = errorMsg;
    } else if (location && isLoading )  {
        setIsLoading(false)
        setNewLocation(location.coords)
        text = location
    }
    // console.log("LOCATION", text)
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <MapView


                    onPress={(cords) =>{
                        setNewLocation(cords.nativeEvent.coordinate)
                    }}
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                        latitude: isLoading? 10 : location.coords.latitude,
                        longitude: isLoading? 10 : location.coords.longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}>
                    <Marker
                        draggable={true}
                        onDragEnd={(cords) => {
                            setNewLocation(cords.nativeEvent.coordinate)
                        }}
                        coordinate={{
                            latitude: isLoading? 10 : newLocation.latitude,
                            longitude: isLoading? 10 : newLocation.longitude,
                        }}
                        title={'Your Location'}>
                        <View style={styles.markerContainer}>
                            <Icon name="pin" size={25} color={colors.ORANGE}/>
                        </View>
                    </Marker>
                </MapView>
                {/*<View style={styles.topBar}>*/}
                {/*  <BackButton onPress={onClickBack} />*/}
                {/*</View>*/}
            </View>
            <View style={styles.topContainer}>
                <View style={styles.locationContainer}>
                    <View style={styles.searchBar}>
                        <AppTextInput
                            leftIcon="search"
                            onTextChange={() => console.log("Search")}
                            //@ts-ignore
                            placeholder="Location Address"
                        />
                    </View>
                    <TouchableOpacity onPress={() => {
                        console.log("Search Address")
                    }} style={styles.searchLocationButton}>
                    </TouchableOpacity>
                </View>

                <View style={styles.searchBar}>
                    <AppTextInput
                        leftIcon="label"
                        onTextChange={() => console.log("Search")}
                        //@ts-ignore
                        placeholder="Address Label (Home, Work Place ..)"
                    />
                </View>


            </View>



            <View style={styles.bottomContainer}>

                <LinearGradient
                    // Background Linear Gradient
                    colors={['transparent', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,1)', 'rgba(255,255,255,1)', 'rgb(255,255,255)']}
                    style={styles.whiteFog1}
                />



                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={{color: colors.WHITE}}>Confirm</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    navigation.navigate(routes.GEO_LOCATION_MANUAL)
                }} style={styles.buttonContainerBlack}>
                    <Text style={{color: colors.WHITE}}>Enter Manually</Text>
                </TouchableOpacity>

            </View>

            <TouchableOpacity onPress={() => getCurrentPosition()} style={styles.currentPosition}>
                <Icon name="crosshairs-gps" size={25} color={colors.ORANGE}/>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default GeoLocationPrompt;

const styles = StyleSheet.create({
    currentPosition: {
        position: "absolute",
        backgroundColor:colors.WHITE,
        borderWidth: 1,
        borderColor: "#d2d2d2",
        right: 30,
        button: 0,
        top: units.height / 1.5,
        padding: 20,
        borderRadius: 50,

    },
    map: {
        height: units.height,
    },
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
    },
    deliverytext: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.DARK,
    },
    locationContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        // alignItems: 'center',
        marginTop: units.height / 30,
        marginBottom: 15,
    },
    searchLocationButton: {
        backgroundColor: colors.ORANGE,
        padding: 15,
        paddingHorizontal: 30,
        borderRadius: 15,
    },
    toText: {
        fontSize: 12,
        color: colors.GRAY,
        marginTop: units.height / 135,
    },
    progressLine: {
        height: 4,
        width: units.width / 5.3,
        backgroundColor: colors.GREEN,
        borderRadius: 20,
    },
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: units.height / 25,
    },
    bodyContainer: {
        borderTopStartRadius: 24,
        borderTopEndRadius: 24,
        paddingHorizontal: units.width / 13,
        flex: 1,
        marginTop: units.height / -81,
        backgroundColor: colors.WHITE,
    },
    detailContainer: {
        borderWidth: 1,
        borderColor: colors.GRAY,
        borderRadius: 14,
        flexDirection: 'row',
        paddingVertical: units.height / 58,
        paddingHorizontal: units.width / 23,
        marginTop: units.height / 55,
    },
    motorContaniner: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.GRAY,
        borderRadius: 12,
        paddingHorizontal: units.width / 25,
        paddingVertical: units.height / 54,
    },
    detailTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.DARK,
    },
    detailSubTitle: {
        fontSize: 12,
        color: colors.GRAY,
        marginTop: units.height / 102,
    },
    detailTextContainer: {
        flex: 1,
        marginStart: units.width / 31,
    },
    driverContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    driverText: {
        fontWeight: '600',
        color: colors.DARK,
    },
    driverStatus: {
        color: colors.GRAY,
        fontSize: 12,
        marginTop: units.height / 101,
    },
    whiteFog1: {
        position: "absolute",
        width: '100%',
        height: units.height / 3,
        opacity: 1,
        bottom: 0,
        // left: 200
    },
    bottomContainer: {
        position: "absolute",
        bottom: 0,
        width: units.width,
        paddingTop: 20,
        paddingBottom: 30,
        alignItems: "center",
        justifyContent: "space-between",
        // borderTopStartRadius: 24,
        // borderTopEndRadius: 24,
        // paddingHorizontal: units.width / 13,
        flex: 1,
        // marginTop: units.height / -81,
        // backgroundColor: colors.GREEN,
    },
    topContainer: {
        position: "absolute",
        top: 0,
        width: units.width,
        paddingHorizontal: 20,
        paddingVertical: 20,
        // borderTopStartRadius: 24,
        // borderTopEndRadius: 24,
        // paddingHorizontal: units.width / 13,
        flex: 1,
        // marginTop: units.height / -81,
        backgroundColor: colors.WHITE,
    },
    buttonContainer: {
        marginVertical: 10,
        padding: 20,
        borderRadius: 10,
        width: units.width / 1.2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.ORANGE,
    },
    buttonContainerBlack: {
        marginVertical: 10,
        padding: 20,
        borderRadius: 10,
        width: units.width / 1.2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.BLACK,
    },
    searchBar: {
        width: '80%',
    },
    phoneContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.ORANGE,
        borderRadius: 14,
        paddingHorizontal: units.width / 31,
        paddingVertical: units.height / 67,
        backgroundColor: colors.ORANGE,
    },
    markerContainer: {
        backgroundColor: colors.WHITE,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: units.width / 47,
        paddingVertical: units.height / 101,
    },
    topBar: {
        position: 'absolute',
        left: units.width / 28,
        alignItems: 'center',
        marginTop: units.height / 20,
    },
});
