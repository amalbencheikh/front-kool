import {StyleSheet, Text, View,ScrollView, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import FavoritesScreenCard from '../../components/FavoritesScreenCard';
import {colors} from '../../../themes/Colors';
import {units} from '../../../themes/Units';
import {useSelector} from 'react-redux';

const Notifications = () => {
    const favoritesRestaurants = useSelector(
        selector => selector.user.favoritesFood,
    );

    const renderCategory = ({item}) => <FavoritesScreenCard item={item}/>;

    const emptyFavoritesList = () => (
        <Text style={styles.emptyText}>Empty of List</Text>
    );

    return (
        <SafeAreaView style={styles.container}>

                <View style={styles.topContainer}>
                    <Text style={styles.topText}>Delivery Notifications</Text>
                </View>

        </SafeAreaView>
    );
};

export default Notifications;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,


    },
    list: {
        paddingHorizontal: units.width / 14,
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: units.height / 18,
        // marginHorizontal: units.width / 16,
    },
    topText: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.DARK,
        // paddingHorizontal: units.width / 37,
        // paddingTop: units.height / 15,
        // paddingBottom: units.height / 50,
        marginHorizontal: 30,

        // paddingVertical: 20,
    },
    emptyText: {
        fontSize: 32,
        fontWeight: '600',
        textAlign: 'center',
    },
});
