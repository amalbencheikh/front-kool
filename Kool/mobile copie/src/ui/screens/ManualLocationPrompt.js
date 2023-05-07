import {
    StyleSheet,
    Text,
    View,
    Linking,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {units} from '../../themes/Units';
import {colors} from '../../themes/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BackButton from '../components/BackButton';
import {AppTextInput} from "../components";
import {LinearGradient} from "expo-linear-gradient";
import {routes} from "../../navigation/routes";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import CustomInput from "../components/CustomInput";

const ManualLocationPropmt = ({navigation}) => {


    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView>
                <View style={styles.topContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Address</Text>
                        <Text style={styles.description}>Make Sure you enter the correct address</Text>
                    </View>

                    <Image
                        source={require("../../assets/images/phoneLocation.png")}
                        resizeMode="contain"
                        style={styles.locationPhoneImage}
                    ></Image>

                    <View style={styles.searchBar}>
                        <AppTextInput
                            leftIcon="search"
                            onTextChange={() => console.log("Search")}
                            //@ts-ignore
                            placeholder="Address Label (Home, Work Place ..)"
                            extraStyles={styles.inputField}
                        />
                    </View>
                    <View style={styles.searchBar}>
                        <AppTextInput
                            leftIcon="label"
                            onTextChange={(value) => console.log(value)}
                            //@ts-ignore
                            placeholder="Address Label (Home, Work Place ..)"
                            extraStyles={styles.inputField}
                        />
                    </View>

                </View>


                <View style={styles.bottomContainer}>

                    <View style={styles.bottomButtons}>

                        <View style={styles.locationContainer}>
                            <TouchableOpacity style={styles.buttonContainer}>
                                <Text style={{color: colors.WHITE}}>Confirm</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                console.log("Search Address")
                            }} style={styles.searchLocationButton}>
                            </TouchableOpacity>
                        </View>


                        <TouchableOpacity onPress={() => {
                            navigation.navigate(routes.GEO_LOCATION_MANUAL)
                        }} style={styles.buttonContainerBlack}>
                            <Text style={{color: colors.WHITE}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>

        </SafeAreaView>
    );
};

export default ManualLocationPropmt;

const styles = StyleSheet.create({
    locationPhoneImage: {
        width: '100%',
        height: units.height / 3,
        marginVertical: units.height / 35,
    },
    map: {
        height: units.height,
    },
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        // paddingVertical: units.height / 20,
    },
    deliverytext: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.DARK,
    },
    locationContainer: {
        // backgroundColor:"red",
        flexDirection: "row",
        // width: units.width / 1.2,
        justifyContent: "space-between",
        gap: 20,
        // alignItems: 'center',
        marginTop: units.height / 30,
        marginBottom: 10,
    },
    searchLocationButton: {
        backgroundColor: colors.ORANGE,
        padding: 15,
        paddingHorizontal: 35,
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
        // position: "absolute",
        // bottom: 0,
        width: units.width,
        // paddingTop: 20,
        paddingBottom: 20,
        alignItems: "center",
        // justifyContent: "space-between",
        // borderTopStartRadius: 24,
        // borderTopEndRadius: 24,
        // paddingHorizontal: units.width / 13,
        flex: 1,
        // marginTop: units.height / -81,
        // backgroundColor: colors.GREEN,
    },
    bottomButtons:{
        // backgroundColor:"red",
        width: '100%',
        paddingHorizontal: 20,

    },
    titleContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 35,
        fontWeight: '500',
    },
    description: {
        fontSize: 16,
        fontWeight: '300',
        color: "#696969"
    },
    topContainer: {
        // position: "absolute",
        top: 0,
        width: units.width,
        // marginVertical: 20,
        paddingHorizontal: 20,
        paddingTop: units.height / 15,
        // borderTopStartRadius: 24,
        // borderTopEndRadius: 24,
        // paddingHorizontal: units.width / 13,
        flex: 1,
        // marginTop: units.height / -81,
        backgroundColor: colors.WHITE,
    },
    buttonContainer: {
        // marginVertical: 10,
        padding: 25,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: colors.ORANGE,
    },
    buttonContainerBlack: {
        marginVertical: 10,
        padding: 25,
        borderRadius: 15,
        // width: units.width / 1.2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.BLACK,
    },
    searchBar: {
        marginVertical: 10,
        // width: '80%',
        // marginVertical: 0,
        // marginRight: 20,
    },
    inputField: {
        backgroundColor: "#f8f8f8",
        borderWidth: 1,
        borderColor: '#d3d3d3',
        padding: 22,
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
