import { motion } from "framer-motion";

export default function ServiceCard({ title, description, image }) {
    const cardStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${image})`
    };
    return (
        <motion.div 
        className="service-card"
        style={cardStyle}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
        <h3>{title}</h3>
        <p>{description}</p>    
        </motion.div>
    );
}