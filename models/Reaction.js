const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {

        },
        reactionBody: {
            type: String,
            required: true,
            // Between 1-280 characters
        },
        createdAt: {
            type: Date,
            default: new Date,
            // Getter function to format
        }
    }
);

module.exports = reactionSchema;