const mongoose = require( 'mongoose' );

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        index: {unique:true}
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required:true
    }


});

const userModel = mongoose.model( 'users', userSchema );

const Users = {
    createUser : function( newUser ){
        return userModel
                .create( newUser )
                .then( user => {
                    return user;
                })
                .catch( err => {
                    throw new Error( err.message );
                }); 
    },
    getAllUsers : function(){
        return userModel
                .find()
                .then( users => {
                    return users;
                })
                .catch( err => {
                    throw new Error( err.message );
                }); 
    },
    getUserByEmail : function( email ){
        return userModel
                .findOne( {email} )
                .then( user => {
                    return user;
                })
                .catch( err => {
                    throw new Error(err.message);
                });
    }
}

module.exports = {
    Users
};