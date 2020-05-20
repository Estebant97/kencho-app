// librerias
const express = require( 'express');
const bodyParser = require( 'body-parser');
const mongoose = require( 'mongoose' );
const jsonParser = bodyParser.json();
const { Comments } = require('./models/comments-model');
const { LikedPosts } = require('./models/likedposts-model');
const { Posts } = require('./models/posts-model');
const { User } = require('./models/users-model');
const {DATABASE_URL, PORT} = require( './config' );
//const cors = require( './middleware/cors' );
const app = express();
//use
app.use( express.static( "public" ) );
//app.use( cors );

//GET ALL POSTS
app.get( '/posts', ( req, res ) => {
    Posts
        .getAllPosts()
        .then( posts => {
            return res.status( 200 ).json( posts );
        })
        .catch( err => {
            res.statusMessage = err.message;
            return res.status( 400 ).end();
        });
});
//GET POST BY ID
//UNA VEZ PICANDOLE AL POST SOLO DESPLIEGA ESE CON SUS COMENTARIOS
app.get('/postsById/:id',(req,res)=>{
    const id = req.params.id;
    Posts
    .getPostById(id)
    .then(post=>{
        if(!post){
            return res.status(400).end();
        }  
         //CHECAR SOBRE LOS COMENTARIOS DE CADA POST 
    })
    .catch( err => {
        res.statusMessage = err.message;
        return res.status( 400 ).end();
    });

});

//GET POST BY USER ID 
//EL USUARIO PUEDE VER LOS POSTS QUE HA HECHO
app.get('/postsByUser/:id',(req,res)=>{
    const id= req.params.id;
    Posts
    .getPostByUser(id)
    .then(posts=>{
        return res.status( 200 ).json( posts );
    })
    .catch( err => {
        res.statusMessage = err.message;
        return res.status( 400 ).end();
    });

})

/* app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file)
  }) */

//ADD POST
app.post('/newPost',jsonParser,(req,res)=>{
    //CHECAR QUE ONDA CON COMMENTS Y USER QUE SON REFERENCIADOS
    const {postId,date,title,image,comments,user} = req.body;
    if( !postId || !date||!title||!image ||!user ){
        res.statusMessage = "One of these parameters is missing in the request";
        return res.status( 406 ).end();
    }

    const newPost={
           postId,
           date,
           title,
           image,
           comments,
           user
       };

    Posts
    .addPost(newPost)
    .then(post=>{
        return res.status(201).json(post);
    })
    .catch( err => {
        res.statusMessage = err.message;
        return res.status( 400 ).end();
    });

})
app.listen( PORT, () => {
    console.log( "This server is running on port 8080" );

    new Promise( ( resolve, reject ) => {

        const settings = {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        };
        mongoose.connect( DATABASE_URL, settings, ( err ) => {
            if( err ){
                return reject( err );
            }
            else{
                console.log( "Database connected successfully." );
                return resolve();
            }
        })
    })
    .catch( err => {
        console.log( err );
    });
});