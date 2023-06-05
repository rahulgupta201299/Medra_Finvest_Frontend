import firebase from 'firebase';
const config = {
	apiKey: "AIzaSyA9j6ah9UmeFqcbiRCQNTrSGbt1PcVIK2w",
	authDomain: "medra-finvest.firebaseapp.com",
	projectId: "medra-finvest",
	storageBucket: "medra-finvest.appspot.com",
	messagingSenderId: "696022415753",
	appId: "1:696022415753:web:4bee2c6d9d43cfcdf6c958",
	measurementId: "G-4SHETKKM04"
  };

firebase.initializeApp(config)
export const auth = firebase.auth()
export default firebase