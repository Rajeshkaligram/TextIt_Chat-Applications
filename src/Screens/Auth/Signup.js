import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  useColorScheme,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {ImagePath} from '../../Utils/Theme/ImagePath';
import {Font} from '../../Utils/Theme/Font';
import {Color} from '../../Utils/Theme/Color';
import PhoneInput from 'react-native-phone-number-input';
import normalize from '../../Utils/helpers/dimen';


const Signup = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const isDarkMode = useColorScheme() === 'dark';

  const phoneNumberVerify = () => {
    if (mobileNumber && mobileNumber.length === 13) {
      navigation.navigate('OtpVerification', {id: mobileNumber},{id2: mobileNumber});
      console.log(mobileNumber);
    } else {
      valid1();
    }
  };
  const valid1 = () => {
    if (mobileNumber && mobileNumber.length > 13) {
      Alert.alert('Please enter a valid mobile number');
    } else {
      Alert.alert('Please enter 10 digit mobile number');
    }
  };
  return (
    <KeyboardAvoidingView>
      <ImageBackground style={styles.body} source={ImagePath.backimg}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View style={styles.head_container}>
          <Text style={styles.text1}>Welcome To</Text>
          <Text style={styles.text2}>TextIt</Text>
        </View>
        <View style={styles.body_container}>
          <View style={styles.container_child}>
            <Text style={styles.text3}>Enter Your Phone Number</Text>
            <Text style={{marginTop: normalize(35)}}>
              TextIt will need to verify your phone number.
            </Text>
            <View style={styles.input}>
              <PhoneInput
                defaultValue={mobileNumber}
                defaultCode="IN"
                withShadow={true}
                onChangeFormattedText={text => {
                  setMobileNumber(text);
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.button_container}>
          <TouchableOpacity
            style={styles.submit}
            onPress={() => phoneNumberVerify()}>
            <Text style={styles.text4}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  body: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  head_container: {
    alignItems: 'center',
    marginTop: normalize(30),
    marginBottom: normalize(40),
  },
  text1: {
    fontFamily: Font.extraBold,
    fontSize: normalize(40),
    color: Color.black,
  },
  text2: {
    marginTop: normalize(10),
    fontFamily: Font.bold,
    fontSize: normalize(20),
    color: Color.orange,
    fontSize: normalize(50),
  },
  body_container: {
    flex: 1,
    backgroundColor: Color.white,
    borderColor: Color.white,
    borderWidth: normalize(1),
    borderTopLeftRadius: normalize(80),
    borderTopRightRadius: normalize(80),
    height: Dimensions.get('window').height,
  },
  container_child: {
    marginTop: normalize(25),
    alignItems: 'center',
  },
  text3: {
    fontFamily: Font.bold,
    fontSize: normalize(15),
    color: Color.black,
  },
  input: {
    marginTop: normalize(15),
    alignItems: 'center',
  },
  button_container: {
    alignItems: 'center',
    backgroundColor: Color.white,
  },
  submit: {
    backgroundColor: Color.orange,
    alignItems: 'center',
    marginBottom: normalize(70),
    borderRadius: normalize(30),
  },
  text4: {
    fontFamily: Font.bold,
    color: Color.black,
    fontSize: normalize(18),
    padding: normalize(8),
    paddingLeft: normalize(16),
    paddingRight: normalize(16),
  },
});
