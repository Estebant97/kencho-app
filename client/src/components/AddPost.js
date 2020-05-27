import React from "react";
import Navbar from "./NavBar";


// post del user
// pasarle el metodo post del post
/* new Imgur({
    clientid: '373d237cc76ba81',
    callback: postImage()
}) */

class AddPost extends React.Component {
    componentDidMount(){
        let data = {
            title: 'prueba',
            image: ''
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
        .then( data => {
            
            //this.setState({posts:data});
            console.log( data );
            //console.log(this.state);
        })
        .catch( err => {
            console.log(err);
        })
    }
    render() {
        //const { name, description, category, price } = this.state;
        return (
            <>
                <Navbar></Navbar>
                <div className="container">
                    <div className="row">
                        <div className="mt-5 py-3">
                            <form>
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
                            </form>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}
export default AddPost;
