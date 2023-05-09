import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Config from 'react-native-config';
import type {MsgListType} from '../types';
import {createParser} from 'eventsource-parser';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
  },
  flex: {
    flexDirection: 'row',
    margin: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  text: {
    backgroundColor: '#fff',
    width: '82%',
    padding: 8,
    marginHorizontal: 10,
    fontSize: 16,
  },
  input: {
    backgroundColor: '#fff',
    width: '78%',
    padding: 8,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

function AiMsg() {
  return (
    <View style={styles.flex}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text style={styles.text}>this is not me</Text>
    </View>
  );
}

function IMsg() {
  return (
    <View style={styles.flex}>
      <Text style={styles.text}>this is me</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  );
}
const keys = Config.CHARTGPT_KEY;
const baseUrl = Config.HTTPS_PROXY;

const Api = async (arr: MsgListType[]) => {
  const params = {
    method: 'POST',
    headers: {
      'Content-Type': ' application/json',
      Authorization: `Bearer ${keys}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: arr,
      stream: false,
    }),
  };
  console.log('params', params);
  const answerRes = await fetch(`${baseUrl}/v1/chat/completions`, params);
  const data = await answerRes;
  const jsons = await data.json();
  return jsons.choices[0].message;
};
const msgList: MsgListType[] = [];

let dataObj = {};
function SendMsg() {
  const [msgValue, setText] = useState('');
  const handleButtonClick = async () => {
    let obj: MsgListType = {role: 'user', content: msgValue};
    // console.log('msgValue', msgValue);
    msgList.push(obj);
    // console.log('msgList', msgList);
    dataObj = await Api(msgList);
    console.log('dataObj...', dataObj);
  };
  return (
    <View style={styles.flex}>
      <TextInput
        style={styles.input}
        multiline={true}
        numberOfLines={4}
        placeholder="please input your msg"
        onChangeText={setText}
        value={msgValue}
      />
      <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
// const GetMsg = (dataObj: any) => {
//   return <Text>{dataObj}</Text>;
// };
function MsgList() {
  return (
    <View>
      <AiMsg />
      <IMsg />
      <SendMsg />
      {/* <GetMsg /> */}
    </View>
  );
}

export default MsgList;
