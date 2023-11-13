/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, FlatList,} from 'react-native';

const CartScreen = ({ route }) => {
  const { cartItems } = route.params;

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', justifyContent:'space-between', padding: 10 }}>
      <Text style={{ color: 'black' }}>{item.title}</Text>
    </View>
  );

  return (
    <View>
      <Text>Cart Screen</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
    />
    </View>
  );
};

export default CartScreen;
