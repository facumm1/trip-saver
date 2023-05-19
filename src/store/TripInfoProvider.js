import React from 'react';
import {useEffect, useState} from 'react';
import initialTripInfo from '../helpers/initialTripInfo';
import {TripInfoContext} from './TripInfoContext';

const TripInfoProvider = ({children, tripFromDB}) => {
  const [tripInfo, setTripInfo] = useState(initialTripInfo());

  useEffect(() => {
    if (tripFromDB) {
      setTripInfo(tripFromDB);
    }
  }, [tripFromDB]);

  return (
    <TripInfoContext.Provider value={{tripInfo, setTripInfo}}>
      {children}
    </TripInfoContext.Provider>
  );
};

export default TripInfoProvider;
