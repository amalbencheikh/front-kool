import {Image, ImageBackground, StyleSheet, View} from "react-native";

import {AppText, SafeAreaScreen} from "../../components";
import {AppButton} from "../../components/Buttons";
import {COLORS, routes} from "../../../utils";
import CustomButton from "../../components/CustomButton";
import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import TopBubble from "../../../assets/images/TopBubble.svg";
import CircleImage from "../../../assets/svgs/circle.svg";
import OrangeCircleImage from "../../../assets/svgs/orangeCircle.svg";
import {units} from "../../../themes/Units";
import {colors} from "../../../themes/Colors";

export default function Welcome({navigation}) {
    return (
        <SafeAreaScreen styles={styles.container}>
            <View style={styles.imageContainer}>
                <TopBubble />
            </View>
            <View style={styles.plateGroup}>

                    <Image
                        source={require("../../../assets/images/plateGroup.png")}
                        resizeMode="contain"
                        style={styles.centerPlate}
                    ></Image>


            </View>
            <LinearGradient
                colors={['transparent' ,'rgba(253,139,51,0.7)' ,   'rgb(255,139,51)']}
                style={styles.whiteFog1}
            />

            <View style={styles.introContainer}>
                <View style={styles.textContainer}>
                    <AppText style={[styles.text]}>Kool</AppText>
                </View>
                <AppText style={styles.introText}>
                    The Best Food, Right at your doorstep.
                </AppText>
            </View>

            {/* Auth Buttons  */}
            <View style={styles.authBtnsContainer}>
                <View style={styles.btnContainer}>
                    <AppButton
                        extraStyles={styles.btn}
                        outline
                        onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}
                    >
                        Login
                    </AppButton>
                </View>
                <View style={styles.btnContainer}>
                    <AppButton
                        extraStyles={styles.btn}
                        primary
                        borderLine
                        onPress={() => navigation.navigate(routes.SIGNUP_SCREEN)}
                    >
                        Create an Account
                    </AppButton>
                </View>
            </View>

        </SafeAreaScreen>
    );
}

const styles = StyleSheet.create({
    btn:{
        paddingVertical: 20,
        borderRadius: 30,
    },
    imageContainer: {
        position: 'absolute',
        top: 0 ,
        left: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topBubbles: {
        position: 'absolute',
        height: 300,
        width: 300,
        top: 0 ,
        left: 0,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    group: {
        top: 0,
        left: 0,
        width: 373,
        height: 311,
        position: "absolute"
    },
    imageStack: {
        width: 314,
        height: 264,
        marginTop: 14,
        marginLeft: 38
    },
    plateGroup: {
        // top:'20%',
        left: 0,
        width: '100%',
        // height: 546,
        height: '100%',
        position: "absolute",
        alignItems:'center',
        // justifyContent:'center'
        // display: 'flex',
        // flexDirection: 'column',
    },
    centerPlate: {
        // left: '-20%',
        width: '150%',
        // position: "absolute",
        top: 20,
        height: '100%'
    },

    whiteFog1: {
        position: "absolute",
        width: '100%',
        height: '100%',
        opacity: 1,
        bottom: 0,
        // left: 200
    },
    whiteFog1_imageStyle: {},

    authBtnsContainer: {
        bottom: "5%",
        marginHorizontal: "auto",
        position: "absolute",
        width: "90%",
    },
    btnContainer: {
        marginVertical: 10,
    },
    container: {
        alignItems: "center",
        flex: 1,
        // justifyContent: "center",
        backgroundColor: COLORS.white,
    },
    btyText: {
        color: COLORS.primary,
    },
    introContainer: {
        alignItems: "flex-start",
        marginHorizontal: "auto",
        marginVertical: 20,
        // marginTop: 50,
        marginLeft: 50,
        width: "90%",
    },
    introText: {
        fontSize: 30,
        color: colors.LIGHT_BLACK,
        fontWeight: "300",
    },
    label: {
        textTransform: "uppercase",
    },
    text: {
        fontSize: units.height  / 15,
        fontWeight: "400",
    },
    textContainer: {
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 2,
    },
});
