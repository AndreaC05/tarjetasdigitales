import Header from "./Header";
import Fondo from "../assets/Fondo.png";
import "../style/Banner.css";

export default function Banner() {
    return(
        <>
            <div id="home" className="container_principal_banner">
                <div className="banner">
                    <img src={Fondo} alt="" className="Fondo"/>
                    <div className="header">
                        <Header />
                    </div>
                    <div className="text_banner">
                        <h1>Invitaciones Creativas, Interactivas y 100% Digitales</h1>
                    </div>
                </div>
            </div>
        </>
    );
}