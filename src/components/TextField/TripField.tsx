import React from 'react';
import {TextInput} from 'react-native';
import {Control, Controller} from 'react-hook-form';
import {StyleSheet} from 'react-native';

import {FormTypes} from '../Forms/TripForm';
import tripRules from '../../util/TripRules';

type Props = {
  control: Control<FormTypes, any>;
  fieldName: string;
  placeholder: string;
  borderActive: string;
  handleFieldActive: () => void;
};

const TripField: React.FC<Props> = ({
  fieldName,
  placeholder,
  control,
  borderActive,
  handleFieldActive,
}) => {
  const keyboardType =
    fieldName === 'amount' || fieldName === 'number_passengers'
      ? 'numeric'
      : 'default';

  return (
    <Controller
      name={fieldName as keyof FormTypes}
      control={control}
      rules={tripRules[fieldName]}
      render={({field: {onChange, onBlur, value}}) => (
        <TextInput
          onFocus={handleFieldActive}
          onBlur={() => {
            handleFieldActive();
            onBlur();
          }}
          onChangeText={onChange}
          value={value}
          style={{...styles.field, borderColor: borderActive}}
          placeholder={placeholder}
          keyboardType={keyboardType}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  field: {
    paddingLeft: 17.5,
    borderWidth: 1,
    borderRadius: 50,
  },
});

export default TripField;
