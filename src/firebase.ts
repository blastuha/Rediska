// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
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
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Get a list of reciepts from your database
export async function getReciepts() {
  const recipetsCol = collection(db, 'reciepts')
  const recieptsSnapshot = await getDocs(recipetsCol)
  const recieptList = recieptsSnapshot.docs.map((doc) => doc.data())
  return recieptList
}
