import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StackParamList} from '../navigation/StackNavigator';

type ScreenName = keyof StackParamList;

const useNavigate = (screenName: string): (() => void) => {
  const navigation: NavigationProp<StackParamList, ScreenName> =
    useNavigation();

  const handleNav = () => {
    navigation.navigate(screenName as keyof StackParamList);
  };

  return handleNav;
};

export default useNavigate;
