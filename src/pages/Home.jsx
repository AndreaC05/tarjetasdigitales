import Banner from "../components/Banner";
import "../style/Home.css";
import CarouselCumplaños from "../components/CarouselCumpleaños";
import CarouselBabyShower from "../components/CarouselBabyShower";

export default function Home() {
    return(
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
            </div>
        </>
    );
}