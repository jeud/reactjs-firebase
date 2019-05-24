import firebase from '@firebase/app'
import '@firebase/firestore'

const firebaseApp = firebase.default

const config = {

}

export default firebaseApp.initializeApp(config)