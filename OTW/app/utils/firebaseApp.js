// import firebase from 'firebase';
// import firebaseApp from './firebaseConfig';
// import store from '../store';
// import updateHelpees from '../actions/updateHelpees';

// const getRef = () => {
//   return firebaseApp.database().ref().child('helpie');
// };

// const helpees = getRef();

// const listenForItems = (cb) => {
//   helpees.on('value', update => {
//     const helpeesArr = [];
//     update.forEach((item) => {
//       helpeesArr.push(item.val());
//     });
//     return cb(helpeesArr);
//   });
// };

// const updateStoreWithHelpees = (helpees) => {
//   store.dispatch(updateHelpees(helpees));
// };

// const addHelpie = (latitude, longitude) => {
//   helpees.push({
//     latitude: store.getState().locationState.get('lat'),
//     longitude: store.getState().locationState.get('long'),
//     createdAt: Date.now(),
//     title: store.getState().userState.get('name')
//   });
// };

// listenForItems(updateStoreWithHelpees);

// export default addHelpie;
