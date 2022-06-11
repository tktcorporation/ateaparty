import React, { createContext, useState, useEffect, ReactNode } from "react";
import { getApps, initializeApp } from "firebase/app";
import { getPerformance } from "firebase/performance";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// initialize firebase
if (getApps().length === 0) {
  initializeApp(firebaseConfig);
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
        perf: getPerformance(),
        analytics: getAnalytics(),
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
