import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView, TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../../../themes/Colors';
import {units} from '../../../themes/Units';
import {routes} from '../../../navigation/routes';
import {useDispatch} from "react-redux";
import {logOutAccount, removeDelivery, removeManager, signDelivery, signManager} from "../../../context/userSlice";

const ProfileUI = ({navigation}) => {
  const onClickNavigateOrders = () => {
    navigation.navigate(routes.ORDERS);
  };
  const dispatch = useDispatch();

  return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.titleContainer}>
              <Text style={styles.userName}>Full Name</Text>
              <Text style={styles.userName}>Delivery</Text>
              <Text style={styles.editText}>+216 12345678</Text>
            </View>
          </View>


          <View style={styles.profileContainer}>

            <View style={styles.profileSection}>
              <Text style={styles.optionTitle}>Orders</Text>
              <TouchableOpacity onPress={onClickNavigateOrders}>
                <View style={styles.optionContainer}>
                  <Text style={styles.optionLabel}>All Orders</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.profileSection}>
              <Text style={styles.optionTitle}>Misc</Text>

              <TouchableOpacity  onPress={() => { dispatch(removeDelivery())}}>
                <View style={styles.optionContainer}>
                  <Text style={styles.optionLabel}>Back to Market</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.profileSection}>
              <Text style={styles.optionTitle}>Other</Text>
              <TouchableOpacity onPress={() => {
                dispatch(removeDelivery());
                dispatch(removeManager());
                dispatch(logOutAccount());
              }}>
                <View style={styles.optionContainer}>
                  <Text style={styles.optionLabel}>Logout</Text>
                </View>
              </TouchableOpacity>

            </View>
          </View>



        </ScrollView>
      </SafeAreaView>
  );
};

export default ProfileUI;

const styles = StyleSheet.create({
  profileContainer: {
    marginHorizontal: units.width / 21,
    marginTop: units.height / 30,
    marginBottom: units.height / 30,
  },
  profileSection: {
    marginVertical: 5,
  },
  optionTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.DARK,
    paddingVertical: 15,
  },
  optionLabel: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.DARK,
    paddingVertical: 15,
  },
  optionContainer: {
    justifyContent: "center",
    paddingHorizontal: 20,
    marginVertical: 5,
    backgroundColor: colors.WHITE,
    borderRadius: 20,
    height: units.height / 12,
  },
  container: {
    flex: 1,
  },
  image: {
    alignSelf: 'center',
  },
  profile: {
    position: 'absolute',
    bottom: units.height / 41,
    left: 0,
    right: 0,
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.DARK,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: units.height / -50,
  },
  editText: {
    color: colors.GRAY,
    marginTop: units.height / 81,
  },
  fieldContainer: {
    borderWidth: 1,
    borderColor: colors.ORANGE,
    borderRadius: 10,
    paddingVertical: units.height / 48,
    paddingLeft: units.width / 23,
    marginTop: units.height / 67,
  },
  bodyContainer: {
    marginHorizontal: units.width / 21,
    marginTop: units.height / 25,
  },
  fieldTitle: {
    fontSize: 16,
    color: colors.GRAY,
  },
  buttonContainer: {
    marginHorizontal: units.width / 12,
    marginTop: units.height / 38,
  },
});
