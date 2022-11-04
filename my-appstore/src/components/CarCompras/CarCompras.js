import React from 'react';
import styles from './CarCompras.module.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const CarCompras = () =>{





return (
  <div className={styles.CarCompras}>
      <div>
           <h3> Productos agregados al carrito</h3>   
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Valor</th>
                    <th>cantidad</th>
                    <th>total</th>
                  </tr>
                </thead>
                <tbody>
                          <tr>
                            <td>Cerveza Duff</td>
                            <td>4</td>
                            <td>5</td>
                            <td>20  us$</td>
                          </tr>
                          <tr>
                            <td>Cereal Krusty</td>
                            <td>5</td>
                            <td>1</td>
                            <td>5 us$</td>
                          </tr>
                          <tr>
                            <td>Buzz cola</td>
                            <td>3</td>
                            <td>2</td>
                            <td>6 us$</td>
                          </tr>
                </tbody>
                <tfoot>
        <tr>
        <th scope="row"></th>
            
            <td></td>
            <th scope="row">Totals</th>
            <td>31  us$</td>
        </tr>
    </tfoot>
     </Table>
              
    </div>
    <div>
    <Button variant="outline-success mb-3"  onClick={
      ()=>{
      alert("Compra realizada exitosamente")

      window.location.href="/ListaProductos"
    }}
        >Finalizar compra</Button>{"  "}
        <Button variant="outline-danger mb-3 " onClick={
         ()=>{
          alert("su compra ha sido cancelada")
          window.location.href="/ListaProductos"
         }
        }
         >Cancelar</Button>
    </div>
                                               
</div>

);
}
export default CarCompras;
