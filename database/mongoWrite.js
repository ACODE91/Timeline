const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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
  const newModel = new PersonModel({ name: name, birth:birth, death:death, summary: summary});
  newModel.save(err => {
    if (err) return err;
  });
};

module.exports.model = PersonModel;
module.exports.write = writePerson;
