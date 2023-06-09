import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';
import FavoritesCard from './FavoritesCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {removeFavorites} from '../../context/userSlice';

const OrdersCard = ({item}) => {
  const dispatch = useDispatch();

  const removeRestaurantFavorites = () => {
    dispatch(removeFavorites({id: item.id}));
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      console.log(item.id)}}>
      <View  style={styles.container}>
        <View style={styles.bodyContainer}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.textBody}>Shop: {item.shop}</Text>
            <Text style={styles.textBody}>Price: {item.price}</Text>
            <Text style={styles.textBody}>Status: {item.status}</Text>
            <Text style={styles.textBody}>Estimated Arrival: {item.est}</Text>

          </View>
          <TouchableOpacity onPress={removeRestaurantFavorites}>
            <Icon
              name="delete-circle-outline"
              size={30}
              color={colors.ORANGE}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default OrdersCard;

const styles = StyleSheet.create({
  container: {

    backgroundColor: colors.WHITE,
    borderRadius: 20,
    shadowColor: colors.DARK,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 3,
    marginTop: units.height / 40,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.DARK,
  },
  bodyContainer: {
    marginHorizontal: units.width / 29,
    marginVertical: units.height / 67,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textBody: {
    color: colors.GRAY,
    marginTop: units.height / 81,
  },
  topContainer: {
    position: 'absolute',
    left: units.width / 31,
    right: units.width / 31,
    top: units.height / 67,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  priceContainer: {
    backgroundColor: colors.WHITE,
    borderRadius: 100,
    paddingHorizontal: units.width / 75,
    paddingVertical: units.height / 162,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 16,
    color: colors.DARK,
    fontWeight: '600',
  },
  rateCotanier: {
    backgroundColor: colors.WHITE,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: units.width / 47,
    paddingVertical: units.height / 101,
    marginTop: units.height / -32,
    marginLeft: units.width / 31,
    shadowColor: colors.ORANGE,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: units.height / 5,
  },
});
