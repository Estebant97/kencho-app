import React from "react";
import Navbar from "./NavBar";
import { Button } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";



function like(){
    alert('agregado a post likeados');
}
function unlike(){
    alert('eliminar de post likeados');
}

class OpenPost extends React.Component {

    render() {
        return (
            <>
                <Navbar></Navbar>
                <div className="container">
                <div className="borderImage">
                                   <p>@username</p>
                               <br>
                               </br>
                                   <img className="images"src={require('../assets/corgi.png')} alt="Corgi" />
                                    <p>Caption del meme</p>
                                    <br>
                                     </br>
                                   <div>
                                       <span>
                                   <FontAwesomeIcon icon={faArrowUp} size='4x' className="arrowUp" onClick={like}>
                                   </FontAwesomeIcon>
                                
                                   <FontAwesomeIcon icon={faArrowDown} size='4x' className="arrowDown" onClick={unlike}>
                                   </FontAwesomeIcon>
                                   </span>
                                  <div>
                                     <textarea placeholder="Dejar un comentario..."
                                    onChange={this.handleChange}
                                    rows={3}
                                    cols={40}
                                    />
                                     </div>
                                     <Button variant="success" style={{ height: 30 }} >Comentar</Button>
                                 <p>Cargar todos los comentarios abajo</p>
                               </div>
                               </div>
                               <br>
                               </br>
                               </div>
            </>
        );
    }
}
export default OpenPost;
