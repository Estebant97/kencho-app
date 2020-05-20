const mongoose = require( 'mongoose' );
const uuid = require('uuid');

const likedPostSchema = mongoose.Schema({
    
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

const likedPostModel = mongoose.model( 'likedPosts', likedPostSchema );

const LikedPost ={
    createLikedPost : function( newLikedPost ){
        return likedPostModel
                .create( newLikedPost )
                .then( likedPost => {
                    return likedPost;
                })
                .catch( err => {
                    throw new Error( err.message );
                }); 
    },
    getAllLikedPost : function(id){
        return likedPostModel
        .find({userID:id})
        .then(likedPost=>{
            return likedPost;
        })
        .catch( err => {
            throw new Error( err.message );
        });
    }
}

module.exports = {
    LikedPost
};