import {TextInput, View, Button, Text, StyleSheet, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login() {
  const inputAccessoryViewID = 'uniqueID';
  const initialText = '';
  const [text, setText] = useState(initialText);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const value = await AsyncStorage.getItem('chatgptKey');
    if (value !== null) {
      setText(value);
    }
  };

  const handleSubmit = async value => {
    await AsyncStorage.setItem('chatgptKey', value);
  };

  return (
    <View>
      <Text style={styles.title}>login page</Text>

      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          inputAccessoryViewID={inputAccessoryViewID}
          onChangeText={setText}
          value={text}
          placeholder={'input chatgpt key'}
        />
        <Button
          title="submit"
          color="#2196f3"
          onPress={() => handleSubmit(text)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 20,
  },
  container: {
    margin: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textInput: {
    height: 50,
    borderColor: '#ccc',
    fontSize: 16,
    borderWidth: 1,
    padding: 8,
  },
});

export default Login;
