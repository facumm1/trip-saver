import {StyleSheet} from 'react-native';

const tripsScreenStyles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 7.5,
  },
  tripContainer: {
    margin: 5,
    width: '75%',
    borderWidth: 0,
    borderRadius: 15,
    flexDirection: 'row',
    overflow: 'hidden',
    alignSelf: 'center',
  },
  tripDate: {
    fontWeight: 'bold',
    fontSize: 22,
    borderWidth: 0,
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
