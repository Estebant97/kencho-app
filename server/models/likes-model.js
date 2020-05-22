const mongoose = require( 'mongoose' );
const uuid = require('uuid');

const likesSchema = mongoose.Schema({
    
    postOid:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'posts',
        required:true
    },
    userOid:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'users',
        required:true

    },
    liked: {
        type: Boolean,
        required: true
    },
    commentId: {
        type : String,
        required : true,
        unique : true,
        default: uuid.v4()
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
    getAllLikedPostsByUser : function(id){
        return likeModel
        .find({userOid:id})
        .populate('postOid', ['title'])
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