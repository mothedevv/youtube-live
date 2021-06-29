const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new mongoose.Schema({
            id: {
            type:Schema.Types.ObjectId,
            ref: 'video'
        },
        views: {
            type:String,
        },
        title: {
            type: Number,
            maxlength: 50,
        },
        description: {
            type: String,
        },
        
        category: { 
            type:String,
        },
        duration: {
            type: Number,
             default: 0, 
        },
        videoLink:{
            type: String
        },
        thumbnail: {
            type: String
        }
    }, { timestamps: true })
    
    
    const Video = mongoose.model('Video', videoSchema);
    
    module.exports = { Video }




