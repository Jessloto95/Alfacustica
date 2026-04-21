import { motion } from 'framer-motion';
import logo from '../../images/Logo.png';

export default function Header() {
    return ( 
    <motion.header
        className='header'
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
            >
                <div className='logo-container'>
                <img src={logo} alt='logo-alfacustica' className='logo-img'/>
            </div>
            <nav>
                <ul className='nav-links'>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#services'>Servicios</a></li>
                    <li><a href='#projects'>Proyectos</a></li>
                    <li><a href='#contact'>Contacto</a></li>
                </ul>
            </nav>
        </motion.header>
    );
}