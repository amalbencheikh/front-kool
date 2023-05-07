import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../themes/Colors';
import {AppText, SafeAreaScreen} from "../components";

const RestaurantDetail = ({navigation, route}) => {
    return (
        <SafeAreaView style={styles.container}>
                <AppText>Restaurant Detail</AppText>
        </SafeAreaView>
    );
};

export default RestaurantDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
    },
});
