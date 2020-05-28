//Pythonla çektiğimiz json dosyalarını firebase 'e yazan komut dosyamız

const firebase = require('firebase');
// Required for side-effects
require('firebase/firestore');

const games = ['onnumara', 'sayisal', 'superloto', 'sanstopu', 'sanstopu2'];
firebase.initializeApp({
  apiKey: 'AIzaSyA7qi41zrYyF9dHWPMfKmLy18gihEkBW6U',
  authDomain: 'sanso-708c3.firebaseapp.com',
  databaseURL: 'https://sanso-708c3.firebaseio.com',
  projectId: 'sanso-708c3',
  storageBucket: 'sanso-708c3.appspot.com',
  messagingSenderId: '145459193731',
  appId: '1:145459193731:web:6e6655de12d58fe4aaf8b6',
  measurementId: 'G-1RTDBH3P4F',
});

const fs = require('fs');
for (let game in games) {
  let jsonData = fs.readFileSync(`assets/istatistik/${games[game]}.json`);
  let json = JSON.parse(jsonData);

  var db = firebase.firestore();

  Object.keys(json).forEach(function(key) {
    db.collection(games[game])
      .add({
        no: json[key].no,
        siklik: json[key].siklik,
        gorulme: json[key].gorulme,
      })
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
  });
}
