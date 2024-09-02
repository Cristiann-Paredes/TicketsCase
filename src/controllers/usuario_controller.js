// Importa las librerías necesarias
import Usuario from '../models/usuario_model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Login de usuario
export const loginUsuario = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Verifica si el usuario existe
        const usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(401).json({ message: "Usuario o contraseña incorrectos." });
        }

        // Compara la contraseña proporcionada con la almacenada en la base de datos
        const passwordMatch = await bcrypt.compare(password, usuario.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Usuario o contraseña incorrectos." });
        }

        // Si la contraseña es correcta, genera un token JWT
        const token = jwt.sign(
            { id: usuario.id, email: usuario.email },
            process.env.JWT_SECRET || 'your_jwt_secret_key', // Asegúrate de usar una clave secreta segura
            { expiresIn: '1h' } // Configura la duración del token
        );

        // Devuelve el token al cliente
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};





// Obtener todos los usuarios
export const getUsuarios = async (_req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




// Crear un nuevo usuario
export const createUsuario = async (req, res) => {
    const { email, password, nombre, apellido } = req.body;

    try {
        // Verificar si el usuario ya existe
        const usuarioExistente = await Usuario.findOne({ email });
        if (usuarioExistente) {
            return res.status(400).json({ message: "El usuario ya existe" });
        }

        // Hashear la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Crear un nuevo usuario
        const nuevoUsuario = new Usuario({
            nombre,
            apellido,
            email,
            password: hashedPassword
        });

        // Guardar el usuario en la base de datos
        const usuarioGuardado = await nuevoUsuario.save();

        // Devolver el usuario creado (sin la contraseña)
        res.status(201).json({
            id: usuarioGuardado._id,
            nombre: usuarioGuardado.nombre,
            apellido: usuarioGuardado.apellido,
            email: usuarioGuardado.email
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};




// Actualizar un usuario existente
export const updateUsuario = async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, email, password } = req.body;

    try {
        // Hashear la nueva contraseña si se proporciona
        let hashedPassword = password;
        if (password) {
            const salt = await bcrypt.genSalt(10);
            hashedPassword = await bcrypt.hash(password, salt);
        }

        // Actualizar el usuario en la base de datos
        const usuarioActualizado = await Usuario.findByIdAndUpdate(
            id,
            { nombre, apellido, email, password: hashedPassword },
            { new: true }
        );

        if (!usuarioActualizado) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.json(usuarioActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};




// Eliminar un usuario
export const deleteUsuario = async (req, res) => {
    const { id } = req.params;

    try {
        const usuarioEliminado = await Usuario.findByIdAndDelete(id);
        if (!usuarioEliminado) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
