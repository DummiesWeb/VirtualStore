
import styles from './ListaVentas.module.css';
import Table from 'react-bootstrap/Table';


const ListaVentas = () => {

return(
  <div className={styles.ListaVentas}>
    
    <div>
           <h3>Lista de ventas</h3>   
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>fecha</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                          <tr>
                            <td>1</td>
                            <td>Homero Simpson</td>
                            <td>2022-11-20</td>
                            <td>100  us$</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Bart Simpson</td>
                            <td>2022-11-20</td>
                            <td>10 us$</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Bob Patiño</td>
                            <td>2022-11-20</td>
                            <td>15 us$</td>
                          </tr>
                           <tr>
                            <td>4</td>
                            <td>Rafa Gorgory</td>
                            <td>2022-11-20</td>
                            <td>12 us$</td>
                          </tr>
                
                </tbody>
                <tfoot>
        <tr>
        <th scope="row"></th>
            <td></td>
            <th scope="row">Totals</th>
            <td>137  us$</td>
        </tr>
    </tfoot>
              </Table>
              
              </div>
        
  </div>
);
}

export default ListaVentas;
