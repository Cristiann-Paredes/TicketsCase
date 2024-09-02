import { Router } from 'express';
import { getClientes, createCliente, updateCliente, deleteCliente } from '../controllers/clientes_controller.js';

const router = Router();

// Obtener todos los clientes
router.get('/', getClientes);

// Crear un nuevo cliente
router.post('/', createCliente);

// Actualizar un cliente por ID
router.put('/:id', updateCliente);

// Eliminar un cliente por ID
router.delete('/:id', deleteCliente);

export default router;
