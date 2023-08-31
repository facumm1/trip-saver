import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Control, FieldErrors} from 'react-hook-form';

import {FieldName} from '../Text';
import appColors from '../../styles/appColors';
import {useToggle} from '../../hooks';
import {TripMockTypes} from '../../util/AddTripMock';
import {FormTypes} from '../Forms/TripForm';
import TripField from '../TextField/TripField';

type Props = {
  control: Control<FormTypes, any>;
  errors: FieldErrors<FormTypes>;
  data: TripMockTypes;
};

const TripFieldContainer: React.FC<Props> = ({control, errors, data}) => {
  const {open: isFieldActive, handleOpen: handleFieldActive} = useToggle();
  const {fieldText, fieldName, placeholder} = data;

  const error = errors && errors[fieldName as keyof FormTypes];
  const message = error ? error?.message : '';

  const borderActive = isFieldActive ? appColors.darkBlue : appColors.gray;

  return (
    <View style={styles.fieldContainer} key={fieldName}>
      <FieldName text={fieldText} />
      <TripField
        fieldName={fieldName}
        placeholder={placeholder}
        control={control}
        handleFieldActive={handleFieldActive}
        borderActive={borderActive}
      />

      <Text style={styles.errorMsg}>{message?.toString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {marginBottom: 5},
  errorMsg: {color: 'red', paddingLeft: 15},
});

export default TripFieldContainer;
