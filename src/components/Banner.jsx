import Header from "./Header";
import Fondo from "../assets/Fondo.png";
import "../style/Banner.css";

export default function Banner() {
    return(
        <>
            <div className="container_principal_banner">
                <div className="banner">
                    <img src={Fondo} alt="" className="Fondo"/>
                    <div className="header">
                        <Header />
                    </div>
                </div>
            </div>
        </>
    );
}