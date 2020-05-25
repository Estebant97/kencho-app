import React from "react";
import Navbar from "./NavBar";
import { Button } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {faCommentAlt} from "@fortawesome/free-regular-svg-icons";
//import {corgi} from "../assets/corgi.png";

class Feed extends React.Component {

    render() {
        return (
            <>
                <Navbar></Navbar>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 ml-5">
                            <h1 className="my-5">Memes Kencho</h1>
                            </div>
                            <span>
                            <Button variant="success" style={{ height: 80, marginTop: 30 }}>Agregar meme</Button>{' '}
                            </span>

                        </div>
                        <div className="imagesFeed">
                               <div className="borderImage">
                                   <p>@username</p>
                               <br>
                               </br>
                                   <img className="images"src={require('../assets/corgi.png')} alt="Corgi"/>
                                   <p>Caption del meme</p>
                                   <br>
                                    </br>
                                   <div>
                                       <span>
                                   <FontAwesomeIcon icon={faArrowUp} size='4x' className="arrowUp">
                                   </FontAwesomeIcon>
                                   
                                
                                   <FontAwesomeIcon icon={faArrowDown} size='4x' className="arrowDown">
                                   </FontAwesomeIcon>
                                  
                                    <span className="commentBox">
                                   <FontAwesomeIcon icon={faCommentAlt} size='4x' className="comment">
                                   </FontAwesomeIcon>
                                   </span>
                                   </span>
                               </div>
                               </div>
                               <br>
                               </br>
                               <div className="borderImage">
                               <br>
                               </br>
                                   <img className="images"src={require('../assets/golden.jpg')} alt="Corgi"/>
                                   <p>Caption del meme</p>
                                   <br>
                                    </br>
                                   <div>
                                       <span>
                                   <FontAwesomeIcon icon={faArrowUp} size='4x' className="arrowUp">
                                   </FontAwesomeIcon>
                                   
                                
                                   <FontAwesomeIcon icon={faArrowDown} size='4x' className="arrowDown">
                                   </FontAwesomeIcon>
                                  
                                    <span className="commentBox">
                                   <FontAwesomeIcon icon={faCommentAlt} size='4x' className="comment">
                                   </FontAwesomeIcon>
                                   </span>
                                   </span>
                               </div>
                               </div>
                               
                           </div>
                    </div>
                
            </>
        );
    }
}
export default Feed;
