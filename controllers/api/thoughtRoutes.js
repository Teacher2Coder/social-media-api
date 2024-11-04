const router = require('express').Router();
const { User, Thought, Reaction } = require('../../models');


// Get all thoughts
router.get('/', async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.status(200).json(thoughts);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


// Get a single thought
router.get('/:id', async (req, res) => {
    try {
        const thought = await Thought.findOne({_id: req.params.id});
        res.status(200).json(thought);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


// Post a new thought
router.post('/', async (req, res) => {
    try {
        const thought = await Thought.create(req.body);
        await User.findOneAndUpdate(
            { username: req.body.username },
            { $push: { thoughts: thought._id } }
        )
        res.status(200).json(thought);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


// Update a thought
router.put('/:id', async (req, res) => {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { runValidators: true, new: true }
        );
        res.status(200).json(thought);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


// Delete a thought
router.delete('/:id', async (req, res) => {
    try {
        const thought = await Thought.findOneAndDelete({ _id: req.params.id });
        res.status(200).json(thought);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;