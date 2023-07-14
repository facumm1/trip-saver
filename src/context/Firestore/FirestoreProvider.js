import React from 'react';
import {useEffect, useState} from 'react';
import {readFirestore} from '../../firebase/firestoreActions';
import FirestoreContext from './FirestoreContext';
import initialTripInfo from '../../helpers/initialTripInfo';

const FirestoreProvider = ({children, setTripModal, uid}) => {
  //TODO unificar states, armar custom hooks o meterlos en un reducer
  const [trips, setTrips] = useState();
  const [editedTrip, setEditedTrip] = useState({id: '', updated: false});
  const [isDataLoading, setDataLoading] = useState(true);
  const [selectedTrip, setSelectedTrip] = useState(initialTripInfo());

  const readTripsData = () => {
    console.log('readTripsData called');
    setEditedTrip(prev => ({...prev, updated: false, id: ''}));

    console.log('uid', uid);

    readFirestore(uid)
      .then(res => {
        res.forEach(trip =>
          setTrips(prev => ({...prev, [trip.data().id]: trip.data()})),
        );
        setDataLoading(false);
      })
      .catch(console.error);
  };

  useEffect(() => console.log('from provider', trips), [trips]);

  useEffect(() => {
    if (isDataLoading || editedTrip.updated) {
      readTripsData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editedTrip.updated]);

  useEffect(() => {
    if (!isDataLoading && editedTrip.id.length > 0) {
      setSelectedTrip(trips[editedTrip.id]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editedTrip.id]);

  // TODO limpiar datos del trip anterior al modificar un nuevo trip
  /* useEffect(() => {
    console.log('watcher', selectedTrip, editedTrip);
  }, [selectedTrip, editedTrip]); */

  return (
    <FirestoreContext.Provider
      value={{
        trips,
        uid,
        isDataLoading,
        editedTrip,
        selectedTrip,
        setTrips,
        setEditedTrip,
        setSelectedTrip,
        setTripModal,
      }}>
      {children}
    </FirestoreContext.Provider>
  );
};

export default FirestoreProvider;
