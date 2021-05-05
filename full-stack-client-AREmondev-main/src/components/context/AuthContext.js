import React, { createContext, useState } from 'react'

import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from '../Firebase/Firebase.config'
import { useHistory } from 'react-router-dom'
firebase.initializeApp(firebaseConfig)

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const history = useHistory()
  const [login, setLogin] = useState()

  const [userName, setUserName] = useState()
  const [user, setUser] = useState()

  const provider = new firebase.auth.GoogleAuthProvider()

  const handleGoogleSignIN = (from, redirectAuth) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken
        // The signed-in user info.
        var user = result.user
        setUser(user)
        const userName = user.displayName
        setLogin(true)
        setUserName(userName)

        redirectAuth(from.pathname)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
        // ...
      })
  }
  const handleLogOut = () => {
    setLogin(false)
  }

  const handleCreatUser = (email, password, name) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user
        console.log(user)
        setUser(user)
        user.providerData.displayName = name

        setUserName(email)
        // ...
      })
      .catch((error) => {
        var errorCode = error.code
        var errorMessage = error.message
        alert(errorMessage)
      })
  }

  const handleLoginUser = (email, password, from, redirectAuth) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user
        setUser(user)
        var token = user.uid
        setLogin(true)
        setUserName(email)
        console.log('from', from.pathname)

        redirectAuth(from.pathname)
      })
      .catch((error) => {
        var errorCode = error.code
        var errorMessage = error.message
        alert(errorMessage)
      })
  }

  return (
    <AuthContext.Provider
      value={{
        handleGoogleSignIN,
        login,
        handleLogOut,
        userName,
        handleCreatUser,
        handleLoginUser,
        setUserName,
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider
