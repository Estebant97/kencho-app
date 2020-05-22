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
    userOid : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users',
        required : true
    },
    postOid : {
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
                .find({userOid: id})
                .populate('postOid', ['title'] )
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