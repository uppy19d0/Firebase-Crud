import Firebase from 'firebase'
let config = {
    apiKey: "AIzaSyAeqMem5dquIVXJBgZgdoUQDD-b-94m0TM",
    authDomain: "sinuous-myth-244502.firebaseapp.com",
    databaseURL: "https://sinuous-myth-244502.firebaseio.com",
    projectId: "sinuous-myth-244502",
    storageBucket: "sinuous-myth-244502.appspot.com",
    messagingSenderId: "411726069095",
    appId: "1:411726069095:web:8f96dbbdb7ba01e26f03c2",
    measurementId: "G-B1GZS3L60B"
};
let app = Firebase.initializeApp(config)
export const db = app.database()