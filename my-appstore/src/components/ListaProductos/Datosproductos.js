import Duff from '../../img/Duff.jpg';
import Buzzcola from '../../img/Buzzcola.jpg';
import cereal_Krusty from '../../img/cereal_Krusty.png';
import Rosquillas from '../../img/Rosquillas.jpg';
import Squishee from '../../img/Squishee.png';
import Radioactiveman from '../../img/Radioactiveman.jpg';
import { v4 as uuidv4 } from 'uuid';

export default[
    {
        id:uuidv4(),
        "img":Duff,
        "nombre":"Cerveza Duff",
        "descripcion":"cerveza Duff version ligera",
        "precio":4,
        "stock":12
    },
    {
        id:uuidv4(),
        "img":Buzzcola,
        "nombre":"Buzzcola",
        "descripcion":"Esta utiliza el lema Más azúcar, más cafeína, parodiando a Jolt Cola",
        "precio":3,
        "stock":6
    },
    {
        id:uuidv4(),
        "img":cereal_Krusty,
        "nombre":"Cereal Krusty",
        "descripcion":"clásico cereal para desayuno, con malvaviscos u otros agregados.",
        "precio":5,
        "stock":8
    },
    {
        id:uuidv4(),
        "img":Rosquillas,
        "nombre":"Rosquillas",
        "descripcion":"bizcocho con glaseado de fresa y chispas de colores",
        "precio":1.5,
        "stock":11
    },
    {
        id:uuidv4(),
        "img":Squishee,
        "nombre":"Squishee",
        "descripcion":"batido con sabor blue, red, lime green, Chutney, Wheatgrass",
        "precio":2,
        "stock":10
    },
    {
        id:uuidv4(),
        "img":Radioactiveman,
        "nombre":"Radio active man",
        "descripcion":" Comic edición especial del hombre Radioactivo",
        "precio":3,
        "stock":5
    }
]
