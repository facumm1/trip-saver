import React, {useState} from 'react';
import {Modal, Text, View} from 'react-native';
import initialTripInfo from '../../helpers/initialTripInfo';
import TripForm from '../Inputs/TripForm';
import {InputModalButton} from '../Buttons/InputModalButton';
import modalTripStyles from '../../styles/inputModalStyles';
import {TripInfoContext} from '../../store/TripInfoContext';

const TripInfoProvider = ({children}) => {
  const [tripInfo, setTripInfo] = useState(initialTripInfo());

  return (
    <TripInfoContext.Provider value={{tripInfo, setTripInfo}}>
      {children}
    </TripInfoContext.Provider>
  );
};

const InputTripModal = ({
  modalTitle,
  addTripFirestore = false,
  //tripSelected = initialTripInfo(),
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

          <TripInfoProvider>
            {/* Inputs */}
            <TripForm addTripFirestore={addTripFirestore} />

            {/* Buttons */}
            <View style={modalTripStyles.btnContainer}>
              {/* Boton modificar/añadir */}
              <InputModalButton
                btnTitle={addTripFirestore ? 'Añadir' : 'Modificar'}
                setTripModal={setTripModal}
                setEditedTrip={setEditedTrip}
                setFormInvalid={setFormInvalid}
              />

              {/* Boton cancelar */}
              <InputModalButton
                btnTitle="Cancelar"
                setTripModal={setTripModal}
                setEditedTrip={setEditedTrip}
                setFormInvalid={setFormInvalid}
              />
            </View>
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
