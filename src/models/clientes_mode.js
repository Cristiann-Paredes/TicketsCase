import { Schema, model } from 'mongoose';

const ClienteSchema = new Schema({
    
    id: { type: Number, required: true, unique: true, maxlength: 11  },
    cedula: { type: String, required: true, unique: true, maxlength: 20 },
    nombre: { type: String, required: true, maxlength: 20 },
    apellido: { type: String, required: true, maxlength: 20 },
    ciudad: { type: String, required: true, maxlength: 20 },
    email: { type: String, required: true, maxlength: 20 },
    direccion: { type: String, required: true, maxlength: 10 },
    telefono: { type: String, required: true, maxlength: 20 },
    fecha_nacimiento: { type: String, required: true, maxlength: 20 },
    dependencia:{ type: String, required: true, maxlength: 20 }
    
});

export default model('Cliente', ClienteSchema);
