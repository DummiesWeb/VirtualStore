import Carrito from "../models/carrito.js";

export const getCarrito =  async (req, res)=>{

    try {
        const carrito = await Carrito.find({});
        return res.json(carrito);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};

export const addCarrito= async (req, res)=> {
    try {
        const { nombre_producto, valor, cantidad, total } = req.body;
        const newCarrito= new Carrito({nombre_producto, valor, cantidad, total});
        await newCarrito.save();
        return res.json(newCarrito);
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
        
    }
};


export const vaciarCarrito=(req, res)=>res.send('vaciar carrito') ;
