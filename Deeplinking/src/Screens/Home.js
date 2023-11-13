/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native'
import React, { useContext } from 'react'
import { CounterContext } from '../store/counterContext'

export const Colors = {
  blue: '#3561C6',
}

const Home = () => {
  const { state, dispatch } = useContext(CounterContext);
  

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    if (state.count > 1) {
      dispatch({ type: 'DECREMENT' });
    }
  };
  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };
  return (
    <View style={{ alignItems: 'center', flex: 1, backgroundColor: 'black' }}>
      <Text style={{ color: Colors.blue, fontSize: 30, marginTop: '15%' }}>Counter App</Text>
      <Text style={{ color: Colors.blue, fontSize: 150, fontWeight: '100', marginTop: '10%' }}>{state.count}</Text>
      <View style={{ height: 55, width: '70%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: '5%' }}>
        <TouchableOpacity style={{ height: 60, width: 60, borderRadius: 40, borderWidth: 2, borderColor: Colors.blue, }} onPress={handleDecrement}>
          <Text style={{ color: Colors.blue, fontSize: 37, alignSelf: 'center' }}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 60, width: 60, borderRadius: 40, borderWidth: 2, borderColor: Colors.blue, }} onPress={handleIncrement}>
          <Text style={{ color: Colors.blue, fontSize: 37, alignSelf: 'center' }}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ height: 55, width: '60%', backgroundColor: Colors.blue, marginTop: '15%', borderRadius: 10, justifyContent: 'center' }} onPress={handleReset}>
        <Text style={{ textAlign: 'center', color: 'black', fontSize: 20, fontWeight: '500' }}>RESET</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
