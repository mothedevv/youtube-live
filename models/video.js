const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const videoSchema = new Schema({
   
    
    song: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    
            title: {
                type: String,
                maxlength: 50,
            },
            artist: {
                type: String,
                
            },
            description: {
                type: Number,
            },
            genre: {
                type: Number,
            },
            category: {
                type: Number,
            },

            year: {
            type: Number,
            
            },

            duration: {
                type: Number;
            
            },
            views: {
                type: Number,

            },
            duration: {
                type: String
            },
            thumbnail: {
                type: String
            }
        
 },         { timestamps: true })


const Video = mongoose.model("Video", videoSchema);

module.exports = { Video }





