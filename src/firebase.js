import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUzbQgitoJxFbBhs4jw6mfvBZYxN3AA2c",
  authDomain: "rummy-score-tracker-fa3e4.firebaseapp.com",
  projectId: "rummy-score-tracker-fa3e4",
  storageBucket: "rummy-score-tracker-fa3e4.firebasestorage.app",
  messagingSenderId: "234080477725",
  appId: "1:234080477725:web:6f7600f3e7a10629795cf4",
  measurementId: "G-TBXYPSDWMS"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore
export const db = getFirestore(app)
