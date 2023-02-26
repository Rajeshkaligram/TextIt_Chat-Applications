import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomButton = props => {
  return (
    <Pressable
      onPress={props.onPressFunction}
      hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
      android_ripple={{color: '#00f'}}
      style={({pressed}) => [
        {backgroundColor: pressed ? '#dddddd' : '#F5A059'},
        styles.button,
        {...props.style},
      ]}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontSize: normalize(18),
    padding: normalize(8),
    paddingLeft: normalize(16),
    paddingRight: normalize(16),
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
    orderRadius: normalize(30),
    justifyContent: 'center',
  },
});
