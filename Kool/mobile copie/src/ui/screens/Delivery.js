import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {units} from '../../themes/Units';
import {colors} from '../../themes/Colors';

const Delivery = ({navigation}) => {

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.topTitle}>Delivery</Text>
        </View>
      </SafeAreaView>
  );
};

export default Delivery;

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
