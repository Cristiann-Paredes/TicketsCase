import Cliente from '../models/clientes_mode.js';


// Obtener todos los clientes
export const getClientes = async (_req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// Crear un nuevo cliente
export const createCliente = async (req, res) => {
    const { id, nombre, apellido, cedula, fecha_nacimiento, ciudad, direccion, telefono, email, dependencia } = req.body;
    try {
        const newCliente = new Cliente({ id, nombre, apellido, cedula, fecha_nacimiento, ciudad, direccion, telefono, email, dependencia });
        const savedCliente = await newCliente.save();
        res.status(201).json(savedCliente);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



// Actualizar un cliente

export const updateCliente = async (req, res) => {
    console.log("ok")
    /*
    const { id } = req.params;
    const { nombre, apellido, cedula, fecha_nacimiento, ciudad, direccion, telefono, email, dependencia } = req.body;
    try {
        const updatedCliente = await Cliente.findOneAndUpdate({ id }, { nombre, apellido, cedula, fecha_nacimiento, ciudad, direccion, telefono, email, dependencia }, { new: true });
        if (updatedCliente) {
            res.json(updatedCliente);
        } else {
            res.status(404).json({ message: "Cliente no encontrado" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }*/
};




// Eliminar un cliente
export const deleteCliente = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCliente = await Cliente.findByIdAndDelete(id);
        if (deletedCliente) {
            res.json({ message: "Cliente eliminado correctamente" });
        } else {
            res.status(404).json({ message: "Cliente no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
