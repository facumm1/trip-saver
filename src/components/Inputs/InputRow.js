import React, {useContext} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import modalTripStyles from '../../styles/inputModalStyles';
import {mapSecondsToString} from '../../helpers/mapDate';
import {TripInfoContext} from '../../store/TripInfoContext';

const InputRow = ({tripInfo, setModalDate, dateInfo = false}) => {
  const {setTripInfo} = useContext(TripInfoContext);

  const calcInputWidth = placeholder => {
    return placeholder === 'Pasajero' ? '50%' : '25%';
  };

  const mapPropName = str => {
    return str[0].toLowerCase() + str.slice(1);
  };

  const selectDataType = type => {
    return type === 'Importe' ? 'numeric' : 'default';
  };

  return (
    <View style={modalTripStyles.inputRow}>
      {dateInfo && (
        <TouchableOpacity
          style={{...modalTripStyles.input, justifyContent: 'center'}}
          onPress={() => setModalDate(true)}>
          <Text style={{textAlign: 'left'}}>
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
          keyboardType={selectDataType(tripData.placeholder)}
        />
      ))}
    </View>
  );
};

export default InputRow;
