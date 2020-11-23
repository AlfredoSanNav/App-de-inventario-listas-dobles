import Producto from './producto.js'
import Inventario from './inventario.js'

new class Main{
    constructor(){

    }

    test(){
        producto01 = new Producto(1000, "Coca de 3l", 1, 28)
        producto02 = new Producto(1001, "Sabritas 45 gr", 2, 12)

        inventario01= new Inventario()

        inventario01.agregar(producto01)
    }
}