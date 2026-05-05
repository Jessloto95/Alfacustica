import { motion } from "framer-motion";

import projNetflix from "../../images/Netflix-4.jpg";
import projNovoHotel from "../../images/novo-hotel.jpg";

const projects = [
    { id: 1, title: "Netflix Offices", category: "Acondicionamineto", img: projNetflix},
    { id: 2, title: "Novo-Hotel", category:"Aislamiento", img: projNovoHotel}
];

export default function Porfolio() {
    return (
        <section id="projects" className="portfolio">
            <div className="portfolio-header">
            <h2>Proyectos Destacados</h2>
            <p>Experiencia técnica aplicada en sectores corporativos e industriales.</p>
            </div>

            <div className="portfolio-grid">
                {projects.map((project)  => (
                    <motion.div
                    key={project.id}
                    className="portfolio-item"
                    whileHover={{ opacity: 0.9, scale: 0.98 }}
                    >
                        <img src={project.img} alt={project.title} />
                        <div className="portfolio-overlay">
                            <h3>{project.title}</h3>
                            <span>{project.category}</span>
                        </div>
                </motion.div>
                ))}
            </div>
        </section>
    );
}
