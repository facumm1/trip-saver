import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import appColors from '../../styles/appColors';
import {AppLogo} from '../Logos';

const {width} = Dimensions.get('window');

const GetStartedTop: React.FC = () => {
  return (
    <View style={styles.container}>
      <AppLogo logoStyles={styles.logoStyles} logoSize={40} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.darkBlue,
    borderBottomRightRadius: 140,
    borderBottomLeftRadius: 140,
    flex: 0.5,
    width: '100%',
    elevation: 5,
  },
  logoStyles: {
    alignItems: 'center',
    backgroundColor: appColors.grayActive,
    borderRadius: 85 / 2,
    height: 85,
    justifyContent: 'center',
    width: 85,
    position: 'absolute',
    bottom: -30,
    left: width / 2.5,
    elevation: 5,
  },
});

export default GetStartedTop;
