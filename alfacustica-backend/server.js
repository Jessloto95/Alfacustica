const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
 
app.use(cors());
app.use(express.json());

// Ruta de prueba para verificar la API

app.get('/api/test', (req, res) => {
    res.json({ message: "¡La API de Alfacustica está en línea y escuchando!"});
});

//Ruta para formulario
app.post('/api/contact', (req, res) => {
    const { name, email, projectType, message } = req.body;

    console.log("Datos recibidos del cliente:", { name, email, projectType, message});

    // Validacion de formulario
    if (!name || !email || !message) {
        return res.status(400).json({ error: "Por favor, llena los campos requeridos."});
    }

    //Respuesta del frontend
    res.status(200).json({ success: true, message: "Mensaje recibido correctamente en el servidor."});
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});