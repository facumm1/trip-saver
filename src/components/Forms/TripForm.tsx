import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useForm} from 'react-hook-form';
import {AcceptTripButton, BackTripButton} from '../Buttons';
import {useNavigate} from '../../hooks';

import {TripMockTypes, tripMock} from '../../util/AddTripMock';
import TripFieldContainer from '../Containers/TripFieldContainer';
import appColors from '../../styles/appColors';

export interface FormTypes {
  passenger: string;
  amount: string;
  number_passengers: string;
  from: string;
  to: string;
}

const TripForm: React.FC = () => {
  const handleNav = useNavigate('MainScreen');

  const {
    control,
    reset,
    handleSubmit,
    formState: {errors},
  } = useForm<FormTypes>({
    defaultValues: {
      passenger: '',
      amount: '',
      number_passengers: '',
      from: '',
      to: '',
    },
  });

  const handleAccept = async () => {
    if (!(Object.keys(errors).length === 0)) {
      return;
    }

    const onSubmit = async (data: any) => {
      console.log('Data:', data);
      reset();
    };

    await handleSubmit(onSubmit)();
    handleNav();
  };

  const handleCancel = () => {
    reset();
    handleNav();
  };

  return (
    <View>
      <View style={styles.mapContainer}>
        {tripMock.map((data: TripMockTypes) => (
          <TripFieldContainer
            key={data.fieldName}
            data={data}
            control={control}
            errors={errors}
          />
        ))}
      </View>

      <AcceptTripButton handleAccept={handleAccept} />
      <BackTripButton handleCancel={handleCancel} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: appColors.white},
  title: {
    color: appColors.darkBlue,
    fontSize: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
  mapContainer: {alignSelf: 'center', marginBottom: 10, width: '70%'},
});

export default TripForm;
