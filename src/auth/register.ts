import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const createUserWithEmailAndPassword = async (
  data: UserCredentials,
): Promise<FirebaseAuthTypes.User | null> => {
  const {email, password} = data;

  try {
    await auth().createUserWithEmailAndPassword(email, password);
    return auth().currentUser;
  } catch (error) {
    throw error;
  }
};

export const updateUserProfile = async (data: FirebaseData): Promise<void> => {
  const {user, fullName} = data;

  try {
    await user?.updateProfile({
      displayName: fullName,
    });
  } catch (error) {
    throw error;
  }
};

export const storeUserData = async (data: UserData): Promise<void> => {
  const {user, fullName, email, password} = data;

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

interface FirebaseData {
  user: FirebaseAuthTypes.User | null;
  fullName: string | undefined;
}

interface UserCredentials {
  email: string;
  password: string;
}

interface UserData extends FirebaseData, UserCredentials {}
