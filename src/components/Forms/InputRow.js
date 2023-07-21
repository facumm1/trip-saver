import React, {useContext, useMemo} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import modalTripStyles from '../../styles/inputModalStyles';
import {mapSecondsToString} from '../../helpers/mapDate';
import FirestoreContext from '../../context/Firestore/FirestoreContext';

const InputRow = ({setModalDate, tripInfo, dateInfo = false}) => {
  const {setSelectedTrip} = useContext(FirestoreContext);

  const calcInputWidth = useMemo(() => {
    return placeholder => (placeholder === 'Pasajero' ? '50%' : '25%');
  }, []);

  const mapPropName = useMemo(() => {
    return str => str[0].toLowerCase() + str.slice(1);
  }, []);

  const selectDataType = useMemo(() => {
    return type => (type === 'Importe' ? 'numeric' : 'default');
  }, []);

  const handleInputChange = (placeholder, val) => {
    setSelectedTrip(prevTripInfo => ({
      ...prevTripInfo,
      [mapPropName(placeholder)]: val,
    }));
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
          onChangeText={val => handleInputChange(tripData.placeholder, val)}
          value={tripData.value}
          keyboardType={selectDataType(tripData.placeholder)}
        />
      ))}
    </View>
  );
};

export default InputRow;
