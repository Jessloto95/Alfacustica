import { motion } from "framer-motion";


export default function Hero() {
    return (
        <section className="hero">
            <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            > 
            <h1>Ingeniería Acústica de Precisión</h1>
            <p>Soluciones avanzadas en aislamiento y acondicionamiento para espacios comerciales e industriales.</p>
            <button className="cta-button">Cotizar Proyecto</button>
            </motion.div>
        </section>
    );
}