// librerias
const express = require( 'express');
const bodyParser = require( 'body-parser');
const mongoose = require( 'mongoose' );
const morgan = require( 'morgan' );
const jsonParser = bodyParser.json();
const { Comments } = require('./models/comments-model');
const { Likes } = require('./models/likes-model');
const { Posts } = require('./models/posts-model');
const { Users } = require('./models/users-model');
const {DATABASE_URL, PORT} = require( './config' );
//const cors = require( './middleware/cors' );
const app = express();
//use
app.use( express.static( "public" ) );
app.use( morgan( 'dev' ) );
//app.use( cors );


//*******************USERS********************
// get all users
app.get('/users', (req, res) =>{
    Users
    .getAllUsers()
    .then(users => {
        return res.status(201).json(users)
    })
    .catch( err=> {
        res.statusMessage = err.message;
        return res.status(500).end();
    })
});
//post a new user
app.post('/newUser', jsonParser, (req, res) => {
    const {username,email, password} = req.body;
    if( !username || !email||!password){
        res.statusMessage = "One of these parameters is missing in the request";
        return res.status( 406 ).end();
    }
    const newUser={
           username,
           email, 
           password
       };

    Users
    .createUser(newUser)
    .then(user=>{
        return res.status(201).json(user);
    })
    .catch( err => {
        res.statusMessage = err.message;
        return res.status( 500 ).end();
    });
});
//**********************POSTS********************
//GET ALL POSTS
app.get( '/posts', ( req, res ) => {
    Posts
        .getAllPosts()
        .then( posts => {
            return res.status( 200 ).json( posts );
        })
        .catch( err => {
            res.statusMessage = err.message;
            return res.status( 500 ).end();
        });
});
//GET POST BY ID
//UNA VEZ PICANDOLE AL POST SOLO DESPLIEGA ESE CON SUS COMENTARIOS
app.get('/postsById/:postId',(req,res) => {
    let id = req.params.postId;
    if( !id ){
        res.statusMessage = "id not sent as params";
        return res.status(406).end(); 
    }
    Posts
        .getPostById(id)
        .then(post=> {
            return res.status( 200 ).json( post );
            //CHECAR SOBRE LOS COMENTARIOS DE CADA POST
        }) 
        .catch( err => {
            res.statusMessage = err.message;
            return res.status( 500 ).end();
        });
});

//GET POST BY USER ID 
//EL USUARIO PUEDE VER LOS POSTS QUE HA HECHO
app.get('/postsByUser/:userId',(req,res)=>{
    const id = req.params.userId;
    if( !id ){
        res.statusMessage = "id not sent as params";
        return res.status(406).end(); 
    }
    Posts
        .getPostByUser(id)
        .then(posts=>{
            return res.status( 200 ).json( posts );
        })
        .catch( err => {
            res.statusMessage = err.message;
            return res.status( 500 ).end();
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
    const {title,image,comments,userOid} = req.body;
    if( !title||!image ||!userOid ){
        res.statusMessage = "One of these parameters is missing in the request";
        return res.status( 406 ).end();
    }

    const newPost={
           title,
           image,
           comments,
           userOid
       };

    Posts
    .addPost(newPost)
    .then(post=>{
        return res.status(201).json(post);
    })
    .catch( err => {
        res.statusMessage = err.message;
        return res.status( 500 ).end();
    });

});

//**************************Likes********************************
// Get all likes by user
app.get('/getLikesByUser/:userId', (req, res) => {
    const id = req.params.userId;
    if( !id ){
        res.statusMessage = "id not sent as params";
        return res.status(406).end(); 
    }
    Likes
        .getAllLikedPostsByUser(id)
        .then(posts=>{
            return res.status( 200 ).json( posts );
        })
        .catch( err => {
            res.statusMessage = err.message;
            return res.status( 500 ).end();
        });
});

// Add a post to your like section
app.post('/newLike', jsonParser, (req, res) => {
    const {userOid, postOid, liked} = req.body;
    
    const newLike = {userOid,postOid, liked};

    Likes
        .createLikedPost( newLike )
        .then(like => {
            return res.status(201).json(like);
        })
        .catch( err => {
            res.statusMessage = err.message;
            return res.status( 500 ).end();
        });
    
});

// **************************COMMENTS************************************
app.post('/newComment', jsonParser, (req, res) => {
    const {content, userOid, postOid} = req.body;
    const newComment = {content, userOid, postOid,};

    Comments
        .addComment(newComment)
        .then(comment => {
            return res.status( 201 ).json( comment );
        })
        .catch( err => {
            res.statusMessage = err.message;
            return res.status( 500 ).end()
        })
});




app.listen( PORT, () => {
    console.log( `This server is running on port ${PORT}` );

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