import  mongoose  from "mongoose";

const ventaSchema = new mongoose.Schema({

nombre:{
    type: String,
    required: true,
    trim: true,
},
fecha:{
    type: String,
    required: true,
    trim: true,
},
valor:{
    type: Number,
    required: true,
   
},
total:{
    type: Number,
    required: false,
}

})

export default mongoose.model('Venta', ventaSchema);