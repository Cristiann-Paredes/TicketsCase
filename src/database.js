import mongoose from 'mongoose';

// Permite que solo los campos definidos del schema sean almacenados en la BDD
mongoose.set('strictQuery', true);

// Crear una función llamada connection
const connection = async () => {
    try {
        // Establecer la conexión con la BDD
        const { connection } = await mongoose.connect(process.env.MONGODB_URI);
        // Presentar la conexión en la consola
        console.log(`Database is connected on ${connection.host} - ${connection.port}`);
    } catch (error) {
        // Capturar el error de la conexión
        console.log(error);
    }
};

// Exportar la función connection como exportación predeterminada
export default connection;
