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

export const userRegistering = async ({
  fullName,
  email,
  password,
}: Credentials): Promise<void> => {
  try {
    console.log('Registrando usuario!', fullName, email, password);

    const user = await createUserWithEmailAndPassword(email, password);

    await updateUserProfile(user, fullName as string);

    await storeUserData(user, fullName as string, email, password);

    await userLogging({email, password});
  } catch (error: any) {
    if (
      error.code === 'auth/email-already-in-use' ||
      error.code === 'auth/invalid-email'
    ) {
      console.log(error.code);
    }
    console.warn('Error:', error.code);
  }
};

export const userLogging = async ({email, password}: Credentials) => {
  //const navigation: NavigationProp<any, 'MainScreen'> = useNavigation();

  try {
    console.log('User account signed in. Storing personal data...');

    await auth().signInWithEmailAndPassword(email, password);

    const user = auth().currentUser;
    const uuid = user?.uid;

    await AsyncStorage.setItem('fullName', user?.displayName || '');
    await AsyncStorage.setItem('id', uuid || '');

    //navigation.navigate('MainScreen');
  } catch (error: any) {
    if (
      error.code === 'auth/user-not-found' ||
      error.code === 'auth/wrong-password'
    ) {
      console.warn('Email o contraseña incorrectos.');
      //handleErrorMsg('El usuario no se encuentra registrado.');
      return;
    }

    console.error('Error:', error.code);
  }
};
