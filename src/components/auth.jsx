import { useState } from 'react';
import { auth, googleProvider } from '../config/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const Auth = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // console.log(auth?.currentUser?.email);

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section>
      <div>
        <input
          placeholder='email'
          type='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder='password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signIn}>Sign in</button>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
        <button onClick={logout}>Log Out</button>
      </div>
      {auth?.currentUser && (
        <div>
          <img src={auth?.currentUser?.photoURL} alt='users google image' />
        </div>
      )}
    </section>
  );
};

export default Auth;
