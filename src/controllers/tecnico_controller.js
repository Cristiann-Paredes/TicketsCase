
import Tecnico from '../models/tecnico_model.js';

// Obtener todos los técnicos
export const getTecnicos = async (_req, res) => {
    try {
        const tecnicos = await Tecnico.find();
        res.json(tecnicos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo técnico
export const createTecnico = async (req, res) => {
    const { id, nombre, apellido, cedula, fecha_nacimiento, genero, ciudad, direccion, telefono, email } = req.body;
    try {
        const newTecnico = new Tecnico({ id, nombre, apellido, cedula, fecha_nacimiento, genero, ciudad, direccion, telefono, email });
        const savedTecnico = await newTecnico.save();
        res.status(201).json(savedTecnico);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un técnico
export const updateTecnico = async (req, res) => {
    console.log('okk');
    
  const { id } = req.params;
    const { nombre, apellido, cedula, fecha_nacimiento, genero, ciudad, direccion, telefono, email } = req.body;
    try {
        const updatedTecnico = await Tecnico.findByIdAndUpdate(id, { nombre, apellido, cedula, fecha_nacimiento, genero, ciudad, direccion, telefono, email }, { new: true });
        if (updatedTecnico) {
            res.json(updatedTecnico);
        } else {
            res.status(404).json({ message: "Técnico no encontrado" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Eliminar un técnico
export const deleteTecnico = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTecnico = await Tecnico.findByIdAndDelete(id);
        if (deletedTecnico) {
            res.json({ message: "Técnico eliminado correctamente" });
        } else {
            res.status(404).json({ message: "Técnico no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
