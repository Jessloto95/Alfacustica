import { motion } from "framer-motion";


export default function Hero() {

    const handleScrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth"});
        }
    };

    return (
        <section  id="home" className="hero">
            <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            > 
            <h1>Ingeniería Acústica de Precisión</h1>
            <p>Soluciones avanzadas en aislamiento y acondicionamiento para espacios comerciales e industriales.</p>
            <button className="cta-button" onClick={handleScrollToContact}>Cotizar Proyecto</button>
            </motion.div>

            <div className="custom-shape-divider-bottom-hero">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0 C480,120 720,120 1200,0 L1200,120 L0,120 Z" className="shape-fill-hero"></path>
                </svg>
           </div>
        </section>
    );
}