import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <div className="contact-info">
                    <div className="contact-blob-wrapper">
                    <h2>Contacto</h2>
                    <p>¿Tienes un proyecto en mente? Estamos listos para ayudarte con soluciones acústicas integrales</p>

                    <div className="info-items-container">
                    <div className="info-item">
                        <strong>Ubicación:</strong> Ciudad de Mexico
                    </div>
                    <div className="info-item">
                        <strong>Email:</strong> contacto@alfacustica.com
                    </div>
                    </div>
                    </div>
                    {/* insertar un iframe de Google Maps después */}
                </div>
                <motion.form 
                className="contact-form"
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
                    <button type="submit" className="submit-btn">Enviar Mensaje</button>
                </motion.form>
            </div>
        </section>
    );
}