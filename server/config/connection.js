const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/techmatchup', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;

// mongodb+srv://GordonD97:<password>@cluster0.vvlsccr.mongodb.net/?retryWrites=true&w=majority