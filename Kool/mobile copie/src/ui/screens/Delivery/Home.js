import {StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList, Button} from 'react-native';
import React from 'react';
import {colors} from '../../../themes/Colors';
import {units} from '../../../themes/Units';
import {routes} from "../../../navigation/routes";


const Home = ({navigation}) => {


    return (
        <SafeAreaView style={styles.container}>

                <View style={styles.topContainer}>
                    <Text style={styles.topText}>Home Delivery</Text>

                </View>
            <Button
                title="Go to Notifications"
                onPress={() => navigation.navigate(routes.NOTIFICATIONS)}
            />
        </SafeAreaView>
    );
};

export default Home;

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
