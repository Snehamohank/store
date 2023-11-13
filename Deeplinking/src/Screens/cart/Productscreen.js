/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const Productscreen = () => {
  const [star, setStar] = useState(1);
  const [text, setText] = useState([1, 2, 3, 4, 5]);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ height: 45, width: '90%', alignSelf: 'center', flexDirection: 'row' }}>
        {
          text.map((item) => {
            return (
              <TouchableOpacity key={item} onPress={()=> setStar(item)}>
                {
                   star >= item ?
                    <Text style={{ color: 'red', fontSize: 40, fontWeight: '500' }}>*</Text> :
                    <Text style={{ color: 'white', fontSize: 40, fontWeight: '500' }}>*</Text>
                }
              </TouchableOpacity>
            );
          })
        }
      </View>
    </View>
  );
};

export default Productscreen;

const styles = StyleSheet.create({});
