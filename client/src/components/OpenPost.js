import React from "react";
import Navbar from "./NavBar";
import fetchAPI from '../lib/request';
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


    constructor(props) {
        super(props);
     
        this.state = {
          post:[],
        };
        console.log(this.state);
      }


       
    componentDidMount(){
        const settings = {
            method: 'GET'
        }
        //check if its in production 
        fetchAPI(`/postsById/${this.props.match.params.id}`, settings)
        .then( response => {
            return response.json();
        })
        .then( data => {
            
            this.setState({post:data});
            console.log( data );
            console.log(this.state);
        })
        .catch( err => {
            console.log(err);
        })
    }

    render() {
        const {post}=this.state;
        console.log(post);
        return (
            <>
                <Navbar></Navbar>
                <div className="imagesFeed">
                    {post.map(post=>
                        <div className="borderImage">
                            <div>
                                 @{post.userOid.username}
                            </div>
                                <img  className="images" src={post.image} alt="meme"/>
                                        <p>{post.title}</p>
                                            <span>
                                                <FontAwesomeIcon icon={faArrowUp} size='3x' className="arrowUp" onClick={like}>
                                                </FontAwesomeIcon>
                                                    <FontAwesomeIcon icon={faArrowDown} size='3x' className="arrowDown"  onClick={unlike}>
                                                    </FontAwesomeIcon>
                                                                    
                                            </span>
                                                <div>
                                                    <textarea placeholder="Dejar un comentario..."
                                                    onChange={this.handleChange}
                                                    rows={2}
                                                    cols={40}
                                                    />
                                                    
                                                </div>
                                                <Button variant="success" style={{ height: 30 }} >Comentar</Button>
                                            <div>
                                                
                                                {post.comments.map(comment=>
                                                    <div>
                                                         <p>{comment.content}</p>
                                                         <p>{comment.userOid}</p>
                                                        
                                                    </div>
                                                    )}
                                                    
                                             </div>
                            </div>
                    )}  
                    {/*
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
                    */}
                 </div>
            </>
        );
    }
}
export default OpenPost;
