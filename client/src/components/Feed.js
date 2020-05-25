import React from "react";
import Navbar from "./NavBar";
import { Button } from 'react-bootstrap';


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
                            <Button variant="success" style={{ height: 80, marginTop: 10 }}>Agregar meme</Button>{' '}
                            </span>
                           
                           
                          
                        </div>
                    </div>
                
            </>
        );
    }
}
export default Feed;
