var mongoose = require('mongoose');
// var mongoDB = 'mongodb://0be5767c-0ee0-4-231-b9ee:GknfUPVUnTgG8A11EVNfuUngm4ICLZuVaevzPheG0iOiFyOBcQg2reFg2zabGjD7Ze64FWnLZsODrXl2jIqoLA==@0be5767c-0ee0-4-231-b9ee.documents.azure.com:10255/?ssl=true&replicaSet=globaldb';
var mongoDB = 'mongodb://localhost/react_chat';

export default (callback) => {
	mongoose.connect(mongoDB, { useNewUrlParser: true });
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'MongoDB connection error:'));
	// connect to a database if needed, then pass it to `callback`:
	callback(db);
	// return db
}
