import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCqJ4xMABPb4ci3sd4u5lk8Uf5IcjBncDw",
    authDomain: "housell-emcomposer.firebaseapp.com",
    databaseURL: "https://housell-emcomposer.firebaseio.com",
    projectId: "housell-emcomposer",
    storageBucket: "housell-emcomposer.appspot.com",
    messagingSenderId: "1096647741900"
  };

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
