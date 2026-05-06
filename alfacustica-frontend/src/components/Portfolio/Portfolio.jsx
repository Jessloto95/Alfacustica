import { motion } from "framer-motion";

import projNetflix from "../../images/Netflix-4.jpg";
import projNovoHotel from "../../images/novo-hotel.jpg";
import projIyuno from "../../images/Oficinas-Iyuno.jpg";
import projSoleil from "../../images/Soleil .jpg";
import projCineAca from "../../images/Cine-Acapulco.jpg";
import projUnifin from "../../images/Unifin.jpg";
import projCineCond from "../../images/Cine-Condado .jpg";
import projSimGolf from "../../images/Simulador-de-golf .jpg";
import projCinePale from "../../images/Cine-Palermo.jpg";

const projects = [
    { id: 1, title: "Netflix Offices", category: "Acondicionamineto", img: projNetflix},
    { id: 2, title: "Novo-Hotel", category:"Aislamiento", img: projNovoHotel},
     { id: 3, title: "Iyuno Offices", category: "Acondicionamineto", img: projIyuno},
     { id: 4, title: " Edificio Soleil", category:"Aislamiento", img: projSoleil},
     { id: 5, title: " Cine Acapulco ", category:"Aislamiento", img: projCineAca},
     { id: 6, title: "Oficinas Unifin ", category:"Aislamiento", img: projUnifin},
     { id: 7, title: "Cine Condado ", category:"Diseño-Home Cinema", img: projCineCond},
     { id: 8, title: "Simulador de Golf ", category:"Domotica", img: projSimGolf},
     { id: 9, title: "Cine Palermo", category:"Diseño-Home Cinema", img: projCinePale},
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
