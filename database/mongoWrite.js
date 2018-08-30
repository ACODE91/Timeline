const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/myApp').then(() => {
  console.log('success!');
});
const personSchema = new Schema({
  name: String,
  birth: Number,
  death: Number,
  summary: String,
});

const PersonModel = mongoose.model('String', stringSchema);

const writeString = function(name, birth, death, summary) {
  const newModel = new PersonModel({ name: name, birth:birth, death:death, summary: summary});
  newModel.save(err => {
    if (err) return err;
  });
};

module.exports.model = PersonModel;
module.exports.write = writeString;
