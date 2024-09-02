import { Router } from 'express';
import { getTickets, createTicket, updateTicket, deleteTicket } from '../controllers/ticket_controller.js';

const router = Router();

// Obtener todos los tickets
router.get('/', getTickets); 

// Crear un nuevo ticket
router.post('/', createTicket); 

// Actualizar un ticket por ID
router.put('/:id', updateTicket);  

// Eliminar un ticket por ID
router.delete('/:id', deleteTicket);    

export default router;
