const mongoose = require( 'mongoose' );
const uuid = require('uuid');

const postsSchema = mongoose.Schema({
    
    postId:{
        type : String,
        required : true,
        unique : true,
        default: uuid.v4()
    },
    title : {
        type : String,
        required : true
    },
    image : {
        type: String,
        required: true
       //falta poner los datos de la imagen
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'comments'
    }],
    userOid:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required:true
    }
});

const postModel = mongoose.model( 'posts', postsSchema );

const Posts = {
    //CHECAR CON EL PROFE 
    addPost : function( newPost ){
        return postModel
                .create( newPost )
                .then( post => {
                    return post;
                })
                .catch( err => {
                    throw new Error( err.message );
                });
    },
    //HOME
    getAllPosts : function(){
        return postModel
                .find()
                .populate('userOid', ['username'] )
                .then( posts => {
                    return posts;
                })
                .catch( err => {
                    throw new Error( err.message );
                });
    },
    getPostById : function( id ){
        return postModel
                .find( {postId: id})
                .populate( 'comments', ['content'] )
                //checar este populate que si funciona pero no se si mostrara todos los usuarios
                .populate( 'userOid', ['username'] )
                //preguntar como mostrar el username tambien por cada comment
                // checar algo de populate adentro del populate
                .then( post => {
                    return post;
                })
                .catch( err => {
                    throw new Error( err.message );
                });
    },
    getPostByUser: function(id){
        return postModel
            .find({userOid:id})
            .populate('userOid', ['username'])
            .then( post => {
                return post;
            })
            .catch( err => {
                throw new Error( err.message );
            });
    }
}

module.exports = {
    Posts
};