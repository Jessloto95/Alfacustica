import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getProjectImages } from "../../utils/api";
import titleAnimatedcon from '../../images/1761176510548186.gif';

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
        <section>
            
        </section>
    );
}