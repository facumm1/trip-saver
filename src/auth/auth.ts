import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createUserWithEmailAndPassword,
  storeUserData,
  updateUserProfile,
} from './registerUser';
import {NavigationProp, useNavigation} from '@react-navigation/native';

type Credentials = {
  fullName?: string;
  email: string;
  password: string;
};

export const registerToFirebase = async ({
  fullName,
  email,
  password,
}: Credentials) => {
  //TODO revisar types de credentials
  try {
    console.log('Registrando usuario:', fullName, email, password);

    const user = await createUserWithEmailAndPassword(email, password);

    await updateUserProfile(user, fullName as string);

    await storeUserData(user, fullName as string, email, password);

    await loginToFirebase({email, password});

    return true;
  } catch (error: any) {
    if (
      error.code === 'auth/email-already-in-use' ||
      error.code === 'auth/invalid-email'
    ) {
      console.log('El usuario ya se encuentra registrado.');
      return false;
    }

    console.warn('Error:', error.code);
    return false;
  }
};

export const loginToFirebase = async ({email, password}: Credentials) => {
  //const navigation: NavigationProp<any, 'MainScreen'> = useNavigation();

  try {
    await auth().signInWithEmailAndPassword(email, password);

    console.log('Iniciando sesion:', email, password);

    const user = auth().currentUser;
    const uuid = user?.uid;

    /* await AsyncStorage.setItem('fullName', user?.displayName || '');
    await AsyncStorage.setItem('id', uuid || ''); */

    //navigation.navigate('MainScreen');
    return true;
  } catch (error: any) {
    if (
      error.code === 'auth/user-not-found' ||
      error.code === 'auth/wrong-password'
    ) {
      console.log('Email o contraseña incorrectos.');
      return false;
    }

    console.error('Error:', error.code);
    return false;
  }
};
