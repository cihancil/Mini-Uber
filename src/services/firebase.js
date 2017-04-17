import firebase from "firebase/app";
require("firebase/database");

const config = {
  apiKey: "AIzaSyCBm5UKcDqHi_AzVgVVqa9B8OT-6nZQJNA",
  databaseURL: "https://react-native-hiring.firebaseio.com",
};

const app = firebase.initializeApp(config);
const database = app.database();


export default {
  Database: database,
};

