// Requerir los módulos
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


// Importar las rutas para cada módulo del sistema

import routerUsuarios from './routers/usuario_routes.js';
import routerTecnicos from './routers/tecnico_routes.js';
import routerTickets from './routers/ticket_routes.js';
import routerClientes from './routers/clientes_routes.js';



// Inicializaciones
const app = express();
dotenv.config();

// Configuraciones
app.set('port', process.env.PORT || 3000);
app.use(cors());

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/usuarios', routerUsuarios);
app.use('/api/tecnicos', routerTecnicos);
app.use('/api/tickets', routerTickets);
app.use('/api/clientes', routerClientes);


// Manejo de una ruta que no sea encontrada
app.use((req, res) => res.status(404).send("Endpoint no encontrado - 404"));

// Exportar la instancia de express por medio de app
export default app;



