import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../Constants/Colors';
import {AppText} from '../Components/common/app-text';
import {AppButton} from '../Components/common/AppButton';
import {InputField} from '../Components/common';
import {Icon} from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.secondaryContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../Assets/images/logo.png')}
          />
        </View>
        <KeyboardAwareScrollView contentContainerStyle={{height:"100%"}} >
          <View>
            <AppText color={Colors.primary} size={20}>
              Sign In
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

          <View style={styles.button}>
            <AppButton children={'Log In'} loading={isLoading} />
          </View>

          <View style={styles.bottomContainer}>
            <View style={styles.signinWithContainer}>
              <AppText size={15} center>
                or sign in with:
              </AppText>
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
              <View style={styles.forgotPassword}>
                <Pressable>
                  <AppText bold color={Colors.primary}>
                    Don't Have An Account ?
                  </AppText>
                </Pressable>
              </View>
              <View style={styles.signUp}>
                <Pressable onPress={() => console.log('pressed')}>
                  <AppText bold color={Colors.primary}>
                    Forgot Password
                  </AppText>
                </Pressable>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>

      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor: Colors.background,
  },
  inputContainer: {
    marginVertical: 10,
  },
  secondaryContainer: {
    // backgroundColor:'red',
    flex:1,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: '5%',
    paddingHorizontal: '5%',
  },
  logoContainer: {
    height:'30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 100,
    width: 200,
  },
  loginContainer: {
    // backgroundColor: 'orange',
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
    flexDirection:'row',
    justifyContent:'space-between',
  },
  bottomContainer: {
    flex:1,
    justifyContent:'space-evenly'
    // bottom:1,
  },
  signinWithContainer: {
    // paddingTop: 5,
  },
  iconTray: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
});
