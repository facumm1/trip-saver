import React, {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Modal, Text, View} from 'react-native';
import initialTripInfo from '../../helpers/initialTripInfo';
import TripForm from '../Inputs/TripForm';
import {InputModalButton} from '../Buttons/InputModalButton';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const InputTripModal = ({
  modalTitle,
  addTripFirestore = false,
  tripSelected = initialTripInfo(),
  setTripModal,
  setEditedTrip,
}) => {
  const [tripInfo, setTripInfo] = useState(tripSelected);

  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={modalTripStyles.container}>
        <View>
          {/* Title */}
          <Text style={modalTripStyles.title}>{modalTitle}</Text>

          {/* Inputs */}
          <TripForm
            addTripFirestore={addTripFirestore}
            tripInfo={tripInfo}
            setTripInfo={setTripInfo}
          />

          {/* Buttons */}
          <View style={modalTripStyles.btnContainer}>
            {/* Boton modificar/añadir */}
            <InputModalButton
              btnTitle={addTripFirestore ? 'Añadir' : 'Modificar'}
              tripInfo={tripInfo}
              setTripInfo={setTripInfo}
              setTripModal={setTripModal}
              setEditedTrip={setEditedTrip}
            />

            {/* Boton cancelar */}
            <InputModalButton
              btnTitle="Cancelar"
              tripInfo={tripInfo}
              setTripInfo={setTripInfo}
              setTripModal={setTripModal}
              setEditedTrip={setEditedTrip}
            />
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
  inputRow: {
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
