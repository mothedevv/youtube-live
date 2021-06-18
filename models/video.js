const mongoose = require("mongoose");

const Schema = mongoose.Schema;

constvideoSchema = new Schema({
    : {
        type: ,
        default: Date.now,
    },
    exercises: [
        {
            title: {
                type: String,
                trim: true,
                required: "Excercise Type."
            },
            title: {
                type: String,
                trim: true,
                required: "Exercise Name."
            },
            description: {
                type: Number,
                required: "Excercise Duration."
            },
            distance: {
                type: Number,
            },
            category: {
                type: Number,

            },
            duration: {
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





