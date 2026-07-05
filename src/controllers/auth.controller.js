import jwt from 'jsonwebtoken';
import validateCredentials from '../services/auth.service.js';

console.log("auth controller cargado correctamente");

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email y contraseña son requeridos' });
        }; 

        const isValid = await validateCredentials(email, password);

        if (!isValid) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        console.log("Secret en Login:", process.env.JWT_SECRET);
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    };
};

export { login };
