import React from 'react';
import {useEffect, useState} from 'react';
import initialTripInfo from '../helpers/initialTripInfo';
import {TripInfoContext} from './TripInfoContext';

const TripInfoProvider = ({
  children,
  tripFromDB,
  addTripFirestore,
  setFormInvalid,
  setTripModal,
  setEditedTrip,
}) => {
  const [tripInfo, setTripInfo] = useState(initialTripInfo());

  useEffect(() => {
    if (tripFromDB) {
      setTripInfo(tripFromDB);
    }
  }, [tripFromDB]);

  return (
    <TripInfoContext.Provider
      value={{
        tripInfo,
        addTripFirestore,
        setTripInfo,
        setFormInvalid,
        setTripModal,
        setEditedTrip,
      }}>
      {children}
    </TripInfoContext.Provider>
  );
};

export default TripInfoProvider;
