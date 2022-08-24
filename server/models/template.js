const { Schema, model } = require('mongoose');

//Line 4 is the example for template!!
// const temp = "My static connect is interlaced with my {input1} fields. {input0} is the first input field in my collection. {input1} can be re-used."

const templateSchema = new Schema({
  title:{
    type: String,
    unique: true,
    required: true
  },
  temp:{
    type: String, 
    required: true
  }
//change the name of the file to : Template instead!!
});

const Template = model('Template', templateSchema);

module.exports = Template;
