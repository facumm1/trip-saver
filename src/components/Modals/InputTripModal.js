import React, {useState} from 'react';
import {Modal, Text, View} from 'react-native';
import modalTripStyles from '../../styles/inputModalStyles';
import TripForm from '../Containers/TripForm';

const InputTripModal = ({title, addTripFirestore = false}) => {
  const [isFormInvalid, setFormInvalid] = useState(false);

  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={modalTripStyles.container}>
        <View>
          {/* Title */}
          <Text style={modalTripStyles.title}>{title}</Text>

          {/* Inputs */}
          <TripForm
            setFormInvalid={setFormInvalid}
            addTripFirestore={addTripFirestore}
          />

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
