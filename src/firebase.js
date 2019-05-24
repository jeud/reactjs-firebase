import firebase from '@firebase/app'
import '@firebase/firestore'

const firebaseApp = firebase.default

const config = {
    apiKey: 'AIzaSyCwpPzNyJ2SEXL6drYMEqVZNTGAPwIU7as',
    authDomain: 'tutor4dev-firestore.firebaseapp.com',
    databaseURL: 'https://tutor4dev-firestore.firebaseio.com',
    projectId: 'tutor4dev-firestore',
    storageBucket: 'tutor4dev-firestore.appspot.com',
    messagingSenderId: '370882667514',
    appId: '1:370882667514:web:b9b61a2e5198fbc9'
}

export default firebaseApp.apps[0] || firebaseApp.initializeApp(config)