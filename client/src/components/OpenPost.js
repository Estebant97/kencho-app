import React from "react";
import Navbar from "./NavBar";


class OpenPost extends React.Component {
    render() {
        return (
            <>
                <Navbar></Navbar>
                <div className="container">
                   <h1>Mostrar el post clickeado con todos sus comentarios </h1>
                </div>
            </>
        );
    }
}
export default OpenPost;
