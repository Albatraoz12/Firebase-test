import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBdaVEjgw6IHHj-i3Gd7yYpYdVCgo2E0KE',
  authDomain: 'dimos-seoul.firebaseapp.com',
  projectId: 'dimos-seoul',
  storageBucket: 'dimos-seoul.appspot.com',
  messagingSenderId: '218068043952',
  appId: '1:218068043952:web:7145495a2158902b3fd375',
  measurementId: 'G-M27MWH41NN',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
