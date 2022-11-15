import  mongoose  from "mongoose";

const carritoSchema = new mongoose.Schema({

    nombre_producto:{
        type: String,
        required: true,
        trim: true,
    },
    valor:{
        type: Number,
        required: true,
    },
    cantidad:{
        type: Number,
        required: true,
    },
    total:{
        type: Number,
        required: false,
    },
})
export default mongoose.model('Carrito', carritoSchema);