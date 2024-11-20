import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { FirebaseConfig, GetFireBaseApp, InitializeFireBaseApp } from "./types";

require("dotenv").config();

const {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
} = process.env;

const firebaseConfig: FirebaseConfig = {
  apiKey: FIREBASE_API_KEY as string,
  authDomain: FIREBASE_AUTH_DOMAIN as string,
  projectId: FIREBASE_PROJECT_ID as string,
  storageBucket: FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID as string,
  appId: FIREBASE_APP_ID as string,
  measurementId: FIREBASE_MEASUREMENT_ID as string,
};

let app: any;

export const initializeFireBaseApp: InitializeFireBaseApp = () => {
  try {
    app = initializeApp(firebaseConfig);
    return app;
  } catch (e) {
    console.log("test+++ error firebase: ", e);
  }
};

export const getFireBaseApp: GetFireBaseApp = () => app;
export const getFirebaseAuth: any = () => getAuth(app);
