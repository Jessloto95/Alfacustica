import ServiceCard from "./ServiceCard";
import "../../../blocks/services.css";
import imgAislamiento from "../../images/novo-hotel.jpg";
import imgAcondicionamiento from "../../images/Netflix-4.jpg";
import imgConsultoria from "../../images/Consultoria-acustica.jpg";
import imgKinetics from "../../images/Kinetics.jpg";


const servicesData = [
    { 
    id: 1, 
    title: "Aislamiento Acústico",
    description: "Reducción de ruido exterior para máxima privacidad.",
    image: imgAislamiento
},
    { 
        id: 2,
        title: "Acondicionamiento",
        description: "Optimización de la calidad sonora dentro de tus espacios.",
        image: imgAcondicionamiento
    },
    { 
        id: 3,
        title: "Consultoría Técnica", 
        description: "Estudios y mediciones acústicas profesionales.",
        image: imgConsultoria
    },
    { 
        id: 4,
        title: "Kinetics Noise Control", 
        description: "Soluciones de control de ruido y vibraciones de alta precisión para proyectos industriales.",
        image: imgKinetics
    }
];

export default function Services() {
    return (
        <section id="services" className="services-container">
                <div className="services-titles">  
                    <h2>Soluciones de Ingeniería Acústica</h2>
                    <p>Transformamos espacios mediante tecnología y precisión. Nuestro equipo experto garantiza el confort sonoro que tu proyecto necesita.</p>
                </div>
                
            <div className="services-grid"> 
                {servicesData.map( service => (
                    <ServiceCard key={service.id} title={service.title} description={service.description}
                    image={service.image}
                    />
                ))}
            </div>
        </section>
    );
}