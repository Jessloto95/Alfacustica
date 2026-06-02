import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getProjectImages } from '../../utils/api';
import titleAnimatedIcon from '../../images/1761176510548186.gif';
import '../../../blocks/portfolio.css';

export default function LaserCutting() {
    const  [laserImages, setLaserImages] = useState([]);
    const  [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadLaserData() {
            try {
                const images = await getProjectImages("geometric lines pattern background", 9);
                setLaserImages(images);
                setLoading(false);
            } catch (error) {
                console.error("Error cargando imágenes láser:",error);
                setLoading(false);
            }
        }
        loadLaserData();
    }, []);

    return (
        <section className="portfolio" style={{ paddingTop: "140px", minHeight: "80vh", background: "#000000" }}>
            <div className="portfolio-header"> 
                <div className="title-animated-container">
                    <div className="gif-crop-wrapper">
                        <img src={titleAnimatedIcon} alt="decoración" className="title-animated-icon" />
                    </div>
                    <h2>Diseño y Corte Láser</h2>
                </div>
                <p>Catálogo dinámico de estructuras y patrones geométricos para paneles acústicos personalizados.</p>
            </div>
            
            {loading ? (
                <div className="preloader-container">
                    <div className="spinner"></div>
                    <p>Cargando vectores de diseño</p>
                </div> 
                ) : (
                    <div className="portfolio-grid">
                        {laserImages.map((img) => { 
                            if (!img || !img.src) return null;
                            return (
                            <motion.div
                            key={img.id}
                            className="portfolio-item"
                            whileHover={{ opacity: 0.9, scale: 0.98 }} >
                                <img src={img.src.medium} alt={img.alt || "Diseño Láser"}/>
                                <div className="portfolio-overlay">
                                    <h3>Celosía Personalizada</h3>
                                    <span>Diseño por {img.photographer}</span>
                                </div>
                            </motion.div>
                            );
                        })}
                    </div>
                )}
        </section>
    );
}