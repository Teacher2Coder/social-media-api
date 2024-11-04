const User = require('../models/User');
const Thought = require('../models/Thought');

const userData = require('./userData.json');
const thoughtData = require('./thoughtData.json');

console.log('Now seeding database');

User.find({})
    .exec()
    .then( async collection => {
        if (collection.length === 0) {
            const results = await User.insertMany(userData);
            return console.log('Users seeded', results);
        }
        return console.log('Already seeded');
    })
    .catch(err => console.error(err));

Thought.find({})
    .exec()
    .then( async collection => {
        if (collection.length === 0) {
            const results = await Thought.insertMany(thoughtData);
            return console.log('Users seeded', results);
        }
        return console.log('Already seeded');
    })
    .catch(err => console.error(err));