import  { initializeApp } from 'firebase/app';

import {  initializeAuth,getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyDGSAA2GPaeIJT88dVM2bRRm2kvi9wWx94",
    authDomain: "finance-8cf44.firebaseapp.com",
    projectId: "finance-8cf44",
    storageBucket: "finance-8cf44.firebasestorage.app",
    messagingSenderId: "304528288925",
    appId: "1:304528288925:web:97d6255a3976385c86b874",
    measurementId: "G-PKDCCYH7L7"
};

const  app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

export { app as firebase, auth }
