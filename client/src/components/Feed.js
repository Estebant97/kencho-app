import React from "react";
import Navbar from "./NavBar";


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
                        </div>
                    </div>
                
            </>
        );
    }
}
export default Feed;
