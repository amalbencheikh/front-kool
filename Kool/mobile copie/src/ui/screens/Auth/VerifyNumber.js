import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity, Image,
} from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput';
import {colors} from '../../../themes/Colors';
import {units} from '../../../themes/Units';
import CustomButton from '../../components/CustomButton';
import SocialMediaCard from '../../components/SocialMediaCard';
import CircleImage from '../../../assets/svgs/circle.svg';
import OrangeCircleImage from '../../../assets/svgs/orangeCircle.svg';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {routes} from '../../../navigation/routes';
import Loading from '../../components/Loading';
import Icons from "@expo/vector-icons/MaterialIcons";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {COLORS} from "../../../utils";
import BackHeader from "../../components/Headers/BackHeader";
// import authFirebase from '../../services/firebase/auth';

const VerifyNumber = ({navigation}) => {
    // const {loading, loginUser} = authFirebase();

    const signIn = async () => {
    };


    const loading = false;
    const initailLoginValue = {
        email: '',
        password: '',
    };

    const loginValidationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email is not in correct format')
            .required('This field is required'),
        password: Yup.string().required('This field is required'),
    });

    const handeleLogin = values => {
        loginUser(values.email, values.password);
    };

    const onClickSignUp = () => {
        navigation.navigate(routes.SIGNUP_SCREEN)
    };

    return (
        <SafeAreaView style={styles.container}>
            {loading && <Loading/>}
            {/*---*/}
            <View style={styles.topBubbles}>
                <View style={styles.firstBubble}>
                    <CircleImage/>
                </View>
                <View style={styles.secondBubble}>
                    <OrangeCircleImage/>
                </View>
            </View>
            <BackHeader title="Verify Number" onPress={() => {
                navigation.navigate(routes.WELCOME_SCREEN)
            }}/>
            {/*-----*/}
            <View style={styles.bodyContainer}>
                <Image
                    source={require("../../../assets/images/reset-pass-image.jpg")}
                    resizeMode="contain"
                    style={styles.resetPasswordImage}
                ></Image>

                {/*<Text style={styles.title}>Login</Text>*/}
                <Formik
                    initialValues={initailLoginValue}
                    onSubmit={handeleLogin}
                    validationSchema={loginValidationSchema}>
                    {({values, errors, touched, handleChange, handleSubmit}) => (
                        <>
                            <View>
                                <Text style={styles.emailText}>Email</Text>
                                <CustomInput
                                    placeHolder="Your Email address"
                                    type="email-address"
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                />
                                {errors.email && touched.email && (
                                    <Text style={styles.errorText}>{errors.email}</Text>
                                )}

                            </View>

                            <View style={{marginTop: units.height / 30}}>

                                <View style={styles.loginContainer}>
                                    <CustomButton title="Reset Password" onPress={signIn}/>

                                </View>
                            </View>
                        </>
                    )}
                </Formik>
            </View>

        </SafeAreaView>
    );
};

export default VerifyNumber;

const styles = StyleSheet.create({

    container: {
        flex: 1,

        backgroundColor: colors.WHITE,
    },
    bodyContainer: {
        paddingHorizontal: units.width / 14,
        height: '80%',
        justifyContent: 'center',
        // marginTop: units.height / 40,
    },
    emailText: {
        color: colors.DARKGRAY,
        fontSize: 16,
        marginBottom: units.height / 67,
    },
    title: {
        color: colors.BLACK,
        fontSize: 36,
        fontWeight: '600',
    },
    forgotText: {
        color: colors.ORANGE,
        textAlign: 'center',
    },
    loginContainer: {
        // marginHorizontal: units.width / 9,
        marginVertical: units.height / 35,
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: units.height / 25,
    },
    line: {
        height: 1,
        width: units.width / 3.5,
        backgroundColor: colors.GRAY,
    },
    signInContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: units.height / 18,
    },
    /*-*/
    resetPasswordImage: {
        width: '100%',
        height: units.height / 3,
        marginVertical: units.height / 20,
    },
    topBubbles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    // bottomBubbles: {
    //     // position: "absolute",
    //     bottom:0,
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    // },
    firstBubble: {
        // position: "absolute"
        bottom: 0,
        opacity: 0.8,
        height: 50,
        left: -30,
    },
    secondBubble: {
        // position: "absolute"
        top: -20,
        opacity: 0.5,
        height: 50,
        // left:-30,
    },
    errorText: {
        color: colors.ORANGE,
        marginTop: units.height / 101,
    },
});
