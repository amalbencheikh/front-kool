import {
    StyleSheet,
    Text,
    View,
    Linking,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView, FlatList,
} from 'react-native';
import React from 'react';
import {units} from '../../themes/Units';
import {colors} from '../../themes/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OrderCard from "../components/OrdersCard";
import {ordersList} from "../../database/OrdersList";

const Orders = ({navigation}) => {


    const onClickBack = () => {
        navigation.goBack();
    };


    const
        renderCategory = ({item}) => <OrderCard item={item}/>;

    const emptyOrdersList = () => (
        <View style={styles.bodyContainer}>
            <View style={styles.deliveryContainer}>
                <Text style={styles.deliverytext}>No Orders</Text>
                <Text style={styles.toText}>Confirm an order first</Text>
            </View>
        </View>
    );
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <TouchableOpacity  onPress={onClickBack}>
                    <Icon name="chevron-left" size={38} color={colors.DARK} />
                </TouchableOpacity>
                <Text style={styles.topTitle}>Orders</Text>
                <View />
            </View>

            <FlatList
                data={ordersList}
                renderItem={renderCategory}
                keyExtractor={(_, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                style={styles.list}
                ListEmptyComponent={emptyOrdersList}
            />

        </SafeAreaView>
    );
};

export default Orders;

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: units.height / 18,
        marginHorizontal: units.width / 16,
    },
    topTitle: {
        color: colors.DARK,
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        paddingRight: units.width / 10,

    },
    map: {
        height: units.height / 2,
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
    deliveryContainer: {
        alignItems: 'center',
        marginTop: units.height / 30,
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
    bottomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: units.height / 41,
        justifyContent: 'space-between',
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
    screenTitle: {
        fontSize: 20,
        marginHorizontal: units.width / 3.75,
    },
    topBar: {
        // position: 'absolute',
        flexDirection: 'row',
        left: units.width / 28,
        alignItems: 'center',
        marginTop: units.height / 20,

        // backgroundColor: 'red'
    },
});
