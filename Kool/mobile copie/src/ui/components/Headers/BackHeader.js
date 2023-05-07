import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../themes/Colors';
import {units} from '../../../themes/Units';
import {MaterialCommunityIcons} from "@expo/vector-icons";

const BackHeader = ({showBackButton , title, onPress}) => {
    return (
        <View style={styles.header}>
            {showBackButton && (

            <TouchableOpacity onPress={onPress}>
                <View style={styles.headerButton}>
                    <MaterialCommunityIcons
                        color={colors.WHITE}
                        name="chevron-left"
                        size={30}
                    />
                </View>
            </TouchableOpacity>
            )}
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
};

export default BackHeader;

const styles = StyleSheet.create({

    header: {
        // top: 65,
        left: 22,
        width: 'auto',
        height: 42,
        // position: "absolute",
        flexDirection: "row",
        // justifyContent: 'center',
        alignItems: 'center',
        // marginVertical: 20
        marginBottom: 5,
        gap: 10,
    },
    buttonRow: {
        height: 56,
        flexDirection: "row",
        flex: 1,
        marginRight: -87,
        marginLeft: 5,
        marginTop: 2
    },

    headerButton: {
        // left: 3,
        width: 40,
        height: 40,
        // position: "absolute",
        backgroundColor: colors.ORANGE,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
        // top: 4
    },
    rectStack: {
        width: 40,
        height: 44,
        marginTop: -4,
        marginLeft: -1
    },
    headerTitle: {
        color: "rgba(44,44,44,1)",
        fontSize: 28,
        fontWeight: '600',
        marginLeft: 9
    },

});
