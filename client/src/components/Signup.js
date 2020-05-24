import React from 'react';
import { Link } from "react-router-dom";

class Signup extends React.Component {
    render () {
        return(
            <section className="overflow-hidden">
                <div className="">
                    <div className="row">
                        <div className="col-sm-6 text-center px-5" style={{color: 'white', fontWeight: 'bold', fontSize: 45}}>
                           
                        </div>
                        <div className="col-sm-6">
                            <div className="text-center"
                                 style={{
                                     backgroundColor: 'white',
                                     width: '80%',
                                     height: '100vh',
                                     marginLeft: '20%'
                                 }}>
                                <form>
                                    <div className="py-5">
                                        <h1 className="mb-5 my-5">Ingresa tus datos</h1>
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

                                        <button type="submit" className="btn mt-5"
                                                style={{width: '40%', backgroundColor: '#03989e', color: 'white', fontSize: 20}}>
                                            <b>Registrate</b>
                                        </button>
                                    </div>
                                </form>
                                <div style={{fontSize: 20, fontWeight: 'bold'}}>
                                    <p>¿Ya eres usuario?</p>
                                    <Link to="/" style={{color: '#03989e', textAlign: 'center'}}>Inicia Sesión</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Signup;
