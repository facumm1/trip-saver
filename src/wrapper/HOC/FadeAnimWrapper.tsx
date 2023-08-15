import React, {useEffect, useState} from 'react';
import {Animated, StyleProp, ViewStyle} from 'react-native';

type WrapperProps = {
  children: React.ReactNode;
  wrapperStyle?: StyleProp<ViewStyle>;
};

const FadeAnimWrapper: React.FC<WrapperProps> = ({
  children,
  wrapperStyle = {},
}) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[wrapperStyle, {opacity: fadeAnim}]}>
      {children}
    </Animated.View>
  );
};

export default FadeAnimWrapper;
