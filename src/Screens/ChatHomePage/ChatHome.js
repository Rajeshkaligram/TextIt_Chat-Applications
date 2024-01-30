import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChatHome = ({navigation}) => {
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('isSignedUp');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  const data = [
    {id: '01', name: 'Rajesh Roy'},
    {id: '02', name: 'Anik Karmakar'},
    {id: '03', name: 'Ayanava L'},
  ];
  return (
    <>
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.txt}>Home</Text>
        </View>
        <View style={styles.bodyContainer}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.container}
              onPress={() =>
                navigation.navigate('ChatScreen', {data: item, id: item.id})
              }>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/9131/9131529.png',
                }}
                style={styles.icon}
              />
              <Text style={styles.txt2}>{item?.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </>
  );
};

export default ChatHome;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '100%',
    backgroundColor: 'lightblue',
  },
  txt: {
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  txt2: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  icon: {
    height: 30,
    width: 30,
    marginLeft: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
  },
  bodyContainer: {
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
});
