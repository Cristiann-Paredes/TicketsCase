import { Schema, model } from 'mongoose';

const TicketSchema = new Schema({
    id: { type: Number, required: true, maxlength: 11  },
    codigo: { type: Number, required: true },
    descripcion: { type: String, required: true, maxlength: 20 },
    id_tecnico: { type: Number, required: true, maxlength: 20  },
    id_cliente: { type: Number, required: true, maxlength: 20  }
});

export default model('Ticket', TicketSchema);
