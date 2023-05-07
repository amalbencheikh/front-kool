import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomInput from "../../components/CustomInput";
import { colors } from "../../../themes/Colors";
import { units } from "../../../themes/Units";
import CustomButton from "../../components/CustomButton";
import CircleImage from "../../../assets/svgs/circle.svg";
import OrangeCircleImage from "../../../assets/svgs/orangeCircle.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import { routes } from "../../../navigation/routes";
import Loading from "../../components/Loading";
import BackHeader from "../../components/Headers/BackHeader";
import { useDispatch } from "react-redux";
import AuthService from "../../../services/axios/auth.service";

const Login = ({ navigation }) => {
  const data = {
    email: "test@gmail.com",
    password: "test",
  };

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const initailLoginValue = {
    email: "",
    password: "",
  };

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email is not in correct format")
      .required("This field is required"),
    password: Yup.string().required("This field is required"),
  });

  const handleLogin = async (values) => {
    // console.log(values);
    console.log("success : ", response);
    AuthService.login(values.email, values.password);
  };
  const onClickForgotPassword = (values) => {
    navigation.navigate(routes.FORGOT_PASSWORD);
  };
  const onClickSignUp = () => {
    navigation.navigate(routes.SIGNUP_SCREEN);
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loading />}
      {/*{error && <Loading/>}*/}
      <View style={styles.topBubbles}>
        <View style={styles.firstBubble}>
          <CircleImage />
        </View>
        <View style={styles.secondBubble}>
          <OrangeCircleImage />
        </View>
      </View>
      <BackHeader
        title="Login"
        onPress={() => {
          navigation.goBack();
        }}
      />

      <View style={styles.bodyContainer}>
        {/*<Text style={styles.title}>Login</Text>*/}
        <Formik
          initialValues={initailLoginValue}
          onSubmit={handleLogin}
          validationSchema={loginValidationSchema}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <>
              <View style={{ marginTop: units.height / 27 }}>
                <Text style={styles.emailText}>Email</Text>
                <CustomInput
                  placeHolder="Your Email address"
                  type="email-address"
                  value={values.email}
                  onChangeText={handleChange("email")}
                />
                {errors.email && touched.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>
              <View style={{ marginTop: units.height / 27 }}>
                <Text style={styles.emailText}>Password</Text>
                <CustomInput
                  placeHolder="Password"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  secure
                />
                {errors.password && touched.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
              </View>
              <View style={{ marginTop: units.height / 10 }}>
                <TouchableOpacity onPress={onClickForgotPassword}>
                  <Text style={styles.forgotText}>Forgot Password ?</Text>
                </TouchableOpacity>
                <View style={styles.loginContainer}>
                  {/*<CustomButton title="LOGIN" onPress={handleSubmit}/>*/}
                  <CustomButton title="LOGIN" onPress={handleSubmit} />
                  <View style={styles.signUpContainer}>
                    <Text>Don’t have an account? </Text>
                    <TouchableOpacity onPress={onClickSignUp}>
                      <Text style={{ color: colors.ORANGE }}>Sign Up</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
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
  title: {
    color: colors.BLACK,
    fontSize: 36,
    fontWeight: "600",
  },
  forgotText: {
    color: colors.ORANGE,
    textAlign: "center",
  },
  loginContainer: {
    // marginHorizontal: units.width / 9,
    marginVertical: units.height / 35,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: units.height / 25,
  },
  line: {
    height: 1,
    width: units.width / 3.5,
    backgroundColor: colors.GRAY,
  },
  signInContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: units.height / 18,
  },
  topBubbles: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  // bottomBubbles: {
  //     // position: "absolute",
  //     bottom:0,
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  // },
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
  errorText: {
    color: colors.ORANGE,
    marginTop: units.height / 101,
  },
});
