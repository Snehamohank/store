/* eslint-disable prettier/prettier */
import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { songsList } from '../../images/Songs'
// import TrackPlayer,{Capability} from 'react-native-track-player';

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // useEffect(()=>{
    //    setupPlayer();
    // },[])
    // const setupPlayer = async()=>{
    //     try{
    //         await TrackPlayer.setupPlayer()
    //         await TrackPlayer.updateOptions({
    //             // Media controls capabilities
    //             capabilities: [
    //               Capability.Play,
    //               Capability.Pause,
    //               Capability.SkipToNext,
    //               Capability.SkipToPrevious,
    //               Capability.Stop,
    //             ],

    //             // Capabilities that will show up when the notification is in the compact form on Android
    //             compactCapabilities: [Capability.Play, Capability.Pause],

    //             // Icons for the notification on Android (if you don't like the default ones)
    //           });
    //         await TrackPlayer.add(songsList);
    //     }catch(e){

    //     }
    // }
    return (
        <LinearGradient style={{ flex: 1 }}
            colors={['#6C0505', '#4D0707', '#1C0707', '#1A0101']}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <Image source={require('../../images/left.png')} style={{ marginTop: '12%', marginLeft: '5%' }} />
            <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-around', width: '95%', marginTop: '5%' }}>
                <View style={{ height: 45, width: '78%', backgroundColor: '#7B2A2A', alignSelf: 'center', borderRadius: 10, flexDirection: 'row' }}>
                    <Image source={require('../../images/search.png')} style={{ margin: '3%' }} />
                    <TextInput
                        placeholder='Find in Playlist'
                    />
                </View>
                <View style={{ height: 45, width: '15%', backgroundColor: '#7B2A2A', alignSelf: 'center', borderRadius: 10, justifyContent: 'center' }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>sort</Text>
                </View>
            </View>
            <Image source={{ uri: songsList[currentIndex].artwork }} style={{ height: '35%', width: '70%', alignSelf: 'center', marginTop: '8%', borderRadius: 10, resizeMode: 'stretch' }} />
            <View style={{ flexDirection: 'row', marginTop: '5%', width: '90%', alignSelf: 'center' }}>
                <Image source={require('../../images/spotyfy.png')} style={{ height: 22, width: 22 }} />
                <Text style={{ fontSize: 17, color: 'white', marginLeft: 5, fontWeight: '500' }}> Spotify </Text>
            </View>
            <View style={{ width: '90%', alignSelf: 'center', marginTop: '2%', flexDirection: 'row' }}>
                <Text style={{ fontSize: 15, color: '#A59A9A', marginLeft: 5, fontWeight: '500' }}>20,605 saves</Text>
                <Text style={{ fontSize: 15, color: '#A59A9A', marginLeft: 5, fontWeight: '500' }}> 4h33m </Text>
            </View>
            <View style={{ width: '90%', flexDirection: 'row', alignSelf: 'center', marginTop: '3%', justifyContent: 'space-between', height: 60, }}>
                <View style={{ width: '30%', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={{ alignSelf: 'center', }}>
                        <Image source={require('../../images/like.png')} style={{ height: 22, width: 22, resizeMode: 'stretch' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignSelf: 'center', }}>
                        <Image source={require('../../images/save.png')} style={{ height: 22, width: 22, resizeMode: 'stretch' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignSelf: 'center', }}>
                        <Image source={require('../../images/more.png')} style={{ height: 22, width: 22, resizeMode: 'stretch' }} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity >
                    <Image source={require('../../images/play.png')} style={{ height: 45, width: 45, resizeMode: 'stretch' }} />
                </TouchableOpacity>
            </View>
            <FlatList data={songsList}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={{ height: 65, width: '100%', alignSelf: 'center', paddingLeft: 20, paddingRight: 20 }} >
                            <View style={{ flexDirection: 'row', width: '100%', height: '100%' }}>
                                <Image source={{ uri: item?.artwork }} style={{ height: '90%', width: '15%', resizeMode: 'stretch' }} />
                                <View style={{ marginLeft: 5, width: '75%' }}>
                                    <Text style={{ fontSize: 16, color: '#CFC6C6', marginLeft: 5, fontWeight: '500' }}>{item.title}</Text>
                                    <Text style={{ fontSize: 13, color: '#969595', marginLeft: 5, fontWeight: '500' }}>{item.artist}</Text>
                                </View>
                                <TouchableOpacity>
                                    <Image source={require('../../images/more.png')} style={{ height: 30, width: 30, resizeMode: 'stretch' }}/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </LinearGradient>
    );
};

export default HomePage;

const styles = StyleSheet.create({})