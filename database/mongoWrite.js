const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const data = require('./data.js');

mongoose.connect('mongodb://localhost:27017/altSchool').then(() => {
  console.log('success!');
});
const personSchema = new Schema({
  name: String,
  birth: Number,
  death: Number,
  summary: String,
});

const PersonModel = mongoose.model('Person', personSchema);

const writePerson = function(name, birth, death, summary) {
  const newModel = new PersonModel({
    name,
    birth,
    death,
    summary,
  });
  newModel.save(err => {
    if (err) return err;
  });
};

const writeData = function(array) {
  for (let i = 0; i < array.length; i++) {
    writePerson(
      array[i].name,
      array[i].birth,
      array[i].death,
      array[i].summary,
    );
  }
};

//uncomment line 41 to write data onto your mongo database.
//writeData(data);

module.exports.model = PersonModel;
module.exports.write = writePerson;
