const { Schema, model } = require('mongoose');

const matchupSchema = new Schema ({
    form1: {
        type: String,
        required: true,
    },
    form2: {
        type: String,
        required: true,
    },
});

const Matchup = model('Matchup', matchupSchema);

module.exports = Matchup;