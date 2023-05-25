import React from 'react';
import {useEffect, useState} from 'react';
import {readFirestore} from '../../firebase/firestoreActions';
import FirestoreContext from './FirestoreContext';

const FirestoreProvider = ({children}) => {
  const [trips, setTrips] = useState();
  const [isDataLoading, setDataLoading] = useState(true);

  const readTripsData = () => {
    console.log('readTripsData called');

    readFirestore()
      .then(res => {
        res.forEach(trip =>
          setTrips(prev => ({...prev, [trip.data().id]: trip.data()})),
        );
        setDataLoading(false);
      })
      .catch(console.error);
  };

  useEffect(() => {
    readTripsData();
  }, []);

  return (
    <FirestoreContext.Provider value={{trips, isDataLoading}}>
      {children}
    </FirestoreContext.Provider>
  );
};

export default FirestoreProvider;
