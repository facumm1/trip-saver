import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {AddTripModal} from '../components/Modals/AddTripModal';
import {AddTripButton} from '../components/Buttons/AddTripButton';

const MainScreen = ({userName}) => {
  const [addTripModal, setAddTripModal] = useState(false);

  return (
    <View>
      <View style={{borderWidth: 1}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 35,
            textAlign: 'center',
            color: '#000',
          }}>
          Trip Saver
        </Text>
      </View>

      <View style={{borderWidth: 1, paddingLeft: 20}}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>
          Hola {userName}!
        </Text>
      </View>

      <AddTripModal
        addTripModal={addTripModal}
        setAddTripModal={setAddTripModal}
      />

      <AddTripButton setAddTripModal={setAddTripModal} />
    </View>
  );
};

export default MainScreen;
