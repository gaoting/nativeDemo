import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
  chatInput: {
    height: 50,
    flex: 1,
  },
});
