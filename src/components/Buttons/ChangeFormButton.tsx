import React from 'react';
import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';

type Props = {
  title: string;
  btnStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<ViewStyle>;
  handleChangeForm: () => void;
};

const ChangeFormButton: React.FC<Props> = ({
  title,
  btnStyles = {},
  textStyles = {},
  handleChangeForm,
}) => {
  return (
    <TouchableOpacity style={btnStyles} onPress={handleChangeForm}>
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ChangeFormButton;
