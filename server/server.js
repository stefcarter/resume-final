const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const MongoClient = require('mongodb');
const path = require('path');
// install auth middleware add auth middleware line 

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const { Template } = require('./models');
const techData = require('./seeds/techData.json');
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.get('/seedDatabase', async (req, res) => {
      await Template.deleteMany({});

    const technologies = await Template.insertMany(techData);

    console.log('Technologies seeded!');
    res.json(technologies);
    })
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;
// adding mongo export 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db) {
        _db = db.db("employees");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};

  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);
  startMongoClient(typeDefs, resolvers);
