import {StyleSheet, Dimensions} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const modalTripStyles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: screenWidth > 500 ? screenWidth / 1.5 : screenWidth,
    height: screenHeight / 2,
    backgroundColor: 'gray',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    paddingVertical: 10,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  inputRow: {
    flexDirection: 'row',
    marginVertical: 7.5,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 7.5,
    width: '25%',
    textAlign: 'left',
    paddingLeft: 20,
    marginHorizontal: 5,
  },
  btnContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingVertical: 10,
    marginTop: 5,
  },
  warningLength: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#ff4336',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default modalTripStyles;
