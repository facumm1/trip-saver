import {
  createUserWithEmailAndPassword,
  storeUserData,
  updateUserProfile,
} from './registerUser';

type Credentials = {
  fullName: string;
  email: string;
  password: string;
};

export const registerNewUser = async ({
  fullName,
  email,
  password,
}: Credentials): Promise<void> => {
  try {
    console.log('Registrando usuario!', fullName, email, password);

    const user = await createUserWithEmailAndPassword(email, password);

    await updateUserProfile(user, fullName);

    await storeUserData(user, fullName, email, password);

    await login();
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

export const login = async () => {};
