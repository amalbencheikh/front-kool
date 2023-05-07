import React, {useCallback, useRef, useState} from "react";
import {
    FlatList,
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    View,
    Text,
} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import {AppText, AppTextInput, SafeAreaScreen} from "../components";
import {COLORS} from "../../utils";
import {colors} from "../../themes/Colors";
import Icons from "@expo/vector-icons/MaterialIcons";

import {BottomSheetModal} from "@gorhom/bottom-sheet";
import MapView, {Marker, UrlTile} from "react-native-maps";
import {units} from "../../themes/Units";
import {routes} from "../../navigation/routes";


export default function Home({navigation}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

    const bottomSheetModalRef = useRef(null);
    const openFilterModal = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const data = [
        {
            id: 1,
            name: "Offers",
            img: require("../../assets/images/PizzaCategory.png"),
        },
        {
            id: 2,
            name: "Italian",
            img: require("../../assets/images/Sandwich.png"),
        },
        {
            id: 3,
            name: "Indian",
            img: require("../../assets/images/Juice.png"),
        },
        {
            id: 4,
            name: "Chinese",
            img: require("../../assets/images/Doughnut.png"),
        },
    ];
    const onClickViewAll = () => {
        navigation.jumpTo(routes.RESTAURANT);
    };


    const showModal = () => setIsModalOpen((prev) => !prev);
    const showFilterModal = () => setIsFilterModalOpen((prev) => !prev);

    return (
        <SafeAreaScreen>
            <ScrollView style={styles.container}
                        showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        paddingHorizontal: 20,
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 8,
                    }}
                >

                    <View style={{flex: 1}}>
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: "600",
                                marginBottom: 8,
                                color: colors.BLACK,
                            }}
                            numberOfLines={1}
                        >
                            Hi, USER
                        </Text>

                    </View>
                    <TouchableOpacity
                        style={{
                            width: 45,
                            aspectRatio: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 15,
                            backgroundColor: '#f3f3f3',
                            borderWidth: 1,
                            borderColor: '#f3f3f3',
                        }}
                    >
                        <Icons name="notifications" size={24} color={colors.BLACK}/>
                    </TouchableOpacity>
                </View>


                {/*---------------------------------------*/}
                <View
                    style={{
                        paddingHorizontal: 20,
                    }}
                >
                    <AppText style={styles.deliverText}>Delivering To</AppText>
                    <View style={styles.locationContainer}>
                        <AppText style={styles.locationText}>Current Location</AppText>
                        <TouchableWithoutFeedback onPress={showModal}>
                            <MaterialCommunityIcons
                                color={COLORS.primary}
                                name="chevron-down"
                                size={30}
                            />
                        </TouchableWithoutFeedback>

                        {/* Location Modal  */}
                        <Modal visible={isModalOpen} animationType="slide">
                            <TouchableWithoutFeedback onPress={showModal}>
                                <MaterialCommunityIcons name="close" size={30}/>
                            </TouchableWithoutFeedback>
                            <MapView style={mapStyle.map}>

                            </MapView>

                        </Modal>
                    </View>
                </View>


                {/* Search Bar Section */}
                <View style={{
                    flexDirection: "row",
                    paddingVertical: 8,
                    gap: 3,
                    paddingHorizontal: 20,

                }}>
                    <View style={styles.searchBar}>
                        <AppTextInput
                            leftIcon="search"
                            onTextChange={() => console.log("Search")}
                            //@ts-ignore
                            placeholder="Search food"
                        />
                    </View>

                    <TouchableOpacity
                        onPress={showFilterModal}
                        style={{
                            width: 52,
                            aspectRatio: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 52,
                            backgroundColor: colors.BLACK,
                        }}
                    >
                        <Icons name="tune" size={24} color={colors.WHITE}/>
                    </TouchableOpacity>

                    <Modal visible={isFilterModalOpen} animationType="slide">
                        <View style={{flexDirection: "row", paddingVertical: 8, gap: 12}}>


                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: "600",
                                    marginBottom: 8,
                                    color: colors.BLACK,
                                }}
                                numberOfLines={1}
                            >
                                Filter
                            </Text>
                            <TouchableWithoutFeedback onPress={showFilterModal}>
                                <MaterialCommunityIcons name="close" size={30}/>
                            </TouchableWithoutFeedback>
                        </View>
                    </Modal>
                </View>


                {/* Scroll Categories  */}
                <FlatList
                    data={data}
                    horizontal
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => (
                        <View style={styles.imgContainer}>
                            <Image source={item.img} style={styles.img}/>
                            <AppText>{item.name}</AppText>
                        </View>
                    )}
                    style={styles.scrollContainer}
                />
                <View
                    style={[styles.cardContainer, {marginTop: units.height / 33}]}>
                    <Text style={styles.cardTitle}>Partenered Restaurants</Text>
                    <TouchableOpacity onPress={onClickViewAll}>
                        <Text style={styles.viewButton}>View All {'>'} </Text>
                    </TouchableOpacity>
                </View>


                {/*Bottom Sheet Modal -----------------------------*/}
                <BottomSheetModal
                    snapPoints={["85%"]}
                    index={0}
                    ref={bottomSheetModalRef}
                    // backdropComponent={(props) => <CustomBackdrop {...props} />}
                    backgroundStyle={{
                        borderRadius: 24,
                        backgroundColor: colors.GRAY,
                    }}
                    handleIndicatorStyle={{
                        backgroundColor: colors.GRAY,
                    }}
                >
                    {/*<FilterView />*/}
                </BottomSheetModal>
            </ScrollView>
        </SafeAreaScreen>
    );
}

const styles = StyleSheet.create({
    cartContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
        width: "100%",
    },
    container: {
        marginVertical: 20,
        marginHorizontal: "auto",
        width: "100%",
    },

    deliverText: {
        color: COLORS.mediumGray,
        fontWeight: "400",
    },
    greetingText: {
        fontSize: 20,
        fontWeight: "300",
    },
    img: {
        borderRadius: 10,
        height: units.height / 15,
        width: units.height / 15,
    },
    imgContainer: {
        backgroundColor: '#e3e3e3',
        borderRadius: 20,
        alignItems: "center",
        marginRight: 10,
    },
    locationContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    locationText: {
        fontWeight: "500",
        marginRight: 10,
    },
    popularResContainer: {
        marginTop: 10,
    },
    popularResHeading: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    primaryText: {
        color: COLORS.primary,
    },
    searchBar: {
        width: '80%',
        marginVertical: 0,
        marginRight: 20,
    },
    scrollContainer: {
        marginVertical: 15,
    },
});
const mapStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});
