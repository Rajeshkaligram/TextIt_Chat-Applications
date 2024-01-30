import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useState, useEffect, useCallback} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {useRoute} from '@react-navigation/native';
// import firestore from '@'

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const route = useRoute();

  //   useEffect(() => {
  //     setMessages([
  //       {
  //         _id: 1,
  //         text: 'Hello developer',
  //         createdAt: new Date(),
  //         user: {
  //           _id: 2,
  //           name: 'React Native',
  //           avatar: 'https://cdn-icons-png.flaticon.com/512/9131/9131529.png',
  //         },
  //       },
  //     ]);
  //   }, []);

  const onSend = useCallback(async (messages = []) => {
    const msg = messages[0];
    const myMsg = {
      ...msg,
      sendBy: route.params.id,
      sendTo: route.params.data.id,
      createdAt: Date.parse(msg.createdAt),
    };
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, myMsg),
    );
    fireStore
  }, []);
  return (
    <View style={styles.main}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
    //   <View style={styles.footer}>
    //     <TextInput
    //       placeholder="Type sms"
    //       style={styles.textInput}
    //       value={sms}
    //       onChangeText={txt => setSms(txt)}
    //     />
    //     <TouchableOpacity style={styles.sendTxt}>
    //       <Text>Send</Text>
    //     </TouchableOpacity>
    //   </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '100%',
    backgroundColor: 'lightblue',
  },
  footer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  bodyContainer: {
    paddingHorizontal: 10,
  },
  sendTxt: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
    height: 40,
    borderRadius: 10,
    padding: 10,
  },
});
