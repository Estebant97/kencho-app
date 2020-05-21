const mongoose = require( 'mongoose' );
const uuid = require('uuid');

const likesSchema = mongoose.Schema({
    
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'posts',
        required:true
    },
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'users',
        required:true

    },
    liked: {
        type: Boolean,
        required: true
    }
});

const likeModel = mongoose.model( 'likes', likesSchema );

const Likes = {
    createLikedPost : function( newLikedPost ){
        return likeModel
                .create( newLikedPost )
                .then( likedPost => {
                    return likedPost;
                })
                .catch( err => {
                    throw new Error( err.message );
                }); 
    },
    getAllLikedPosts : function(id){
        return likeModel
        .find({userID:id})
        .then(likedPosts=>{
            return likedPosts;
        })
        .catch( err => {
            throw new Error( err.message );
        });
    }
}

module.exports = {
    Likes
};