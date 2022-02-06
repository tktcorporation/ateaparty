import React, { createContext, useState, useEffect, ReactNode } from "react";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/performance";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const FirebaseContext = createContext({});

interface Props {
  children: ReactNode;
}

export const FirebaseProvider = ({ children }: Props): JSX.Element => {
  const [state, setState] = useState({});

  if (process.env.NODE_ENV == "production") {
    useEffect(() => {
      setState({
        perf: firebase.performance(),
        analytics: firebase.analytics(),
      });
    }, []);
  }

  return (
    <FirebaseContext.Provider value={state}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
