import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKNnROt84at7mRJYuZ_nYSgBAHTSH1w9s",
  authDomain: "cart-fd4fe.firebaseapp.com",
  projectId: "cart-fd4fe",
  storageBucket: "cart-fd4fe.appspot.com",
  messagingSenderId: "508458459266",
  appId: "1:508458459266:web:75eb97fc951c22c56e549b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

