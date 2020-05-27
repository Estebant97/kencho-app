import React from "react";
import Navbar from "./NavBar";
import { Button } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {faCommentAlt} from "@fortawesome/free-regular-svg-icons";
import fetchAPI from '../lib/request';
//import { withRouter } from "react-router-dom";
//import { useHistory } from "react-router-dom";
//var Modal = ReactBootstrap.Modal;
//import {corgi} from "../assets/corgi.png";

//Redirecciona al open post
//Se le tienen que mandar los props del post para que cargue la img y comments

/*
function postToOpen(){
    //this.props.history.push("/open-post");
    window.location.href='/open-post';
}

*/

//likedPost = true, agregarlo a los post likeados del usuario
function like(){
    alert('agregado a post likeados');
}
function unlike(){
    alert('eliminado de post likeados');
}


class Feed extends React.Component {

    constructor(props) {
        super(props);
     
        this.state = {
          posts:[],
        };
        console.log(this.state);
      }

      onClick =(id) => {
        this.props.history.push(`/open-post/${id}`);
      }
     
    componentDidMount(){
        if(!localStorage.getItem("accessToken")){
            this.props.history.push("/login")
        }
        const settings = {
            method: 'GET'
        }
        //check if its in production 
        fetchAPI("/posts", settings)
        .then( response => {
            return response.json();
        })
        .then( data => {
            
            this.setState({posts:data});
            console.log( data );
            console.log(this.state);
        })
        .catch( err => {
            console.log(err);
        })
    }


    render() {
        const {posts}=this.state;
        console.log("entro al render");
        //console.log(posts);
        return (
            <>
                <Navbar></Navbar>
                <div className="row">
                        <div className="col-sm-9 ml-5">
                            <h1 className="my-5">Memes Kencho</h1>
                        </div>
                            <span>
                                <Button variant="success" style={{ height: 80, marginTop: 30 }} >Agregar meme</Button>
                            </span>
                                <div className="imagesFeed">
                                     <div >
                                        {posts.map(post=>
                                        <div className="borderImage">
                                            <div>
                                                {post.userOid.username}
                                             </div>
                                                <img  className="images" src={post.image} onClick={()=>this.onClick(post._id)} alt="meme"/>
                                                    <p>{post.title}</p>
                                                        <span>
                                                            <FontAwesomeIcon icon={faArrowUp} size='3x' className="arrowUp" onClick={like}>
                                                            </FontAwesomeIcon>
                                                            <FontAwesomeIcon icon={faArrowDown} size='3x' className="arrowDown"  onClick={unlike}>
                                                            </FontAwesomeIcon>
                                                                <span className="commentBox" onClick={()=>this.onClick(post._id)} >
                                                                    <FontAwesomeIcon icon={faCommentAlt} size='3x' className="comment">
                                                                    </FontAwesomeIcon>
                                                                </span>
                                                        </span>
                                                        
                                         </div>
                                        )}  
                                </div>
                        </div>

                </div>
                
            </>
        );
    }

}
export default Feed;
