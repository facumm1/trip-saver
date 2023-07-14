import React, {useContext} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {InputModalButton} from '../Buttons/InputModalButton';
import modalTripStyles from '../../styles/inputModalStyles';
import ModalDatePicker from '../Picker/ModalDatePicker';
import useTripActions from '../../hooks/useTripsActions';
import FirestoreContext from '../../context/Firestore/FirestoreContext';
import InputContainer from '../Inputs/InputContainer';

const TripForm = ({setFormInvalid, addTripFirestore}) => {
  const {selectedTrip} = useContext(FirestoreContext);
  const {modalDatePicker, setModalDate} = useTripActions();

  /* React.useEffect(() => {
    if (selectedTrip) {
      console.log('effect', selectedTrip);
    }
  }, [selectedTrip]); */

  return (
    <>
      {/* Pick date modal */}
      <ModalDatePicker
        modalDatePicker={modalDatePicker}
        setModalDate={setModalDate}
      />

      {/* Form completar datos */}
      {!selectedTrip ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <InputContainer setModalDate={setModalDate} />
      )}

      {/* Buttons */}
      <View style={modalTripStyles.btnContainer}>
        {/* Boton modificar/añadir */}
        <InputModalButton
          btnTitle={addTripFirestore ? 'Añadir' : 'Modificar'}
          setFormInvalid={setFormInvalid}
        />

        {/* Boton cancelar */}
        <InputModalButton btnTitle="Cancelar" setFormInvalid={setFormInvalid} />
        {/* TODO Evitar props innecesarias aca */}
      </View>
    </>
  );
};

export default TripForm;
