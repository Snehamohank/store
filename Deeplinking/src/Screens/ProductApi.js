/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { ApiContext } from '../store/productContext';


const ProductApi = () => {
  const { data} = useContext(ApiContext);
  return (
    <View>
      {
        data.map(item =>(
          <Text style={{ color: 'black' }}>{item.title}</Text>
        ))
      }

    </View>
  );
};

export default ProductApi;

