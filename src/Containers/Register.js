import {
  Alert,
  Image,
  Keyboard,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackBase,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../Constants/Colors';
import {AppText} from '../Components/common/app-text';
import {AppButton} from '../Components/common/AppButton';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {REGISTER} from '../Constants/ScreenConstant';

const Register = props => {
  const {navigation} = props;
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const onPressSignup = () => {
    // navigation.navigate(REGISTER);
    Alert.alert("Created Account")
  };
  return (
    <View style={styles.container}>
      <View style={styles.secondaryContainer}>
        <View style={styles.logoContainer}>
          <View>
            <Image
              style={styles.logo}
              source={require('../Assets/images/logo.png')}
            />
          </View>
          <View>
            <AppText color = {Colors.primary} subHeading underline>Sign In</AppText>
          </View>
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View style={styles.testContainer}>
            <View style={styles.loginContainer}>
              <View>
                <AppText color={Colors.primary} size={20}>
                  Create an Account
                </AppText>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="USERNAME"
                  placeholderTextColor={Colors.placeholderText}
                  value={username}
                  onChangeText={val => {
                    setUsername(val);
                  }}
                  style={[styles.input, {}]}
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  keyboardType='email-address'
                  placeholder="EMAIL"
                  placeholderTextColor={Colors.placeholderText}
                  value={email}
                  onChangeText={val => {
                    setEmail(val);
                  }}
                  style={[styles.input, {}]}
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  keyboardType='phone-pad'
                  placeholder="PHONE NUMBER"
                  placeholderTextColor={Colors.placeholderText}
                  value={phoneNumber}
                  onChangeText={val => {
                    setPhoneNumber(val);
                  }}
                  style={[styles.input, {}]}
                />
              </View>

              <View style={[styles.passwordContainer, styles.inputContainer]}>
                <TextInput
                  placeholder="PASSWORD"
                  placeholderTextColor={Colors.placeholderText}
                  value={password}
                  secureTextEntry={hidePass}
                  onChangeText={val => {
                    setPassword(val);
                  }}
                  style={[
                    styles.input,
                    {
                      borderBottomWidth: 0,
                    },
                  ]}
                />
              </View>
              <View style={[styles.passwordContainer, styles.inputContainer]}>
                <TextInput
                  placeholder="CONFIRM PASSWORD"
                  placeholderTextColor={Colors.placeholderText}
                  value={confirmPassword}
                  secureTextEntry={hidePass}
                  onChangeText={val => {
                    setConfirmPassword(val);
                  }}
                  style={[
                    styles.input,
                    {
                      borderBottomWidth: 0,
                    },
                  ]}
                />
              </View>

              <View style={styles.button}>
                <AppButton
                  onPress={onPressSignup}
                  children={'Create Account'}
                  loading={isLoading}
                />
              </View>
            </View>

            <View style={styles.bottomContainer}>
              <View style={styles.signinWithContainer}>
                  <View style = {{justifyContent:'center'}}>
                    <AppText size={15} center>
                    or sign in with:
                  </AppText>
                  </View>
                <View style={styles.iconTray}>
                  <Icon
                    raised
                    name="sc-facebook"
                    type="evilicon"
                    color={Colors.primary}
                  />
                  <Icon
                    raised
                    name="sc-facebook"
                    type="evilicon"
                    color={Colors.primary}
                  />
                  <Icon
                    raised
                    name="sc-facebook"
                    type="evilicon"
                    color={Colors.primary}
                  />
                </View>
              </View>
              <View style={[styles.frgtSupContainer, {}]}>
                <View style={{alignItems:'center'}}>
                    <AppText center color={Colors.primary}>
                      By Signing up you agree to our terms & conditions
                    </AppText>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Colors.background,
  },
  inputContainer: {
    marginVertical: 10,
  },
  secondaryContainer: {
    // backgroundColor:'red',
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: '5%',
    paddingHorizontal: '5%',
  },
  logoContainer: {
    // height: '30%',
    // backgroundColor:'red',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    height: 50,
    width: 60,
  },
  loginContainer: {
    // backgroundColor: 'orange',
    marginVertical: '5%',
    marginTop:40
  },
  input: {
    color: Colors.black,
    paddingHorizontal: 15,
    width: '100%',
    borderRadius: 10,
    borderBottomWidth: 2,
    borderColor: Colors.primary,
    paddingVertical: 5,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderBottomWidth: 2,
    borderColor: Colors.primary,
  },
  button: {
    marginVertical: '10%',
  },
  frgtSupContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    // bottom:1,
  },
  signinWithContainer: {
    // paddingTop: 5,
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  iconTray: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
});
