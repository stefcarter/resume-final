const { template, model } = require('mongoose');

const templateChoices = new template({
  temp1: {
    type: File,
    required: true,
  },
  temp2: {
    type: File,
    required: true,
  },
  temp3: {
    type: File,
    required: true,
  }
});

const Matchup = model('template', templateChoices);

module.exports = template;
