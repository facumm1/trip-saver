import auth from '@react-native-firebase/auth';
import {
  createUserWithEmailAndPassword,
  storeUserData,
  updateUserProfile,
} from './register';

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
  try {
    const user = await createUserWithEmailAndPassword({email, password});
    await updateUserProfile({user, fullName});
    await storeUserData({user, fullName, email, password});

    const userData = await loginToFirebase({email, password});

    return userData;
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
  try {
    await auth().signInWithEmailAndPassword(email, password);
    console.log('Login successful:', email);

    return auth().currentUser;
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
