import { initializeApp, getApps } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: "freelance-sigap.firebaseapp.com",
  projectId: "freelance-sigap",
  storageBucket: "freelance-sigap.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID
};

if (!getApps().length) {
  initializeApp(firebaseConfig)
}

export const FirebaseAuth = getAuth()

export const Authentication = () => {
  return FirebaseAuth
}

export const SignUp = async (email, password) => {
  await createUserWithEmailAndPassword(FirebaseAuth, email, password)
}

export const SignIn = async (email, password) => {
  await signInWithEmailAndPassword(FirebaseAuth, email, password)
}

export const SignOut = async () => {
  await signOut(FirebaseAuth)
}

export const GetSignInErrorMessage = (code) => {
  switch (code) {
    case 'auth/user-not-found':
      return 'Email tidak terdaftar'
    case 'auth/wrong-password':
    default:
      return 'Email atau password salah'
  }
}