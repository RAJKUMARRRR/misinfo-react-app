import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import {DEVICE_REGISTER} from './api';
import messaging from '@react-native-firebase/messaging';

export default class PushController extends Component {
  registerDevice = token => {
    let data = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: token,
      }),
    };
    fetch(DEVICE_REGISTER, data)
      .then(response => {
        console.log(JSON.stringify(response.status));
        AsyncStorage.setItem('isRegisteredForPush', token);
      })
      .catch(error => {
        console.log('Server Down!! Please contact admin.', error);
      });
  };

  componentDidMount() {
    const {registerDevice} = this;
    messaging()
      .getToken()
      .then(token => {
        console.log('token:', token);
        AsyncStorage.getItem('isRegisteredForPush').then(val => {
          if (token !== val) {
            registerDevice(token);
          }
        });
      });
    messaging().onTokenRefresh(token => {
      console.log('refreshToken:', token);
      AsyncStorage.getItem('isRegisteredForPush').then(val => {
        if (!val) {
          registerDevice(token);
        }
      });
    });
    messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
  }

  render() {
    return null;
  }
}
