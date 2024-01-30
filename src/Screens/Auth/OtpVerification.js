import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Color} from '../../Utils/Theme/Color';
import normalize from '../../Utils/helpers/dimen';
import {Font} from '../../Utils/Theme/Font';
import {useRoute} from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OtpVerification = ({navigation}) => {
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');

  const route = useRoute();
  const mobileNumber = route.params?.id;
  // const Number = route.params?.id2;

  useEffect(() => {
    signInWithPhoneNumber();
  }, []);

  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(mobileNumber);
      setConfirm(confirmation);
    } catch (error) {
      console.log(error);
    }
  };

  const confirmVerificationCode = async () => {
    try {
      const response = await confirm.confirm(code);
      if (response) {
        navigation.navigate('ChatHome');
        await AsyncStorage.setItem('isSignedUp', 'true');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.body}>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>Waiting to automatically detect an SMS sent to</Text>
        <View style={{alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginTop: 13}}>{mobileNumber}</Text>
            <Text style={styles.text1}> Wrong Number?</Text>
          </View>
        </View>
      </Pressable>
      <View style={styles.input_view}>
        <OTPInputView
          style={{width: '80%', height: 200}}
          pinCount={6}
          onCodeChanged={code => setCode(code)}
          autoFocusOnLoad
          codeInputFieldStyle={styles.input}
          codeInputHighlightStyle={styles.input_highlight}
          onCodeFilled={code => {
            // setCode(code);
            confirmVerificationCode();
          }}
        />
      </View>
      <Text>Enter 6-digit code</Text>
      <Pressable>
        <Text style={styles.text3}>Did not Received code?</Text>
      </Pressable>
      <View style={styles.container}>
        <TouchableOpacity style={styles.next}>
          <Text style={styles.text2} onPress={() => confirmVerificationCode()}>
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    marginTop: normalize(20),
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  text1: {
    color: Color.blue,
    fontFamily: Font.medium,
    fontSize: normalize(12),
    marginTop: normalize(10),
  },
  input_view: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    borderColor: Color.black,
    fontSize: normalize(25),
    color: Color.black,
    width: normalize(39),
    height: normalize(45),
    borderBottomWidth: normalize(2),
    borderRadius: normalize(10),
  },
  input_highlight: {
    borderColor: Color.orange,
  },
  container: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  next: {
    backgroundColor: Color.orange,
    alignItems: 'center',
    marginBottom: normalize(70),
    borderRadius: normalize(30),
  },
  text2: {
    fontFamily: Font.bold,
    color: Color.black,
    fontSize: normalize(15),
    padding: normalize(8),
    paddingLeft: normalize(14),
    paddingRight: normalize(14),
  },
  text3: {
    marginTop: normalize(10),
    color: Color.orange,
    fontFamily: Font.bold,
    fontSize: normalize(13),
  },
});
