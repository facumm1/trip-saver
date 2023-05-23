import React, {useState} from 'react';

const useTripActions = () => {
  const [modalDatePicker, setModalDate] = useState(false);

  return {
    modalDatePicker,
    setModalDate,
  };
};

export default useTripActions;
