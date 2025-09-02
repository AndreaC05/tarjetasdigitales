import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import "../style/Carousel.css";
import Imagen from "../assets/imagen.png";

export default function CarouselCumplaños() {
  const [cumpleanos, setCumpleanos] = useState([]);

  // Datos de ejemplo para cumpleaños
  const cumpleanosData = [
    {
      id: 1,
      imagen: Imagen,
      enlace: "/live/maria"
    },
    {
      id: 2,
      imagen: Imagen,
      enlace: "/live/carlos"
    },
    {
      id: 3,
      imagen: Imagen,
      enlace: "/live/ana"
    },
    {
      id: 4,
      imagen: Imagen,
      enlace: "/live/luis"
    },
    {
      id: 5,
      imagen: Imagen,
      enlace: "/live/luis"
    },
    {
      id: 6,
      imagen: Imagen,
      enlace: "/live/luis"
    }
  ];

  useEffect(() => {
    // Simular carga de datos
    setCumpleanos(cumpleanosData);
  }, []);

  const handleLiveClick = (enlace) => {
    // Aquí puedes usar React Router navigate o window.location
    // Para este ejemplo uso window.location
    window.location.href = enlace;
  };

  const cumpleanosTemplate = (cumpleanos) => {
    return (
      <div className="relative template_cumpleaños">
        {/* Imagen que ocupa todo el card */}
        <img 
          src={cumpleanos.imagen} 
          alt="Live stream" 
          className="w-full h-full object-cover"
        />
        
        {/* Botón Live posicionado encima de la imagen */}
        <div className="absolute top-0 p-2">
          <Button 
            label="Live" 
            icon="pi pi-eye"
            className="p-button-danger p-button-rounded p-button-sm"
            onClick={() => handleLiveClick(cumpleanos.enlace)}
            style={{
              fontSize: '0.875rem',
              padding: '0.5rem 1rem'
            }}
          />
        </div>

        {/* Overlay opcional para mejorar la legibilidad del botón */}
        <div className="absolute top-0 right-0 w-full h-full bg-black-alpha-10 pointer-events-none"></div>
      </div>
    );
  };

  return (
    <>
      <div className="container_carousel_cumpleaños">
        <div className="card flex justify-content-center">
          <Carousel 
            value={cumpleanos} 
            numVisible={1} 
            numScroll={1} 
            orientation="vertical" 
            verticalViewPortHeight="450px" 
            itemTemplate={cumpleanosTemplate}
            showIndicators={true}
            showNavigators={true}
            circular={true}
            autoplayInterval={5000}
          />
        </div>
      </div>
    </>
  );
}