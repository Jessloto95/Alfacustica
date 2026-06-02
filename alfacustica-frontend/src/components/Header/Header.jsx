import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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
                    <Link to='/'>
                <img src={logo} alt='logo-alfacustica' className='logo-img'/>
                </Link>
            </div>
            <nav>
                <ul className='nav-links'>
                    <li><HashLink smooth to='/#home'>Home</HashLink></li>
                    <li><HashLink smooth to='/#services'>Servicios</HashLink></li>
                    <li><HashLink smooth to='/#projects'>Proyectos</HashLink></li>

                    <li><Link to='/corte-laser' style={{ color: 'rgb(255, 204, 0)', fontWeight: 'bold' }}> Corte Láser </Link></li>
                    <li><HashLink smooth to='/#contact'>Contacto</HashLink></li>
                </ul>
            </nav>
        </motion.header>
    );
}