import React, {useState} from 'react';
import {Modal, Text, View} from 'react-native';
import TripForm from '../Inputs/TripForm';
import modalTripStyles from '../../styles/inputModalStyles';
import TripInfoProvider from '../../store/TripInfoProvider';

const InputTripModal = ({
  modalTitle,
  addTripFirestore = false,
  tripFromDB = false,
  setTripModal,
  setEditedTrip, //Prop only for updating trip
}) => {
  const [isFormInvalid, setFormInvalid] = useState(false);

  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={modalTripStyles.container}>
        <View>
          {/* Title */}
          <Text style={modalTripStyles.title}>{modalTitle}</Text>

          <TripInfoProvider
            tripFromDB={tripFromDB}
            setFormInvalid={setFormInvalid}
            setTripModal={setTripModal}
            setEditedTrip={setEditedTrip}
            addTripFirestore={addTripFirestore}>
            {/* Inputs */}
            <TripForm />
          </TripInfoProvider>

          {isFormInvalid && (
            <Text style={modalTripStyles.warningLength}>
              Todos los campos son requeridos y deben tener 3 carácteres o más.
            </Text>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default InputTripModal;
