import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import appColors from '../../styles/appColors';

const RightArrowIcon: React.FC<{iconSize: number}> = ({iconSize}) => {
  return (
    <MaterialIcons
      name="keyboard-arrow-right"
      size={iconSize}
      color={appColors.darkBlue}
    />
  );
};

export default RightArrowIcon;
