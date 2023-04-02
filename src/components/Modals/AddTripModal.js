import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {Modal, Text, TextInput, View} from 'react-native';

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
        <View style={{borderWidth: 1}}>
          <Text
            style={{
              paddingTop: 10,
              fontSize: 25,
              textAlign: 'center',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Añadir un viaje nuevo
          </Text>
          <View>
            <TextInput placeholder="Nombre del pasajero" />

            <TextInput placeholder="Importe" />

            <View style={{flexDirection: 'row'}}>
              <TextInput placeholder="Desde" />
              <TextInput placeholder="Hacia" />
            </View>

            <TouchableOpacity
              onPress={() => setAddTripModal(prevStatus => !prevStatus)}>
              <Text>Agregar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setAddTripModal(prevStatus => !prevStatus)}>
              <Text>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
