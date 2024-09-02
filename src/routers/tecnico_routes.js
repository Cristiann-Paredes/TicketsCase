import { Router } from 'express';
import { getTecnicos, createTecnico, updateTecnico, deleteTecnico } from '../controllers/tecnico_controller.js';

const router = Router();

// Obtener todos los técnicos
router.get('/', getTecnicos);

// Crear un nuevo técnico
router.post('/', createTecnico);

// Actualizar un técnico por ID
router.put('/:id', updateTecnico);

// Eliminar un técnico por ID
router.delete('/:id', deleteTecnico); 

export default router;


