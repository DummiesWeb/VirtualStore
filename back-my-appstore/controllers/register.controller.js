import Usuario from "../models/user.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
    const { nombre, correo, contraseña } = req.body;
  
    Usuario.findOne({ correo }).then((usuario) => {
      if (usuario) {
        return res.json({ mensaje: "Ya existe un usuario con ese correo" });
      } else if (!nombre || !correo || !contraseña) {
        return res.json({ mensaje: "Falta el nombre / correo / contraseña" });
      } else {
        bcrypt.hash(contraseña, 10, (error, contraseñaHasheada) => {
          if (error) res.json({ error });
          else {
            const nuevoUsuario = new Usuario({
              nombre,
              correo,
              contraseña: contraseñaHasheada,
            });
  
            nuevoUsuario
              .save()
              .then((usuario) => {
                res.json({ mensaje: "Usuario creado correctamente", usuario });
              })
              .catch((error) => console.error(error));
          }
        });
      }
    });
  };
  
 
  