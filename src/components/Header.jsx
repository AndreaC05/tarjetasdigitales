import { useEffect, useState } from "react";
import Logo from "../assets/Logo.svg";
import "../style/Header.css";
import "../style/Responsive/HeaderResponsive.css";
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        setVisible(false); // Cerrar el Sidebar al hacer clic
    };

    return (
        <div className={`container_principal_header ${scrolled ? "scrolled" : ""}`}>
            <img src={Logo} alt="Logo" className="logo" />

            {/* Botón hamburguesa en pantallas pequeñas */}
            <Button 
                icon="pi pi-bars" 
                className="menu-button p-button-text p-button-plain"
                onClick={() => setVisible(true)}
                aria-label="Menu"
            />

            {/* Menú horizontal en pantallas grandes */}
            <div className="header_list flex">
                <div className="list_header_primero">
                    <Button onClick={() => scrollToSection('home')}><p>Home</p></Button>
                </div>
                <div className="list_header">
                    <Button onClick={() => scrollToSection('categorias')}><p>Categorías</p></Button>
                </div>
                <div className="list_header">
                    <Button onClick={() => scrollToSection('nosotros')}><p>Sobre Nosotros</p></Button>
                </div>
                <div className="list_header">
                    <Button onClick={() => scrollToSection('contacto')}><p>Contacto</p></Button>
                </div>
            </div>

            <p className="numero_contacto">+51 950 874 416</p>

            {/* Sidebar para móviles */}
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <div className="sidebar_links">
                    <Button onClick={() => scrollToSection('home')}>Home</Button>
                    <Button onClick={() => scrollToSection('categorias')}>Categorías</Button>
                    <Button onClick={() => scrollToSection('nosotros')}>Sobre Nosotros</Button>
                    <Button onClick={() => scrollToSection('contacto')}>Contacto</Button>
                </div>
            </Sidebar>
        </div>
    );
}
