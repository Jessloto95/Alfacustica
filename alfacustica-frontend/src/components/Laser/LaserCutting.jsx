import { useState } from 'react';
import { motion } from 'framer-motion';
//import { getProjectImages } from '../../utils/api';
import titleAnimatedIcon from '../../images/1761176510548186.gif';
import '../../../blocks/portfolio.css';

export default function LaserCutting({ laserImages = [], loading}) {
    const [visibleCount, setVisibleCount] = useState(3);

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 3);
    };
    

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
                    <p>Cargando vectores de diseño...</p>
                </div> 
                ) : (
                    <div style={{ display:'flex', flexDirection: 'column', alignItems: ' center' }}>
                    <div className="portfolio-grid">
                        {laserImages.slice(0, visibleCount).map((img) => { 
                            if (!img || !img.src) return null;
                            return (
                            <motion.div
                            key={img.id}
                            className="portfolio-item"
                            whileHover={{ opacity: 0.9, scale: 0.98 }} 
                            >
                                <img src={img.src.medium} alt={img.alt || "Diseño Láser"}/>
                                <div className="portfolio-overlay">
                                    <h3>Celosía Personalizada</h3>
                                    <span>Diseño por {img.photographer}</span>
                                </div>
                            </motion.div>
                            );
                        })}
                        </div>
                        {visibleCount < laserImages.length && (
                        <button 
                        className='cta-button'
                        onClick={handleShowMore}
                        style={{ marginTop: '40px', padding: '15px 40px' }}
                        >
                            Mostrar más
                        </button>
                        )}
                    </div>
                )}
        </section>
    );
}