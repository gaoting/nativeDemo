import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import sha256 from 'js-sha256';
import Config from 'react-native-config';

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

const Api = async arr => {
  console.log('arr', arr, sha256(keys));
  const params = {
    method: 'POST',
    // headers: {
    //   Accept: '*/*',
    //   'Accept-Encoding': 'gzip, deflate, br',
    //   'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    //   'Content-Type': 'text/plain;charset=UTF-8',
    // },
    body: {
      time: Date.now(),
      sign: sha256(keys),
      messages: arr,
      pass: null,
    },
  };
  console.log('params', params);
  await fetch('https://xiaomo-gpt.netlify.app/api/generate', params)
    .then(response => response.text())
    .then(data => console.log('data', data))
    .catch(error => console.error(error));
};

const msgList = [];

function SendMsg() {
  // useEffect(() => {
  //   Api();
  // }, []);

  const [msgValue, setText] = useState('');
  const handleButtonClick = () => {
    let obj = {role: 'user', content: msgValue};
    // console.log('msgValue', msgValue);
    msgList.push(obj);
    console.log('msgList', msgList);
    Api(msgList);
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

function MsgList() {
  return (
    <View>
      <AiMsg />
      <IMsg />
      <SendMsg />
    </View>
  );
}

export default MsgList;
