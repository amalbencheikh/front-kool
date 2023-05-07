import { createSlice } from "@reduxjs/toolkit";
import { initialStates } from "./initalStates";
import { showMessage } from "react-native-flash-message";

export const userSlicer = createSlice({
  name: "userSlice",
  initialState: initialStates,
  reducers: {
    loginAccount: (state, action) => {
      state.jwtToken = action.payload;
      // console.log("success", action.payload);
    },
    logOutAccount: (state) => {
      state.jwtToken = null;
      state.isDelivery = false;
      state.isManager = false;
    },
    signDelivery: (state) => {
      state.isDelivery = true;
      state.isManager = false;
    },
    signManager: (state) => {
      state.isManager = true;
      state.isDelivery = false;
    },
    removeManager: (state) => {
      state.isManager = false;
    },
    removeDelivery: (state) => {
      state.isDelivery = false;
    },
    addCartItems: (state, action) => {
      const { restaurant } = action.payload;
      const find = state.favoritesFood.find(
        (item) => item.id === restaurant.id
      );
      if (!find) {
        const newList = [...state.favoritesFood, restaurant];
        state.favoritesFood = newList;
        showMessage({
          message: "Added",
          type: "success",
        });
      } else {
        showMessage({
          message: "Already In Favourites",
          type: "warning",
        });
      }
    },
    removeCartItems: (state, action) => {
      const { id } = action.payload;
      const filterList = state.favoritesFood.filter((item) => item.id !== id);
      state.favoritesFood = filterList;
    },
  },
});

export const {
  initializeAccount,
  verifyAccount,
  loginAccount,
  logOutAccount,
  signManager,
  removeManager,
  signDelivery,
  removeDelivery,
  addCartItems,
  removeCartItems,
} = userSlicer.actions;

export default userSlicer.reducer;
