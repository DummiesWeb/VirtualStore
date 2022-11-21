import Producto  from "../models/productos.js";
import { deleteImage, uploadImage } from "../libs/cloudinary.js";
import fs from "fs-extra";

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
        let image=null;

        if (req.files?.image) {
          const result = await uploadImage(req.files.image.tempFilePath);
          await fs.remove(req.files.image.tempFilePath);
          image = {
            url: result.secure_url,
            public_id: result.public_id,
          };
        }
        const newProducto= new Producto({nombre, descripcion, precio, stock, image});
        await newProducto.save();
        return res.json(newProducto);
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
        
    }
          
}
export const updateProducto= async (req, res)=> {

    try {
        
        const { id } = req.params;

       // if a new image is uploaded upload it to cloudinary
    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      await fs.remove(req.files.image.tempFilePath);
      // add the new image to the req.body
      req.body.image = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }

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

        
    if (producto && producto.image.public_id) {
      await deleteImage(producto.image.public_id);
    }
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
