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

//storing user in database
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	console.log(snapShot);

	//if there is no snapShot, create a new user using the userAuth object
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
