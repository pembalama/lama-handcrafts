import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCTyq0pyI5LwYRrp6D0LsKf8RvSPLXO6_A',
	authDomain: 'lamastore-db.firebaseapp.com',
	databaseURL: 'https://lamastore-db.firebaseio.com',
	projectId: 'lamastore-db',
	storageBucket: 'lamastore-db.appspot.com',
	messagingSenderId: '876086281095',
	appId: '1:876086281095:web:61077fa26328c7791e0922',
	measurementId: 'G-FLEDCJEMF2',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
