/* eslint-disable prettier/prettier */
import { StyleSheet, View, TextInput, Button } from 'react-native';
import React, { useContext, useState } from 'react';
import { ApiContext } from '../store/productContext';

const PostApi = ({ navigation }) => {
  const { createEmployee } = useContext(ApiContext);
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');


  const handleCreateEmployee = () => {
    createEmployee(name, salary, age, email);
  };


  return (
    <View>
      <TextInput
        placeholder="Name"
        placeholderTextColor="black"
        style={{ color: "black" }}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Salary"
        placeholderTextColor="black"
        style={{ color: "black" }}
        value={salary}
        onChangeText={(text) => setSalary(text)}
      />
      <TextInput
        placeholder="Age"
        placeholderTextColor="black"
        style={{ color: "black" }}
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="black"
        style={{ color: "black"}}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button title="Create Employee" onPress={handleCreateEmployee} />
    </View>
  );
};

export default PostApi;

const styles = StyleSheet.create({});

