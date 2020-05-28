import React from "react";
import Navbar from "./NavBar";
import fetchAPI from "../lib/request";


// post del user
// pasarle el metodo post del post

class AddPost extends React.Component {
    // si se pone el component did mount va arriba
    handleUpload = (event) => {
        // recibir el value del title y la imagen
        event.preventDefault();
        let title = document.getElementById('title').value;
        //var image = getBase64Image(document.getElementById('image').files[0]);
        console.log(title);
        const preview = document.getElementById("image").files[0];
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();
        //const regex = 'data:image/png;base64,';
        reader.addEventListener("load", function(){
            preview.src = reader.result;
        }, false);
        if(file){
            reader.readAsDataURL(file);
            reader.onload = function(e){
                var rawLog = reader.result;
                var image = '';
                for(let i = 23; i < rawLog.length; i++){
                    image += rawLog[i];
                }
                let data = {
                    title: 'prueba',
                    image: image
                };
                const settings = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Client-ID 373d237cc76ba81'
                    },
                    body : JSON.stringify( data )
                };
                //check if its in production 
                //const imageHash = 'lWoC4Co';
                fetch("https://api.imgur.com/3/image", settings)
                .then( response => {
                        return response.json();
                })
                .then( responseJson => {
                    const accessToken = localStorage.getItem("accessToken");
                    console.log("accessToken");
                    const data = {
                        title : title,
                        image : image
                        // username
                    }
                    const settings = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        Authorization: `Bearer ${accessToken}`,
                        body : JSON.stringify( data )
                    };
                    //this.setState({posts:data});
                    console.log( responseJson );

                    fetchAPI('/newPost', settings)

                    // si se realiza correctamente hacer una funcion que reciba como parametro el user, el title y la url de la imagen
                    // tomar el username del accessToken
                    //handlePost(username, title, image)
                    //console.log(this.state);
                })
                .catch( err => {
                    console.log(err);
                })
            }
            }
        }
    render() {
        //const { name, description, category, price } = this.state;
        return (
            <>
                <Navbar></Navbar>
                <div className="container">
                    <div className="row">
                        <div className="mt-5 py-3">
                            <form onSubmit={this.handleUpload}>
                                <div className="form-group">
                                    <label htmlFor="title">Titulo</label>
                                    <textarea className="form-control" id="title" rows="3"></textarea>
                                </div>
                                <div className="form-group">
                                <label htmlFor="image">
                                    Imagen
                                </label>
                                <input type="file" className="form-control-file" id="image"></input>
                                </div>
                                <button type="submit" className="btn mt-5" style={{width: '45%', backgroundColor: '#03989e', color: 'white'}}>
                                    Subir meme
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}
export default AddPost;
