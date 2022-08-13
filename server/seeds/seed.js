const db = require('../config/connection');
const { Template } = require('../models');

const techData = require('./techData.json');

db.once('open', async () => {
  await Template.deleteMany({});

  const technologies = await Template.insertMany(techData);

  console.log('Technologies seeded!');
  process.exit(0);
});
