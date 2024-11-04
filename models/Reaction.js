const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            // Mongoose Object ID data type
            // Default as new ID
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: new Date,
            // Getter function to format
        }
    }
);

module.exports = reactionSchema;