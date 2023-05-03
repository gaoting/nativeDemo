import React, {useState} from 'react';
import {TextInput, View, Button, Text} from 'react-native';

function Login() {
  const inputAccessoryViewID = 'uniqueID';
  const initialText = '';
  const [text, setText, submit] = useState(initialText);

  return (
    <View>
      <Text>login page</Text>

      <View>
        <TextInput
          inputAccessoryViewID={inputAccessoryViewID}
          onChangeText={setText}
          value={text}
          placeholder={'input chatgpt key'}
        />
        <Button title="submit" onPress={() => submit} />
      </View>
    </View>
  );
}

export default Login;
