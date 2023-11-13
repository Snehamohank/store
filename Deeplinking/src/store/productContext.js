/* eslint-disable prettier/prettier */
import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { apiReducer, initialState } from './productReducer';
import { Alert } from 'react-native';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  const fetchData = async () => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      dispatch({ type: 'SET_DATA', payload: response.data });
    } catch (error) {
      Alert.alert('No data fetching');
    }
  };

  const createEmployee = async (name, salary, age, email) => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const response = await axios.post(
        'https://dummy.restapiexample.com/api/v1/create',
        { name, salary, age, email }
      );
      dispatch({ type: 'CREATE_EMPLOYEE_SUCCESS', payload: response.data });
      console.log('Response:', response.data);
      if (name !== '' || salary !== '' || age !== '' || email !== '') {
        Alert.alert('Success', response.data.message);
      }
    } catch {
      Alert.alert('Invalid Data');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ApiContext.Provider value={{ ...state, fetchData, createEmployee }}>
      {children}
    </ApiContext.Provider>
  );
};

