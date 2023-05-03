import React from 'react';
import {ScrollView, StyleSheet, Text, SafeAreaView, View} from 'react-native';

const list = [...Array(100)].map((_, i) => ({id: i, title: `索引 ${i}`}));

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {list.map(item => {
          return (
            <View style={styles.listItem} key={item.id}>
              <Text style={styles.listItemContent}>{item.title}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  scrollView: {
    flex: 1,
  },
  listItem: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  listItemContent: {
    textAlign: 'center',
    lineHeight: 50,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
