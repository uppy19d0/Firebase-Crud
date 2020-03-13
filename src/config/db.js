import Firebase from 'firebase'
let config = {
    apiKey: "AIzaSyB0ZTEukIsLdmc2oba1H9DfEixSfLEecnw",
    authDomain: "webprojects-55c97.firebaseapp.com",
    databaseURL: "https://webprojects-55c97.firebaseio.com",
    projectId: "webprojects-55c97",
    storageBucket: "webprojects-55c97.appspot.com",
    messagingSenderId: "383046242155",
    appId: "1:383046242155:web:bb290d1037f19a0073062e"
};
let app = Firebase.initializeApp(config)
export const db = app.database()