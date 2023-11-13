/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home';
import Product from '../Product';
import ProductApi from '../ProductApi';
import PostApi from '../PostApi';
import Datadisplay from '../Datadisplay';
import Cartscreen from '../cart/Cartscreen';
import Productscreen from '../cart/Productscreen';
import HomeScreen from '../cart/Productscreen';
// import SwipeAnimation from '../SwipeAnimation';
import HomePage from '../../store/spotyfy/HomePage';
import Notification from '../Pushnotification/Notification';


const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {/* <Stack.Screen name ='home' component={Home}/> */}
      {/* <Stack.Screen name ='home' component={HomePage}/> */}
      <Stack.Screen name ='home' component={Notification}/>
      {/* <Stack.Screen name ='datadisplay' component={Datadisplay}/> */}
      {/* <Stack.Screen name ='productsec' component={ProductApi}/> */}
      {/* <Stack.Screen name ='product' component={Productscreen}/> */}
      {/* <Stack.Screen name ='product' component={HomeScreen}/> */}
      {/* <Stack.Screen name ='swipe' component={SwipeAnimation}/> */}
    </Stack.Navigator>
  );
};

export default Navigation;
