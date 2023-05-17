export const mapSecondsToString = dateTrip => {
  const mappedTripDate = new Date(dateTrip.seconds * 1000);

  return mappedTripDate.toLocaleDateString('en-GB').slice(0, 5);
};

export const mapSecondsToDate = secondsValue => {
  const fecha = new Date();
  fecha.setTime(secondsValue.seconds * 1000);

  return fecha;
};

export const mapDateToSeconds = dateValue => {
  const secMilDate = {
    seconds: Math.floor(dateValue.getTime() / 1000),
    nanoseconds: 0,
  };

  return secMilDate;
};
