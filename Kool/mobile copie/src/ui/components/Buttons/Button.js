import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FC, ReactNode } from "react";

import { COLORS } from "../../../utils";
import {colors} from "../../../themes/Colors";

// interface Props {
//   children: ReactNode;
//   onPress: () => void;
//   outline?: boolean;
//   primary?: boolean;
//   extraStyles?: object;
// }

const Button = ({
  children,
  extraStyles,
  onPress,
  borderLine,
  outline,
  primary,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btn,
        borderLine? styles.borderLine : outline ? styles.outline : styles.primary,
        extraStyles,
      ]}
    >
      <Text
        style={[primary ? { fontSize: 18 , fontWeight: '600', color: COLORS.white } : { fontSize: 18 , fontWeight: '600',  color: COLORS.primary }]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    borderRadius: 10,
    padding: 15,
    width: "100%",
  },
  outline: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.white,
    borderWidth: 1,
    color: COLORS.black,
  },
  borderLine: {
    backgroundColor: colors.TRANSPARENT,
    borderColor: colors.WHITE,
    borderWidth: 5,
    color: colors.WHITE,
  },
  primary: {
    color: COLORS.white,
    backgroundColor: COLORS.primary,
  },
});
