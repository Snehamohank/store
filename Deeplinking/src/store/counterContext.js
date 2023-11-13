/* eslint-disable prettier/prettier */
import React,{createContext, useReducer,useState,useEffect} from 'react';
import { counterReducer, initialSate } from './counterReduce';

export const CounterContext = createContext();

export const CounterProvider = ({children}) =>{
    const [state,dispatch] = useReducer(counterReducer,initialSate);
    const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


    return (
        <CounterContext.Provider value={{state,dispatch,data,fetchData}}>
            {children}
        </CounterContext.Provider>
    );
};

