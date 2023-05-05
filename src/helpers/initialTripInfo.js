import uuid from 'react-native-uuid';

const initialTripInfo = () => ({
  id: uuid.v4(),
  pasajero: '',
  importe: '',
  desde: '',
  hacia: '',
  fecha: '',
});

export default initialTripInfo;
