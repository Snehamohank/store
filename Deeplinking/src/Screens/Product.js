/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { CounterContext } from '../store/counterContext';


const Product = () => {
    const { data } = useContext(CounterContext);

    return (
        <ScrollView>
            {
                data.map((item) => (
                    <>
                        <Text style={{ color: 'black', fontWeight: '500' }}>{item?.title}</Text>
                        <Text style={{ color: 'black' }}>{item?.description}</Text>
                    </>
                ))
            }
            <View style={{ height: 55, width: 100, backgroundColor: 'blue', borderBottomEndRadius: 20 }}>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: '500', fontFamily: 'italic' }}>hihi</Text>
                <Text style={{ color: 'grey' }}>sxdfsxdfsxdfsxdf</Text>
            </View>
            <View>
                <View>
                    <Text>hi</Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default Product;

const styles = StyleSheet.create({});
