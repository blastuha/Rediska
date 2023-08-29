// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDgOb9IQZo7IT83kHX7qTJUr07OB6RtKPQ',
  authDomain: 'rediska-ba630.firebaseapp.com',
  projectId: 'rediska-ba630',
  storageBucket: 'rediska-ba630.appspot.com',
  messagingSenderId: '686050445238',
  appId: '1:686050445238:web:afac17696d4f0723fce317',
  measurementId: 'G-J7JL53T0XY',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

getAuth().onAuthStateChanged((user) => {
  console.log('state changed', user)
})
