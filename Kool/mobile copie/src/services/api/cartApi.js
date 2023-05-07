import {useState} from 'react';
import {cartList} from "../../database/CartList";

const cartApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deliveryPrice, setDeliveryprice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(deliveryPrice + subTotal);
  const [subTotal, setSubTotal] = useState();

  const getCartDataAPI = async () => {
    try {
      let response = true;
      if (response) {
        setData(cartList);
        calculateTotalPrice(cartList);
        setLoading(false);
      }
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const calculateTotalPrice = basketData => {
    if (basketData.length != 0) {
      let total = 0;
      basketData.forEach(item => {
        total += parseFloat(item.price * item.count);
      });
      setSubTotal(total.toFixed(2));
      setTotalPrice((total + 5.99).toFixed(2));
      setDeliveryprice(5.99);
    } else {
      setSubTotal(0);
      setDeliveryprice(0);
      setTotalPrice(0);
    }
  };

  return {
    data,
    loading,
    error,
    getCartDataAPI,
    totalPrice,
    subTotal,
    deliveryPrice,
  };
};

export default cartApi;
