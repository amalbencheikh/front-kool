import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    FlatList,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import BasketCard from '../components/BasketCard';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';
import CustomButton from '../components/CustomButton';
import {routes} from '../../navigation/routes';
import cartApi from '../../services/api/cartApi';
import Loading from '../components/Loading';
import {useIsFocused} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux'
import RNTextArea from "@freakycoder/react-native-text-area";

const Cart = ({navigation}) => {
    const {
        data,
        loading,
        error,
        getBasketDataApi,
        totalPrice,
        subTotal,
        deliveryPrice,
    } = cartApi();
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            getBasketDataApi();
        }
    }, [isFocused]);

    const renderBasketCard = ({item}) => <BasketCard item={item}/>;

    const onClickCheckout = () => {
        const basketParams = {
            subTotal,
            totalPrice,
            deliveryPrice,
        };
        navigation.navigate(routes.CHECKOUT, {basketParams});
    };

    const renderEmptyCard = () => (
        <Text style={styles.emptyText}>Empty of List</Text>
    );
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={styles.container}>
            {loading && <Loading/>}
            <View style={styles.topContainer}>
                <Text style={styles.topText}>Cart</Text>
            </View>
            <FlatList
                nestedScrollEnabled={true}
                data={data}
                renderItem={renderBasketCard}
                keyExtractor={(_, index) => index.toString()}
                style={styles.list}
                ListEmptyComponent={renderEmptyCard}
            />
            <View
                style={{
                    padding: 24,
                    borderRadius: 12,
                    shadowRadius: 8,
                    shadowOpacity: 0.2,
                    shadowColor: "#757575",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                }}
            >
                <Text style={styles.commentTitle}>Additional Comments (Optional)</Text>

                <RNTextArea
                    maxCharLimit={100}
                    style={{height: units.height / 6, borderRadius: 12, backgroundColor: "#F4F4F4"}}
                    defaultCharCount={0}
                    placeholderTextColor= "#b4b4b4"
                    exceedCharCountColor="#990606"
                    placeholder={"example: bring extra sauce, no tomato..."}
                    onChangeText={(text) => console.log("Text: ", text)}
                />
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.priceDetails}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceTitle}>Sub Total:</Text>
                        <Text style={styles.priceText}>{subTotal} TND</Text>
                    </View>
                    <Text style={styles.itemCount}>Item Count</Text>

                </View>
                <TouchableOpacity onPress={() => onClickCheckout()} style={styles.buttonContainer}>
                    <Text style={styles.checkoutText}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Cart;

const styles = StyleSheet.create({
    topContainer: {
        // backgroundColor:'red',
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: units.height / 34,

    },
    topText: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.DARK,
        // paddingHorizontal: units.width / 37,
        paddingTop: units.height / 15,
        paddingBottom: units.height / 50,
        marginHorizontal: 30,

        // paddingVertical: 20,
    },
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: colors.WHITE,
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: units.height / 34,
    },
    title: {
        color: colors.DARK,
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
    },
    list: {
        marginTop: units.height / 40,
        maxHeight: units.height / 2.5,
        backgroundColor: colors.WHITE,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.DARRWHITE,
        borderRadius: 100,
        paddingHorizontal: units.width / 31,
        paddingVertical: units.height / 101,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: units.height / 34,
        marginHorizontal: units.width / 17,
    },
    promeButton: {
        backgroundColor: colors.ORANGE,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: units.width / 14,
        paddingVertical: units.width / 50,
    },
    promeText: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.WHITE,
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        // paddingHorizontal: 25,
        // alignItems: 'center',
        // borderBottomWidth: 1,
        // borderBottomColor: colors.LIGHTGREY,
        // paddingBottom: units.height / 81,
    },
    priceDetails: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 25,
        // alignItems: 'center',
        // borderBottomWidth: 1,
        // borderBottomColor: colors.LIGHTGREY,
        // paddingBottom: units.height / 81,
    },
    priceTitle: {
        fontSize: 20,
        fontWeight:'500',
        color: colors.DARK,
    },
    commentTitle: {
        fontSize: 10,
        textTransform: "uppercase",
        fontWeight:'500',
        color: colors.DARKGRAY,
        marginBottom: 10,
        marginHorizontal: 5,
    },
    itemCount: {
        fontSize: 16,
        fontWeight:'300',
        color: colors.DARK,
    },
    bottomContainer: {
        height: units.height / 10,
        flexDirection: "row",
        justifyContent: "space-between",
        // position:"absolute",
        // bottom: 0,
        backgroundColor: "#F4F4F4",
        // marginHorizontal: units.width / 17,
    },
    priceText: {
        fontSize: 19,
        color: colors.DARK,
        fontWeight: '500',
    },
    buttonContainer: {
        right: 0,
        paddingVertical: 2,
        width: '30%',
        justifyContent: "center",
        alignItems: "center",
        // position: "absolute",
        // height:'100%',
        backgroundColor: colors.LIGHTORANGE,
        // marginTop: units.height / 50,
        // marginHorizontal: units.width / 7,
        // marginBottom: units.height / 81,
    },
    checkoutText: {
        color: colors.WHITE,
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
    },
    emptyText: {
        color: colors.ORANGE,
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center',
    },
});
