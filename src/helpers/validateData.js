import {add} from './InputModalFunc';

export const validateTripProps = (
  tripInfo,
  setFormInvalid,
  setTripModal,
  setTripInfo,
) => {
  const {pasajero, importe, desde, hacia} = tripInfo;

  const isPasajeroValid = pasajero.length >= 3;
  const isImporteValid = importe.length >= 3;
  const isDesdeValid = desde.length >= 3;
  const isHaciaValid = hacia.length >= 3;

  if (isPasajeroValid && isImporteValid && isDesdeValid && isHaciaValid) {
    setFormInvalid(false);
    add(setTripModal, tripInfo, setTripInfo);
  } else {
    setFormInvalid(true);
  }
};
