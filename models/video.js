const mongoose = require("mongoose");

const Schema = mongoose.Schema;

constvideoSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Excercise Type."
            },
            name: {
                type: String,
                trim: true,
                required: "Exercise Name."
            },
            duration: {
                type: Number,
                required: "Excercise Duration."
            },
            distance: {
                type: Number,
            },
            weight: {
                type: Number,

            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,

            },
        },
    ],

});

const Fitness = mongoose.model("Fitness", fitnessSchema);

module.exports = Fitness;





