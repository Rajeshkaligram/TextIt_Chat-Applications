import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import {ImagePath} from '../../Utils/Theme/ImagePath';
import {Font} from '../../Utils/Theme/Font';

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Signup');
    }, 3000);
  }, []);

  return (
    <ImageBackground style={styles.background} source={ImagePath.backimg}>
      <SafeAreaView style={styles.body}>
        <View style={styles.image}>
          <Image style={styles.logo} source={ImagePath.logo} />
        </View>
        <View style={styles.text_container}>
          <Text style={styles.text}>C r e a t e B y:</Text>
          <Text style={styles.text}>R a j e s h R o y</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  background: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  image: {
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    height: 350,
    width: 350,
  },
  text_container: {
    flex: 1,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  text: {
    fontFamily: Font.bold,
    fontSize: 15,
  },
});
