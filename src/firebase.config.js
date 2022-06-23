import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAN2z7jGC_uDHAHgewpPPL4yNhScwgb3-g',
  authDomain: 'restaurantapp-8a3e0.firebaseapp.com',
  databaseURL: 'https://restaurantapp-8a3e0-default-rtdb.firebaseio.com',
  projectId: 'restaurantapp-8a3e0',
  storageBucket: 'restaurantapp-8a3e0.appspot.com',
  messagingSenderId: '785986037461',
  appId: '1:785986037461:web:9fac24e3251c8855d1645c',
}

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage }
