import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import "../style/Header.css";

export default function Header() {
    return(
        <>
            <div className="container_principal_header">
                <img src={ Logo } alt="" />
                <div className="header_list flex">
                    <div className="list_header_primero"><Link><p>Home</p></Link></div>
                    <div className="list_header"><Link><p>Categorías</p></Link></div>
                    <div className="list_header"><Link><p>Sobre Nosotros</p></Link></div>
                    <div className="list_header"><Link><p>Contacto</p></Link></div>
                </div>
                <p className="numero_contacto">+51 950 874 416</p>
            </div>
        </>
    );
}