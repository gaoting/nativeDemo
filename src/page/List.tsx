import React, {useState, setText, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

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

const Api = async () => {
  await fetch('https://xiaomo-gpt.netlify.app/api/generate', {
    method: 'POST',
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
      'Content-Type': 'text/plain;charset=UTF-8',
    },
    body: JSON.stringify({
      time: Date.now(),
      sign: GetKey,
    }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
};

const GetKey = () => {
  return '';
};

function SendMsg() {
  useEffect(() => {
    Api();
  }, []);

  const [msgValue, setMsgValue] = useState('');
  return (
    <View style={styles.flex}>
      <TextInput
        style={styles.input}
        multiline={true}
        numberOfLines={4}
        placeholder="please input your msg"
        onChangeText={text => setMsgValue(text)}
        value={msgValue}
      />
      <TouchableOpacity style={styles.button} onPress={() => setMsgValue('')}>
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
