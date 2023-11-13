/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { StatusBar,View } from 'react-native';
import OneSignal from 'react-native-onesignal';

const Notification = () => {
  useEffect(() => {
    OneSignal.setAppId('a6244a66-4115-4617-aad2-b460cc22cf7b');

    // Add event listener for when a notification is received
    OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
      let notification = notificationReceivedEvent.getNotification();
      console.log('Notification will show in foreground:', notification);
      notificationReceivedEvent.complete(notification);
    });

    // Add event listener for when a notification is opened
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log('Notification opened:', notification);
    });

    return () => {
      // Remove event listeners when component unmounts
      OneSignal.clearHandlers();
    };
  }, []);


  // Your app's code here...

  return (
    <View style={{flex:1}}>
      {/* <StatusBar translucent backgroundColor={'transparent'}/> */}
    </View>
  );
};

export default Notification;
