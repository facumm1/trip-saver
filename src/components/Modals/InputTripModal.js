import React, {useState} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {Modal, Text, TextInput, View} from 'react-native';
import buttonStyles from '../../styles/buttonStyle';
import {updateFireStore, writeFirestore} from '../../helpers/firestoreActions';
import initialTripInfo from '../../helpers/initialTripInfo';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const InputTripModal = ({
  tripModal,
  title,
  addTripFirestore = false,
  tripSelected = initialTripInfo(),
  setTripModal,
  setEditedTrip,
}) => {
  const [tripInfo, setTripInfo] = useState(tripSelected);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={tripModal}
      onRequestClose={() => setTripModal(prevStatus => !prevStatus)}>
      <View style={modalTripStyles.container}>
        <View>
          {/* Title */}
          <Text style={modalTripStyles.title}>{title}</Text>

          {/* Inputs */}
          <View style={{alignItems: 'center'}}>
            <View style={modalTripStyles.inputContainer}>
              <TextInput
                style={{
                  ...modalTripStyles.input,
                  width: '50%',
                  marginRight: 5,
                }}
                placeholder="Nombre del pasajero"
                onChangeText={name =>
                  setTripInfo(prevTripInfo => {
                    return {...prevTripInfo, pasajero: name};
                  })
                }
                value={tripInfo.pasajero}
              />
              <TextInput
                style={{
                  ...modalTripStyles.input,
                  marginLeft: 5,
                }}
                placeholder="Importe"
                onChangeText={amount =>
                  setTripInfo(prevTripInfo => {
                    return {...prevTripInfo, importe: amount};
                  })
                }
                value={tripInfo.importe}
              />
            </View>

            <View style={modalTripStyles.inputContainer}>
              <TextInput
                style={modalTripStyles.input}
                placeholder="Fecha"
                onChangeText={date =>
                  setTripInfo(prevTripInfo => {
                    return {...prevTripInfo, fecha: date};
                  })
                }
                value={tripInfo.fecha}
              />
              <TextInput
                style={{...modalTripStyles.input, marginHorizontal: 10}}
                onChangeText={from =>
                  setTripInfo(prevTripInfo => {
                    return {...prevTripInfo, desde: from};
                  })
                }
                placeholder="Desde"
                value={tripInfo.desde}
              />
              <TextInput
                style={modalTripStyles.input}
                placeholder="Hacia"
                onChangeText={dest =>
                  setTripInfo(prevTripInfo => {
                    return {...prevTripInfo, hacia: dest};
                  })
                }
                value={tripInfo.hacia}
              />
            </View>
          </View>

          {/* Buttons */}
          <View style={modalTripStyles.btnContainer}>
            <TouchableOpacity
              style={{
                ...buttonStyles.btn,
                backgroundColor: '#fff',
                marginRight: 6,
              }}
              onPress={() => {
                if (addTripFirestore) {
                  writeFirestore(tripInfo);
                } else {
                  updateFireStore(tripInfo);
                  setEditedTrip(prev => ({updated: true, id: ''}));
                }

                setTripModal(prevStatus => !prevStatus);
                setTripInfo(initialTripInfo());
              }}>
              <Text
                style={{
                  ...buttonStyles.textBtn,
                  color: 'gray',
                  marginHorizontal: 5,
                }}>
                {addTripFirestore ? 'Añadir' : 'Modificar'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                ...buttonStyles.btn,
                backgroundColor: '#fff',
                marginLeft: 6,
              }}
              onPress={() => {
                if (!addTripFirestore) {
                  setEditedTrip(prev => ({...prev, id: ''}));
                }

                setTripModal(prevStatus => !prevStatus);
                setTripInfo(initialTripInfo());
              }}>
              <Text style={{...buttonStyles.textBtn, color: 'gray'}}>
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const modalTripStyles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: screenWidth > 500 ? screenWidth / 1.5 : screenWidth,
    height: screenHeight / 2,
    backgroundColor: 'gray',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    paddingVertical: 10,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    marginVertical: 7.5,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 7.5,
    width: '25%',
    textAlign: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingVertical: 10,
    marginTop: 5,
  },
});

export default InputTripModal;
