import React from 'react';
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

class Signup extends React.Component {

    render () {
        return(
            <>
            <section
                style={{
                    height: '100vh',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    
                }}>
                <NavBar searchVisible={true}/>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="mx-auto"
                                 style={{
                                     marginTop: '10%',
                                     backgroundColor: 'white',
                                     borderRadius: 10,
                                     width: '35%',
                                     height: '60vh',
                                     textAlign: 'center'
                                 }}>
                                <form onSubmit={this.handleLogin}>
                                    <div className="py-5">
                                        <h1 className="mb-5">Registrate</h1>
                                        <div className="form-group">
                                            <input type="text" placeholder='Nombre de usuario' style={{width: '70%'}}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" placeholder='Email' style={{width: '70%'}}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" placeholder='Contraseña' style={{width: '70%'}}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" placeholder='Confirmar contraseña' style={{width: '70%'}}/>
                                        </div>
                                        <button type="submit" className="btn mt-5" style={{width: '45%', backgroundColor: '#03989e', color: 'white'}}>
                                            <Link to="/feed" style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>Ok</Link>
                                        </button>
                                    </div>
                                </form>
                                <h6 className="text-center">¿Ya eres usuario?</h6>
                                <Link to="/" style={{color: '#03989e', fontWeight: 'bold', fontSize: 20}}>Inicia sesión</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        );
    }
}
export default Signup;
