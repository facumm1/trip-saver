import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';

type Props = {
  children: React.ReactElement;
  btnStyles?: StyleProp<ViewStyle>;
  handleNav: () => void;
};

const NavigateButton: React.FC<Props> = ({
  children,
  btnStyles = {},
  handleNav,
}) => {
  return (
    <TouchableOpacity style={btnStyles} onPress={handleNav}>
      {children}
    </TouchableOpacity>
  );
};

export default NavigateButton;
