import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import appColors from '../../styles/appColors';

type Props = {
  logoStyles?: StyleProp<ViewStyle>;
  logoSize: number;
};

const AppLogo: React.FC<Props> = ({logoStyles = {}, logoSize}) => {
  return (
    <View style={logoStyles}>
      <FontAwesome5 name="car" size={logoSize} color={appColors.darkBlue} />
    </View>
  );
};

export default AppLogo;
