import React from 'react';
import {View, Button} from 'react-native';

function HomeTabs() {
  return (
    <>
      <View>
        <Button
          title="go to login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </>
  );
}

export default HomeTabs;
