import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import modalTripStyles from '../../styles/inputModalStyles';
import {mapSecondsToString} from '../../helpers/mapDate';

export const InputContainer = ({
  tripInfo,
  dateInfo = false,
  setTripInfo,
  setModalDate,
}) => {
  const calcInputWidth = placeholder => {
    return placeholder === 'Pasajero' ? '50%' : '25%';
  };

  const mapPropName = str => {
    return str[0].toLowerCase() + str.slice(1);
  };

  return (
    <View style={modalTripStyles.inputContainer}>
      {dateInfo && (
        <TouchableOpacity
          style={{...modalTripStyles.input, justifyContent: 'center'}}
          onPress={() => setModalDate(true)}>
          <Text style={{textAlign: 'center'}}>
            {dateInfo.seconds ? mapSecondsToString(dateInfo) : 'Fecha'}
          </Text>
        </TouchableOpacity>
      )}

      {Object.values(tripInfo).map((tripData, tripIndex) => (
        <TextInput
          key={tripIndex}
          style={{
            ...modalTripStyles.input,
            width: calcInputWidth(tripData.placeholder),
            marginRight: 5,
          }}
          placeholder={tripData.placeholder}
          onChangeText={val =>
            setTripInfo(prevTripInfo => {
              return {
                ...prevTripInfo,
                [mapPropName(tripData.placeholder)]: val,
              };
            })
          }
          value={tripData.value}
        />
      ))}
    </View>
  );
};
