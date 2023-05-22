import {StyleSheet} from 'react-native';

const tripsScreenStyles = StyleSheet.create({
  title: {textAlign: 'center', fontSize: 25, fontWeight: 'bold'},
  tripContainer: {
    margin: 5,
    width: '75%',
    borderWidth: 1,
    borderRadius: 15,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  tripDate: {
    fontWeight: 'bold',
    fontSize: 22,
    borderWidth: 1,
    borderBottomLeftRadius: 10,
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 5,
  },
  btnDel: {
    backgroundColor: '#b32727',
    borderTopLeftRadius: 10,
  },
});

export default tripsScreenStyles;
