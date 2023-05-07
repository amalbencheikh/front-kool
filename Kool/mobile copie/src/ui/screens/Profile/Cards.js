import {StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import FavoritesScreenCard from '../../components/FavoritesScreenCard';
import {colors} from '../../../themes/Colors';
import {units} from '../../../themes/Units';
import {useDispatch, useSelector} from 'react-redux';
import BackHeader from "../../components/Headers/BackHeader";
import CircleImage from "../../../assets/svgs/circle.svg";
import OrangeCircleImage from "../../../assets/svgs/orangeCircle.svg";
import {favouritesList} from "../../../database/FavouritesList";

const Cards = ({navigation}) => {


    const favoritesRestaurants = useSelector(
        selector => selector.user.favoritesFood,
    );
    console.log(favoritesRestaurants)

    const renderCategory = ({item}) => <FavoritesScreenCard item={item}/>;

    const emptyFavoritesList = () => (
        <Text style={styles.emptyText}>Empty of List</Text>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBubbles}>
                <View style={styles.firstBubble}>
                    <CircleImage />
                </View>
                <View style={styles.secondBubble}>
                    <OrangeCircleImage/>
                </View>
            </View>
            {/*<View style={styles.topContainer}>*/}
            <BackHeader title={"My Cards"} onPress={() => {
                navigation.goBack()
            }}/>
            {/*    <Text style={styles.topText}>Favourites</Text>*/}
            {/*</View>*/}

            {/*<View style={styles.topContainer}>*/}
            {/*    <Text style={styles.topText}>Favorites</Text>*/}
            {/*</View>*/}
            <FlatList
                // ListHeaderComponent={<Text style={styles.topText}>Favourites</Text>}
                data={favouritesList}
                renderItem={renderCategory}
                keyExtractor={(_, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                style={styles.list}
                ListEmptyComponent={emptyFavoritesList}
            />
        </SafeAreaView>
    );
};

export default Cards;

const styles = StyleSheet.create({
    topBubbles: {
        position: "absolute",
        width: '100%',
        top: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    firstBubble: {
        // position: "absolute",
        bottom:0,
        opacity: 0.8,
        height: 50,
        // left:-30,
    },
    secondBubble: {
        // position: "absolute",
        // top:-20,
        // right:0,
        opacity: 0.5,
        height: 50,
        // left:-30,
    },
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        // paddingVertical: units.height / 20,
        // marginTop: units.height / 20,


    },
    list: {
        marginTop: 25,
        paddingHorizontal: units.width / 14,
    },
    topContainer: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: "center",
        backgroundColor: colors.WHITE,
        shadowColor: "#4f4e4e",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.23,
        shadowRadius: 9.51,

        elevation: 1,

    },
    topText: {
        fontSize: 25,
        fontWeight: '600',
        color: colors.DARK,
        // paddingHorizontal: units.width / 37,
        // paddingTop: units.height / 15,
        // paddingBottom: units.height / 50,
        marginTop: units.height / 30,
        marginLeft: 10,
        // paddingVertical: 20,
    },
    emptyText: {
        fontSize: 32,
        fontWeight: '600',
        textAlign: 'center',
    },
});
