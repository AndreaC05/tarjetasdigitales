import Banner from "../components/Banner";
import Footer from "../components/Footer";
import "../style/Home.css";
import Perfil from "../assets/perfil.png";
import CarouselCumplaños from "../components/CarouselCumpleaños";
import CarouselBabyShower from "../components/CarouselBabyShower";
import RedesSociales from "../components/RedesSociales";
import Corazones from "../assets/corazones.svg";
import computer from "../assets/Icons/computer.svg";
import music from "../assets/Icons/music.svg";
import share from "../assets/Icons/share.svg";
import Circulo from "../assets/circulo.svg";

export default function Home() {
  const caracteristicas = [
    {
      icon: computer,
      text: "Diseño a tu gusto"
    },
    {
      icon: music,
      text: "Música que lo hacen único"
    },
    {
      icon: share,
      text: "¡Súper fáciles de compartir!"
    }
  ];

  return (
    <>
      <Banner />
      <div className="container_inicio_principal">
        <section className="categoria">
          <h2>CATEGORÍA</h2>
          <div className="carousel_cumpleaños">
            <h5>Cumpleaños</h5>
            <CarouselCumplaños />
          </div>
          <div className="carousel_baby_shower">
            <h5>Baby Shower</h5>
            <CarouselBabyShower />
          </div>
        </section>
        <section className="sobre_nosotros">
            <div className="corazones_back">
                <img src={Corazones} alt="" />
            </div>
          <h2>SOBRE NOSOTROS</h2>
          <p>
            ¡Haz tu evento aún más inolvidable con nuestras{" "}
            <strong>invitaciones creativas</strong> y{" "}
            <strong>llenas de estilo</strong>!
          </p>
          <div className="text_sobre_nosotros">
            <p>
              Transformamos tus ideas en invitaciones digitales únicas. Ya sea
              para una boda, cumpleaños o cualquier tipo de evento, creamos
              tarjetas personalizadas con música, diseños y un toque especial
              que harán que tus invitados se sorprendan desde el primer momento.
            </p>
          </div>
          <div className="caracteristicas_foto flex">
            <div className="caracteristicas">
              {caracteristicas.map((caracteristica, index) => (
                <div key={index} className="caja flex">
                  <div className="caja_icon">
                    <img src={caracteristica.icon} alt="" />
                  </div>
                  <div className="text_caja">
                    <p>{caracteristica.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="foto">
              <img src={Perfil} alt="" />
              <div className="circulo">
                <img src={Circulo} alt="" />
                <img src={Circulo} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="contacto">
            <h2>CONTACTO</h2>
            <div className="redes_sociales">
              <RedesSociales />
            </div>
        </section>
      </div>
      <Footer />
    </>
  );
}