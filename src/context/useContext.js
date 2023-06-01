import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  updateProfile,
} from '@firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../components/Auth/firebase';

export const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [token, setToken] = useState(null);
  useEffect(() => {
    setLoading(true);
    const listen = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }

      setLoading(false);

      return listen;
    });
  }, []);

  const createUser = (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => updateProfile(auth.currentUser), { email: email })
      .then(res => console.log(res))
      .catch(error => setError(error.code))
      .finally(() => setLoading(false));
  };

  const loginUser = (email, password) => {
    setLoading(true);
    // Login user and get the authentication token
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // User has successfully signed in
        const user = userCredential.user;

        // Get the authentication token
        user
          .getIdToken()
          .then(tokenResult => {
            // Authentication token of the user
            const getToken = tokenResult.token;
            console.log('Token:', getToken);
            setToken(getToken);
          })
          .catch(error => {
            setError(error);
          });
      })
      .catch(error => {
        console.error('Error while signing in:', error);
      })
      .finally(() => setLoading(false));
  };

  const logoutUser = () => {
    signOut(auth);
  };

  const changePassword = newPassword => {
    setLoading(true);
    updatePassword(user, newPassword)
      .then(() => {
        alert('Password was successfully changed');
      })
      .catch(error => {
        setError(error.code);
      })
      .finally(() => setLoading(false));
  };

  const value = {
    user,
    token,
    loading,
    error,
    createUser,
    loginUser,
    logoutUser,
    changePassword,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
