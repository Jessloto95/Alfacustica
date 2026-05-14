import logo from "../../images/Logo-Alf.Png";
import { FaLinkedin, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';


export default function Footer() {
    const currentYear = new  Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                
                <div className="footer-brand">
                    <img src={logo} alt="Alfacustica logo" className="footer-logo-img" />
                    <p className="footer-description">Líderes en soluciones de ingeniería acústica y control de ruido. 
            Calidad sonora con precisión técnica.</p>
            <div className="footer-social">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </div>
                </div>

                <div className="footer-location">
                    <h4><FaMapMarkerAlt /> CDMX</h4>
                    <p>Oficinas Corporativas</p>
                    <p>Blvd Adolfo Lopez Mateos 59 Los Alpes Alvaro Obregón 01010 Cdmx</p>
                </div>

                <div className="footer-location">
                    <h4><FaMapMarkerAlt/> Monterrey</h4>
                    <p>Centro de Distribución y Ventas</p>
                    <p>Río Paraná 5709 Col. Privada de Fundadores Monterrey NL 64900</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p> {currentYear} Alfacustica. Todos los derechos reservados. </p>
            </div>
        </footer>
    );
}