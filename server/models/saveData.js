const { Schema, model } = require('mongoose');

const techSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Template = model('Template', techSchema);

module.exports = Template;
//I dont think we need this model