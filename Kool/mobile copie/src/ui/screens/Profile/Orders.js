import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    ScrollView, TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../../../themes/Colors';
import ProfileCard from '../../components/ProfileCard';
import {units} from '../../../themes/Units';
import {routes} from '../../../navigation/routes';
import CustomButton from '../../components/CustomButton';
import {useDispatch} from "react-redux";
import {logOutAccount} from "../../../context/userSlice";

const ProfileUI = ({navigation}) => {
    const onClickNavigateOrders = () => {
        navigation.navigate(routes.ORDERS);
    };
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Image
                        source={require('../../../assets/images/profileBg.png')}
                        style={styles.image}
                    />

                    <View style={styles.profile}>
                        <ProfileCard/>

                    </View>
                </View>
                <View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.userName}>Full Name</Text>
                        <Text style={styles.editText}>+216 12345678</Text>
                    </View>
                </View>


                <View style={styles.profileContainer}>
                    <View style={styles.profileSection}>
                        <Text style={styles.optionTitle}>Account</Text>
                        <TouchableOpacity>
                            <View style={styles.optionContainer}>
                                <Text style={styles.optionLabel}>Edit Account</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.optionContainer}>
                                <Text style={styles.optionLabel}>Delivery Addresses</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileSection}>
                        <Text style={styles.optionTitle}>Payment</Text>
                        <TouchableOpacity>
                            <View style={styles.optionContainer}>
                                <Text style={styles.optionLabel}>Cards</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileSection}>
                        <Text style={styles.optionTitle}>Orders</Text>
                        <TouchableOpacity onPress={onClickNavigateOrders}>
                            <View style={styles.optionContainer}>
                                <Text style={styles.optionLabel}>My Orders</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileSection}>
                        <Text style={styles.optionTitle}>Misc</Text>
                        <TouchableOpacity>
                            <View style={styles.optionContainer}>
                                <Text style={styles.optionLabel}>Sign Restaurant Business</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.optionContainer}>
                                <Text style={styles.optionLabel}>Sign As Delivery</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileSection}>
                        <Text style={styles.optionTitle}>Other</Text>
                        <TouchableOpacity onPress={() => {
                            dispatch(logOutAccount());
                        }}>
                            <View style={styles.optionContainer}>
                                <Text style={styles.optionLabel}>Logout</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>



            </ScrollView>
        </SafeAreaView>
    );
};

export default ProfileUI;

const styles = StyleSheet.create({
    profileContainer: {
        // backgroundColor:colors.WHITE,
        // borderRadius: 20,
        marginHorizontal: units.width / 21,
        marginTop: units.height / 30,
        marginBottom: units.height / 30,
        // height: units.height / 12,
    },
    profileSection: {
        marginVertical: 5,
    },
    optionTitle: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.DARK,
        paddingVertical: 15,
    },
    optionLabel: {
        fontSize: 18,
        fontWeight: '400',
        color: colors.DARK,
        paddingVertical: 15,
    },
    optionContainer: {
        justifyContent: "center",
        paddingHorizontal: 20,
        marginVertical: 5,
        backgroundColor: colors.WHITE,
        borderRadius: 20,
        height: units.height / 12,
    },
    container: {
        flex: 1,
        // backgroundColor: colors.WHITE,
    },
    image: {
        alignSelf: 'center',
    },
    profile: {
        position: 'absolute',
        bottom: units.height / 41,
        left: 0,
        right: 0,
    },
    userName: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.DARK,
    },
    titleContainer: {
        alignItems: 'center',
        marginTop: units.height / -50,
    },
    editText: {
        color: colors.GRAY,
        marginTop: units.height / 81,
    },
    fieldContainer: {
        borderWidth: 1,
        borderColor: colors.ORANGE,
        borderRadius: 10,
        paddingVertical: units.height / 48,
        paddingLeft: units.width / 23,
        marginTop: units.height / 67,
    },
    bodyContainer: {
        marginHorizontal: units.width / 21,
        marginTop: units.height / 25,
    },
    fieldTitle: {
        fontSize: 16,
        color: colors.GRAY,
    },
    buttonContainer: {
        marginHorizontal: units.width / 12,
        marginTop: units.height / 38,
    },
});
