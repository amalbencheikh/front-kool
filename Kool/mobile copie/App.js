import { StatusBar } from "expo-status-bar";

import { MainNavigation } from "./src/navigation";
import { persistStore } from "redux-persist";
import React, { useEffect, useRef, useState } from "react";
import FlashMessage from "react-native-flash-message";
import { Provider, useSelector } from "react-redux";
import { store } from "./src/context/store";
import { PersistGate } from "redux-persist/integration/react";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Alert, Linking, PermissionsAndroid, Platform } from "react-native";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
const App = () => {
  const perStore = persistStore(store);
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });
    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={perStore}>
        <BottomSheetModalProvider>
          <MainNavigation />
        </BottomSheetModalProvider>
        <StatusBar style="auto" />
        <FlashMessage position="top" />
      </PersistGate>
    </Provider>
  );
};

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Test Notif",
      body: "Here is the notification body",
      data: { data: "goes here" },
    },
    trigger: { seconds: 2 },
  });
}
async function registerForPushNotificationsAsync() {
  let token;
  console.log("token at start", token);
  if (Constants.isDevice) {
    // const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    const { status: existingStatus } =
      await Notifications.requestPermissionsAsync();

    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      // const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      Alert.alert(
        "No Notification Permission",
        "please goto setting and on notification permission manual",
        [
          { text: "cancel", onPress: () => console.log("cancel") },
          { text: "Allow", onPress: () => Linking.openURL("app-settings:") },
        ],
        { cancelable: false }
      );
      return;
    }
    //    if (finalStatus !== 'granted') {
    //      alert('Failed to get push token for push notification!');
    //      return;
    //    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

export default App;
