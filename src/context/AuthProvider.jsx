import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext'
import auth from '../services/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  };

  function logout() {
    return signOut(auth);
  };

  useEffect(() => {
    const unRegister = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
    return () => unRegister();
  }, [])

  const contextValue = {
    signUp,
    signIn,
    logout,
    user
  }

  return (
    <AuthContext.Provider value={ contextValue }>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider;
