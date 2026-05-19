import { motion } from "framer-motion";

import logoAero from "../../images/Aeromexico.png";
import logoArbo from "../../images/ARBOLEDA.png";
import logoAtio from "../../images/Atio.png";
import logoAudi from "../../images/audi.png";
import logoClub from "../../images/ClubdeGolfChap.png";
import logoDhl from "../../images/DHL.png";
import logoFace from "../../images/facebook-1-logo.png";
import logoFord from "../../images/Ford.png";
import logoGen from "../../images/general_motors.png";
import logoGoo from "../../images/Google.png";
import logoHella from "../../images/hella-logo.png";
import logoIyun from "../../images/Iyuno_Logo.png";
import logoJpMor from "../../images/JP-Morgan-Chase-Logo.png";
import logoLego from "../../images/lego.png";
import logoLock from "../../images/Lockton_Logo.png";
import logoNetfl from "../../images/netflix.png";
import logoNu from "../../images/NU.png";
import logoTrup from "../../images/Truper.png";
import logoUnifi from "../../images/unifin.png";
import logoViv from "../../images/Viva_Logo.png";

export default function Clients() {
    const clientLogos =  [
        { id: 1, name:"Aeromexico", img: logoAero},
        { id: 2, name:"Arboleda", img: logoArbo},
        { id: 3, name:"Atio", img: logoAtio},
        { id: 4, name:"Audi", img: logoAudi},
        { id: 5, name:"Club de Golf", img: logoClub},
        { id: 6, name:"DHL", img: logoDhl},
        { id: 7, name:"Facebook", img: logoFace},
        { id: 8, name:"Ford", img: logoFord},
        { id: 9, name:"General Motors", img: logoGen},
        { id: 10, name:"Google", img: logoGoo},
        { id: 11, name:"Hella", img: logoHella},
        { id: 12, name:"Iyuno", img: logoIyun},
        { id: 13, name:"JpMorgan", img: logoJpMor},
        { id: 14, name:"LEGO", img: logoLego},
        { id: 15, name:"Lockton", img: logoLock},
        { id: 16, name:"Netflix", img: logoNetfl},
        { id: 17, name:"NU", img: logoNu},
        { id: 18, name:"Truper", img: logoTrup},
        { id: 19, name:"Unifin", img: logoUnifi},
        { id: 20, name:"Viva", img: logoViv},

    ];

    return (
        <section className="clients">
            <h2>Empresas que confían en nosotros</h2>
            <div className="clients-grid">
                {clientLogos.map((client) => (
                    <motion.div
                    key={client.id} 
            className="client-logo-item"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: client.id * 0.1 }}
            >
                <img src={client.img} alt={`Logo ${client.name}`} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}