const { Schema, model } = require('mongoose');

const templateSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  static: {
    type: String,
    require: true
  },
  // ? handlebars like template
  // My static connect is interlaced with my {input1} fields.
  // {input0} is the first input field in my collection. {input1} can be re-used.
  //

  // input fields that the user will be interacting with will be connecting to this. 
  inputField: [
    {
      type: Schema.Types.ObjectId,
      ref: 'inputField'
    }
  ]

});

const Template = model('Tech', templateSchema);

module.exports = Template;
