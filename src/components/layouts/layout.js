import React from 'react';
import logoImage from '../img/LOGO(Fondo Transparent).png';
// import logoImage2 from '../img/phoenixlogo2.png';


const Layout = ({children}) => {

    return (
        <>



            <main>{children}</main>


            <footer className={"pt-5 bg-dark text-white pb-3"}  >
                <div className="container d-flex align-items-center justify-content-between pb-3">
                    <div className="col-md-3 w-25">
                        <img className="navbar-logo w-50" src={logoImage} alt="Logo PhoenixGroup"/>
                    </div>
                    <div className="col-md-3 w-25">

                        <h5>Contacto</h5>
                        <p>Dirección: Online</p>
                        <p>Email: joan@jctagency.com</p>
                        <p>Teléfono: 633 391 411</p>
                    </div>

                    {/* Enlaces a las páginas importantes */}

                </div>
                <div className={"text-center "}>
                    <p>
                       Web developed for JCT Agency © 2024.
                    </p>
                </div>

            </footer>
        </>
            );
};
            export default Layout;