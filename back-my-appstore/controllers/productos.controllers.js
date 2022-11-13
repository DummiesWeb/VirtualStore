import Producto  from "../models/productos.js";

export const getProductos = async (req, res)=>{
  
    try {
        const productos = await Producto.find({});
        return res.json(productos);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }

    
} 

export const createProducto= async (req, res)=> {
    try {
        const { nombre, descripcion, precio, stock } = req.body;
        let img = null;
        const newProducto= new Producto({nombre, descripcion, precio, stock});
        await newProducto.save();
        return res.json(newProducto);
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
        
    }
          
}
export const updateProducto= async (req, res)=> {

    try {
        
        const { id } = req.params;
        const updatedProducto = await Producto.findByIdAndUpdate(
            id,
            { $set: req.body },
            {
              new: true,
            }
          );
          return res.json(updatedProducto);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const removeProducto= async (req, res)=> {
    try {
        const { id } = req.params;
        const producto = await Producto.findByIdAndDelete(id);
        if (!producto) return res.sendStatus(404);
        return res.sendStatus(204);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }


};

export const getproducto= async(req, res)=> {

    try {
        const { id } = req.params;
        const producto = await Producto.findById(id);
        if (!producto) return res.sendStatus(404);
        return res.json(producto);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};
