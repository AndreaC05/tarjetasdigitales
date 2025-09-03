import "../style/RedesSociales.css";

export default function RedesSociales() {
  return (
    <>
      <div className="container_redes_sociales">
        <ul>
          <li>
            <a href="">
              <i className="pi pi-whatsapp" aria-hidden="true"></i>
              <span> - WhatsApp</span>
            </a>
          </li>
          <li>
            <a href="">
              <i className="pi pi-tiktok" aria-hidden="true"></i>
              <span> - TikTok</span>
            </a>
          </li>
          <li>
            <a href="">
              <i className="pi pi-facebook" aria-hidden="true"></i>
              <span> - Facebook</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
