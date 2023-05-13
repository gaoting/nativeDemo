import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import type {MsgListType} from '../types';
import Api from '../api/chat';

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
      <Text style={styles.text}>1111</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  );
}

let arrMsg = [];

const msgList: MsgListType[] = [];

let dataObj: MsgListType = {role: 'user' || 'assistant', content: ''};

function SendMsg() {
  const [msgIndex, setMsgIndex] = useState<number>(0);
  const [msgValue, setText] = useState('');
  const [message, setMessage] = useState<string>();
  const msgListRecord = useRef<string[]>([]);

  const timer = useRef<number>();
  function delayRender(length: number) {
    timer.current = setInterval(() => {
      if (msgIndex >= (length || 0)) {
        timer.current && clearInterval(timer.current);
      }
      setMsgIndex(cur => cur + 1);
    }, 50);
  }

  useEffect(() => {
    Api(msgList)
      .then(res => res.text())
      .then(res => {
        const msgList = res.split('data: ');
        let len = msgList.length - 1;
        for (let i = 1; i < len; i++) {
          if (i === len) {
            setMessage(msgListRecord.current.join(''));
            delayRender(msgListRecord.current.join('').length);
            break;
          }

          const resultFgm =
            JSON.parse(msgList[i]).choices[0].delta.content || '';
          msgListRecord.current.push(resultFgm);
        }
      });

    return () => {
      timer.current && clearInterval(timer.current);
      timer.current = undefined;
    };
  }, []);

  const handleButtonClick = async () => {
    let obj: MsgListType = {role: 'user', content: msgValue};

    msgList.push(obj);
    // console.log('msgList', msgList);

    // msgList.push(dataObj);
    console.log('dataObj...', dataObj, msgList);
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
      <View>
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
          <ScrollView
            style={styles.scrollView}
            contentInsetAdjustmentBehavior="automatic">
            <Text style={styles.listItemContent}>
              {message?.slice(0, msgIndex)}
            </Text>
            {/* {list.map(item => {
            return (
              <View style={styles.listItem} key={item}>
              </View>
            );
          })} */}
          </ScrollView>
          <View style={{width: '100%', flexDirection: 'row'}}>
            <Input style={styles.chatInput} placeholder="this is a demo" />
            <Button title="Submit" />
          </View>
        </KeyboardAvoidingView>
        {/* <AiMsg />
        <IMsg /> */}
      </View>
      <SendMsg />
    </View>
  );
}

export default MsgList;
