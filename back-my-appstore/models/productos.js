import  mongoose  from "mongoose";

const productoSchema =new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true,
    },
    descripcion:{
        type: String,
        required: true,
        trim: true,
    },
    precio:{
        type:Number,
        required: true,
      
    },
    stock:{
        type:Number,
        required: true,
      
    },
    image:{
        public_id: String,
        url: String,
    }
})

export default mongoose.model("Producto", productoSchema);