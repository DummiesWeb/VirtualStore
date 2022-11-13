import Venta from "../models/ventas.js";

export const getVentas = async (req, res)=> {

    try {
        const ventas = await Venta.find({});
        return res.json(ventas);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }


};

export const createVenta= async (req, res)=>{

    try {
        const { nombre, fecha, valor} = req.body;
        const newVenta= new Venta({nombre, fecha, valor});
        await newVenta.save();
        return res.json(newVenta);
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
        
    }

}
export const deleteVenta= async(req, res)=>{

    try {
        const { id } = req.params;
        const venta = await Venta.findByIdAndDelete(id);
        if (!venta) return res.sendStatus(404);
        return res.sendStatus(204);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};

