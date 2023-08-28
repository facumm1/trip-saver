import React from 'react';
import {StyleSheet, View} from 'react-native';
import appColors from '../../styles/appColors';
import RegisterForm from '../Forms/RegisterForm';
import FadeAnimWrapper from '../../wrapper/HOC/FadeAnimWrapper';
import {ChangeFormButton} from '../Buttons';

type Props = {handleChangeForm: () => void};

const RegisterContainer: React.FC<Props> = ({handleChangeForm}) => {
  return (
    <FadeAnimWrapper wrapperStyle={styles.container}>
      <View style={styles.content}>
        <RegisterForm />

        <ChangeFormButton
          title="Volver"
          handleChangeForm={handleChangeForm}
          btnStyles={styles.backBtn}
        />
      </View>
    </FadeAnimWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: appColors.white,
  },
  content: {
    width: '75%',
  },
  backBtn: {
    marginTop: 10,
    alignSelf: 'center',
    paddingVertical: 2.5,
    paddingHorizontal: 15,
  },
});

export default RegisterContainer;
