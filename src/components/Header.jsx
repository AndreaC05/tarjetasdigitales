import Logo from "../assets/Logo.svg";
import "../style/Header.css";
import { useEffect, useState } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Función para hacer scroll suave a las secciones
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className={`container_principal_header ${scrolled ? "scrolled" : ""}`}>
            <img src={Logo} alt="Logo" />
            <div className="header_list flex">
                <div className="list_header_primero">
                    <button onClick={() => scrollToSection('home')}>
                        <p>Home</p>
                    </button>
                </div>
                <div className="list_header">
                    <button onClick={() => scrollToSection('categorias')}>
                        <p>Categorías</p>
                    </button>
                </div>
                <div className="list_header">
                    <button onClick={() => scrollToSection('nosotros')}>
                        <p>Sobre Nosotros</p>
                    </button>
                </div>
                <div className="list_header">
                    <button onClick={() => scrollToSection('contacto')}>
                        <p>Contacto</p>
                    </button>
                </div>
            </div>
            <p className="numero_contacto">+51 950 874 416</p>
        </div>
    );
}