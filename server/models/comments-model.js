const mongoose = require( 'mongoose' );
const uuid = require('uuid');

const commentSchema = mongoose.Schema({
    
    commentId:{
        type : String,
        required : true,
        unique : true,
        default: uuid.v4()
    },
    content : {
        type : String,
        required : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users',
        required : true
    },
    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'posts',
        required : true
    }
});

const commentModel = mongoose.model( 'comments', commentSchema );

const Comments = {
    addComment : function( newComment ){
        return commentModel
                .create( newComment )
                .then( comment => {
                    return comment;
                })
                .catch( err => {
                    throw new Error( err.message );
                });
    },
    //COMMENTS DEL ACTIVITY LOG
    getAllCommentsByUserId : function(id){
        return commentModel
                .find({user: id})
                .populate('post', ['title'] )
                .then( comments => {
                    return comments;
                })
                .catch( err => {
                    throw new Error( err.message );
                });
    }
}

module.exports = {
    Comments
};