import 'dotenv/config';
import app from './src/app.js';

// Importaciones de express y cors pasaron a app.js
// junto con la configuración de las rutas y middlewares.

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Servidor corriendo en: http://localhost:${PORT}`));