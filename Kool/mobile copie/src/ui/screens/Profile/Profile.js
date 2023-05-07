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
import {units} from '../../../themes/Units';
import {routes} from '../../../navigation/routes';
import {useDispatch, useSelector} from "react-redux";
import {
    signDelivery,
    signManager
} from "../../../context/userSlice";
import AuthService from "../../../services/axios/auth.service";

const Profile = ({navigation}) => {
    const onClickNavigateOrders = () => {
        navigation.navigate(routes.ORDERS);
    };
    const dispatch = useDispatch();

    const handleLogout = () => {
        AuthService.logout()
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.userName}>Full Name</Text>
                        <Text style={styles.editText}>+216 12345678</Text>
                    </View>
                </View>
                <View style={styles.profileContainer}>
                    <View style={styles.profileSection}>
                        <Text style={styles.optionTitle}>Account</Text>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate(routes.EDIT_PROFILE)
                        }}>
                            <View style={styles.optionContainer}>
                                <Text style={styles.optionLabel}>Edit Account</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate(routes.DELIVERY_ADDRESSES)
                        }}>
                            <View style={styles.optionContainer}>
                                <Text style={styles.optionLabel}>Delivery Addresses</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileSection}>
                        <Text style={styles.optionTitle}>Payment</Text>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate(routes.CARDS)
                        }}>
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
                        <TouchableOpacity onPress={() => {
                            dispatch(signManager());
                        }}>
                            <View style={styles.optionContainer}>
                                <Text style={styles.optionLabel}>Restaurant Business</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            dispatch(signDelivery())
                        }}>
                            <View style={styles.optionContainer}>
                                <Text style={styles.optionLabel}>Sign As Delivery</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileSection}>
                        <Text style={styles.optionTitle}>Other</Text>
                        <TouchableOpacity onPress={handleLogout}>
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

export default Profile;

const styles = StyleSheet.create({
    profileContainer: {
        marginHorizontal: units.width / 21,
        marginTop: units.height / 30,
        marginBottom: units.height / 30,
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
        paddingHorizontal: 20,
        marginTop: units.height / 10,
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
