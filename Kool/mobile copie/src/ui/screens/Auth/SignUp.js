import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CircleImage from "../../../assets/svgs/circle.svg";
import OrangeCircleImage from "../../../assets/svgs/orangeCircle.svg";
import { colors } from "../../../themes/Colors";
import { units } from "../../../themes/Units";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialMediaCard from "../../components/SocialMediaCard";
import { Formik } from "formik";
import * as Yup from "yup";
import Loading from "../../components/Loading";
import { routes } from "../../../navigation/routes";
import BackHeader from "../../components/Headers/BackHeader";
import AuthService from "../../../services/axios/auth.service";

const Register = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const registerIntialValue = {
    email: "",
    fullName: "",
    password: "",
    rePassword: "",
  };

  const registerValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email is not in correct format")
      .required("This field is required"),
    fullName: Yup.string().required("This field is required"),
    password: Yup.string()
      .min(8, "Password must be a minimum of 6 characters")
      .required("This field is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords are not the same")
      .required("This field is required"),
  });

  const handleRegister = async (values) => {
    const res = await AuthService.register(
      values.fullName,
      values.email,
      values.password
    );

    console.log(res.data);
  };

  const onClickLogin = () => {
    navigation.navigate(routes.LOGIN_SCREEN);
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loading />}
      <KeyboardAwareScrollView>
        <View style={styles.topBubbles}>
          <View style={styles.firstBubble}>
            <CircleImage />
          </View>
          <View style={styles.secondBubble}>
            <OrangeCircleImage />
          </View>
        </View>
        <BackHeader
          title={"Sign Up"}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.bodyContainer}>
          <View>
            <Formik
              initialValues={registerIntialValue}
              onSubmit={handleRegister}
              validationSchema={registerValidationSchema}
            >
              {({ values, errors, touched, handleChange, handleSubmit }) => (
                <>
                  {/*<Text style={styles.title}>Sign Up</Text>*/}
                  <View style={{ marginTop: units.height / 27 }}>
                    <Text style={styles.emailText}>E-mail</Text>
                    <CustomInput
                      placeHolder="Your E-mail"
                      type="email-address"
                      value={values.email}
                      onChangeText={handleChange("email")}
                    />
                    {errors.email && touched.email && (
                      <Text style={styles.errorText}>{errors.email}</Text>
                    )}
                  </View>
                  <View style={{ marginTop: units.height / 27 }}>
                    <Text style={styles.emailText}>Full Name</Text>
                    <CustomInput
                      placeHolder="Your Full Name"
                      value={values.fullName}
                      onChangeText={handleChange("fullName")}
                    />
                    {errors.fullName && touched.fullName && (
                      <Text style={styles.errorText}>{errors.fullName}</Text>
                    )}
                  </View>
                  <View style={{ marginTop: units.height / 32 }}>
                    <Text style={styles.emailText}>Password</Text>
                    <CustomInput
                      placeHolder="Your password"
                      value={values.password}
                      onChangeText={handleChange("password")}
                      secure
                    />
                    {errors.password && touched.password && (
                      <Text style={styles.errorText}>{errors.password}</Text>
                    )}
                  </View>
                  <View style={{ marginTop: units.height / 32 }}>
                    <Text style={styles.emailText}>Re-Password</Text>
                    <CustomInput
                      placeHolder="Re password"
                      value={values.rePassword}
                      onChangeText={handleChange("rePassword")}
                      secure
                    />
                    {errors.rePassword && touched.rePassword && (
                      <Text style={styles.errorText}>{errors.rePassword}</Text>
                    )}
                  </View>
                  <View style={styles.policyContainer}>
                    <Text>{`By signing up, you’re agree to our`}</Text>
                    <View style={styles.policyLinkContainer}>
                      <TouchableOpacity onPress={onClickLogin}>
                        <Text style={{ color: colors.ORANGE }}>
                          Terms & Conditions{" "}
                        </Text>
                      </TouchableOpacity>
                      <Text>&</Text>
                      <TouchableOpacity onPress={onClickLogin}>
                        <Text style={{ color: colors.ORANGE }}>
                          Privacy Policy
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.buttonContainer}>
                    <CustomButton title="Next" onPress={handleSubmit} />
                    <View style={styles.loginContainer}>
                      <Text>Don’t have an account? </Text>
                      <TouchableOpacity onPress={onClickLogin}>
                        <Text style={{ color: colors.ORANGE }}>Login</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </>
              )}
            </Formik>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  title: {
    color: colors.BLACK,
    fontSize: 36,
    fontWeight: "600",
  },
  bodyContainer: {
    paddingHorizontal: units.width / 14,
    marginTop: units.height / 40,
  },
  emailText: {
    color: colors.DARKGRAY,
    fontSize: 16,
    marginBottom: units.height / 67,
  },
  buttonContainer: {
    // marginHorizontal: units.width / 9,
    marginVertical: units.height / 25,
  },
  loginContainer: {
    // flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: "center",
    marginTop: units.height / 45,
  },
  policyContainer: {
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: units.height / 45,
  },
  policyLinkContainer: {
    flexDirection: "row",
    gap: 8,
    // justifyContent: 'center',
    alignItems: "center",
    // marginTop: units.height / 100,
    marginTop: 2,
  },
  line: {
    height: 1,
    width: units.width / 3.5,
    backgroundColor: colors.GRAY,
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: units.height / 35,
  },
  errorText: {
    color: colors.ORANGE,
    marginTop: units.height / 101,
  },
  /*-*/
  topBubbles: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  firstBubble: {
    // position: "absolute"
    bottom: 0,
    opacity: 0.8,
    height: 50,
    left: -30,
  },
  secondBubble: {
    // position: "absolute"
    top: -20,
    opacity: 0.5,
    height: 50,
    // left:-30,
  },
});
