import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="contact-container">

                <div className="contact-text-block">
                    <h2>Estamos para escucharte.</h2>
                    <p>Platícanos tu proyecto. Nuestro equipo técnico te contactará para ofrecerte la solución acústica ideal.</p>

                    <div className="contact-details-clean">
                        <div className="detail-item-clean">
                            <FaMapMarkerAlt /> <span>Ciudad de México y Monterrey</span>
                        </div>
                        <div className="detail-item-clean">
                            <FaEnvelope /> <span>contacto@alfacustica.com</span>
                        </div>
                    </div>
                </div>

                <motion.form 
                className="contact-form-clean"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                >
                    <input type="text" placeholder="Nombre completo" required />
                    <input type="email" placeholder="Correo electrónico" required />
                    <select required> 
                        <option value="">Tipo de Proyecto</option>
                        <option  value="aislamiento">Aislamiento Acústico</option>
                        <option value="acondicionamiento">Acondicionamiento</option>
                        <option value="kinetics">Kinetics Noise Control</option>
                    </select>
                    <textarea placeholder="Cuéntanos sobre tu proyecto..." rows="5" required></textarea>
                    <button type="submit" className="submit-btn-clean">Enviar Mensaje</button>
                </motion.form>
            </div>
        </section>
    );
}