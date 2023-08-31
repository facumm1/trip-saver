import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import TripsCounter from './Counters/TripsCounter';
import appColors from '../styles/appColors';
import NewTripButton from './Buttons/NewTripButton';
import {useNavigate} from '../hooks';

type Props = {
  username: string;
};

const TopContainer: React.FC<Props> = ({username}) => {
  const handleNav = useNavigate('AddTripScreen');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trip Saver</Text>

      <View style={styles.userContainer}>
        <Text style={styles.username}>Hola, Jose Luis!</Text>

        <Text style={styles.counterTitle}>Viajes realizados</Text>

        <TripsCounter />

        <NewTripButton handleNav={handleNav} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: appColors.darkBlue,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 5,
  },
  counterTitle: {fontSize: 16, color: '#fff'},
  userContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    color: '#fff',
    marginVertical: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },
});

export default TopContainer;
