import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {Modal, Text, TextInput, View} from 'react-native';
import buttonStyles from '../../styles/buttonStyle';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export const AddTripModal = ({addTripModal, setAddTripModal}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={addTripModal}
      onRequestClose={() => setAddTripModal(prevStatus => !prevStatus)}>
      <View
        style={{
          alignSelf: 'center',
          width: screenWidth > 500 ? screenWidth / 1.5 : screenWidth,
          height: screenHeight / 2,
          backgroundColor: 'gray',
          position: 'absolute',
          bottom: 0,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}>
        <View style={{}}>
          {/* Title */}
          <Text
            style={{
              paddingVertical: 10,
              fontSize: 25,
              textAlign: 'center',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Añadir un viaje nuevo
          </Text>

          {/* Inputs */}
          <View style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'row', marginVertical: 5}}>
              <TextInput
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 7.5,
                  width: '50%',
                  textAlign: 'center',
                  marginHorizontal: 10,
                }}
                placeholder="Nombre del pasajero"
              />
              <TextInput
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 7.5,
                  width: '25%',
                  textAlign: 'center',
                }}
                placeholder="Importe"
              />
            </View>

            <View style={{flexDirection: 'row', marginVertical: 5}}>
              <TextInput
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 7.5,
                  width: '25%',
                  textAlign: 'center',
                  marginHorizontal: 10,
                }}
                placeholder="Desde"
              />
              <TextInput
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 7.5,
                  width: '25%',
                  textAlign: 'center',
                }}
                placeholder="Hacia"
              />
            </View>
          </View>

          {/* Buttons */}
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              paddingVertical: 10,
            }}>
            <TouchableOpacity
              style={{...buttonStyles.btn, backgroundColor: '#fff'}}
              onPress={() => setAddTripModal(prevStatus => !prevStatus)}>
              <Text
                style={{
                  ...buttonStyles.textBtn,
                  color: 'gray',
                  marginHorizontal: 5,
                }}>
                Agregar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                ...buttonStyles.btn,
                backgroundColor: '#fff',
                marginHorizontal: 5,
              }}
              onPress={() => setAddTripModal(prevStatus => !prevStatus)}>
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
