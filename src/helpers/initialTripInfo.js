import uuid from 'react-native-uuid';

const initialTripInfo = () => ({
  id: uuid.v4(),
  pasajero: '',
  importe: '',
  desde: '',
  hacia: '',
  fecha: new Date(),
  dateSelected: false,
});

export default initialTripInfo;
