import React from "react";
import Navbar from "./NavBar";

class ActivityLog extends React.Component {
 

    render() {
        //const { name, description, category, price } = this.state;
        return (
            <>
                <Navbar></Navbar>
                <div className="container">
                    <div className="row">
                        <div className="mt-5 py-3">
                            <h1>Aquí se desplegaran todos los posts que ha comentado el usuario</h1>
                            <ul>
                            <li>Post 1</li>
                            <li>Post 2</li>
                            <li> Post 3</li>
                            </ul>
                           
                        </div>
                    
                      
                    </div>
                </div>

            </>
        );
    }
}
export default ActivityLog;
