import "../style/RedesSociales.css";
import "../style/Responsive/RedesSocialesResponsive.css";

export default function RedesSociales() {
  return (
    <>
      <div className="container_redes_sociales">
        <ul>
          <li>
            <a
              href="https://wa.me/51950874416?text=Hola%2C%20estoy%20interesado%20en%20una%20tarjeta%20digital%20para%20mi%20evento"
              target="_blank"
            >
              <i className="pi pi-whatsapp" aria-hidden="true"></i>
              <span> - WhatsApp</span>
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@andreas.tarjetas?_t=ZS-8zQELE8b7Gj&_r=1" target="_blank">
              <i className="pi pi-tiktok" aria-hidden="true"></i>
              <span> - TikTok</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61580151631680"
              target="_blank"
            >
              <i className="pi pi-facebook" aria-hidden="true"></i>
              <span> - Facebook</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
