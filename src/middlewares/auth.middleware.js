import jwt from 'jsonwebtoken';

console.log("auth middleware cargado correctamente");

const authMiddleware = (req, res, next) => {
    try{
        const authHeader = req.headers.authorization;

        console.log("antes del isValid:", authHeader);
        if(!authHeader || !authHeader.startsWith('Bearer ')){
            return res.status(401).json({ message: 'No se proporcionó un token de autenticación' });
        }
        const token = authHeader.split (' ')[1];

        console.log("Secret en Middleware:", process.env.JWT_SECRET);
        console.log("Token recibido puro:", token);


        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    } catch (error) {
        return res.status(401).json({ message: 'Token inválido' });
    };
};
export { authMiddleware };