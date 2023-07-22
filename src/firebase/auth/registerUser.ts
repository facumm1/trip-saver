import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const createUserWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<FirebaseAuthTypes.User | null> => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
    return auth().currentUser;
  } catch (error) {
    throw error;
  }
};

export const updateUserProfile = async (
  user: FirebaseAuthTypes.User | null,
  fullName: string,
): Promise<void> => {
  try {
    await user?.updateProfile({
      displayName: fullName,
    });
  } catch (error) {
    throw error;
  }
};

export const storeUserData = async (
  user: FirebaseAuthTypes.User | null,
  fullName: string,
  email: string,
  password: string,
) => {
  try {
    await firestore().collection('usuarios').doc(user?.uid).set({
      fullName,
      email,
      password,
    });
  } catch (error) {
    throw error;
  }
};
