import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>hello text</Text>
      <View>
        <Text>hello text2</Text>
        <Image
          source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{height: 40, boderColor: 'gray', borderWidth: 1}}
        default="type in me"
      />
    </ScrollView>
  );
};

export default App;
