import {tabBarStyle} from "../ui/common/tabBarStyle";

export const hideTabBar = (navigation) => {
    navigation.setOptions({
        tabBarStyle: { display: 'none' },
    });
};
export const showTabBar = (navigation) => {
    navigation.setOptions({
        tabBarStyle: tabBarStyle,
    });
};
