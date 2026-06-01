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
import titleAnomatedIcon from "../../images/1761176510548186.gif";
import { useEffect, useState } from "react";
import { getProjectImages } from "../../utils/api";

const projects = [
  {
    id: 1,
    title: "Netflix Offices",
    category: "Acondicionamineto",
    img: projNetflix,
  },
  { id: 2, title: "Novo-Hotel", category: "Aislamiento", img: projNovoHotel },
  {
    id: 3,
    title: "Iyuno Offices",
    category: "Acondicionamineto",
    img: projIyuno,
  },
  {
    id: 4,
    title: " Edificio Soleil",
    category: "Aislamiento",
    img: projSoleil,
  },
  {
    id: 5,
    title: " Cine Acapulco ",
    category: "Aislamiento",
    img: projCineAca,
  },
  {
    id: 6,
    title: "Oficinas Unifin ",
    category: "Aislamiento",
    img: projUnifin,
  },
  {
    id: 7,
    title: "Cine Condado ",
    category: "Diseño-Home Cinema",
    img: projCineCond,
  },
  {
    id: 8,
    title: "Simulador de Golf ",
    category: "Domotica",
    img: projSimGolf,
  },
  {
    id: 9,
    title: "Cine Palermo",
    category: "Diseño-Home Cinema",
    img: projCinePale,
  },
];

export default function Porfolio() {
const [projectImages, setProjectImages] = useState([]);

useEffect(() => {
  async function loadImages() {
    try {
      const images = await getProjectImages();

      setProjectImages(images);
    } catch (error) {
      console.error(error);
    }
  }

  loadImages();
}, []);


  return (
    <section id="projects" className="portfolio">
      <div className="portfolio-header">
        <div className="title-animated-container">
          <div className="gif-crop-wrapper">
            <img
              src={titleAnomatedIcon}
              alt="decoración"
              className="title-animated-icon"
            />
          </div>
          <h2>Proyectos Destacados</h2>
        </div>
        <p>
          Experiencia técnica aplicada en sectores corporativos e industriales.
        </p>
      </div>

      <div className="portfolio-grid">
        {projectImages.map((project) => (
          <motion.div
            key={project.id}
            className="portfolio-item"
            whileHover={{ opacity: 0.9, scale: 0.98 }}
          >
            <img src={project.src.original} alt={project.title} />
            <div className="portfolio-overlay">
              <h3>{project.photographer}</h3>
              <span>{project.category}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
