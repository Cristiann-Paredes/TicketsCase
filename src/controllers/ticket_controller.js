import Ticket from '../models/ticket_model.js';



// Obtener todos los tickets
export const getTickets = async (_req, res) => {
    try {
        const tickets = await Ticket.find();
        res.json(tickets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




// Crear un nuevo ticket
export const createTicket = async (req, res) => {
    const { id, codigo, descripcion, id_tecnico, id_cliente } = req.body;
    try {
        const newTicket = new Ticket({ id, codigo, descripcion, id_tecnico, id_cliente });
        const savedTicket = await newTicket.save();
        res.status(201).json(savedTicket);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};




// Actualizar un ticket
export const updateTicket = async (req, res) => {
    const { id } = req.params;
    const { codigo, descripcion, id_tecnico, id_cliente } = req.body;
    try {
        const updatedTicket = await Ticket.findByIdAndUpdate(id, { codigo, descripcion, id_tecnico, id_cliente }, { new: true });
        if (updatedTicket) {
            res.json(updatedTicket);
        } else {
            res.status(404).json({ message: "Ticket no encontrado" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};




// Eliminar un ticket
export const deleteTicket = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTicket = await Ticket.findByIdAndDelete(id);
        if (deletedTicket) {
            res.json({ message: "Ticket eliminado correctamente" });
        } else {
            res.status(404).json({ message: "Ticket no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
