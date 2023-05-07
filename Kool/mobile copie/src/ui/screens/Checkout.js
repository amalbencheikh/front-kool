import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';

const Checkout = ({navigation, route}) => {


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.topTitle}>Checkout</Text>
      </View>
    </SafeAreaView>
  );
};

export default Checkout;
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
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

});
