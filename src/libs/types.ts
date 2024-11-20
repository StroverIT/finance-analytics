import { FirebaseApp } from "firebase/app";

export type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
};

export type InitializeFireBaseApp = () => FirebaseApp;

export type GetFireBaseApp = () => FirebaseApp;
