import Producto from './producto.js'
import Inventario from './inventario.js'

class Main{
    constructor(){

    }

    test(){
        let producto01 = new Producto(1000, "Coca de 3l", 1, 28)
        let producto02 = new Producto(1001, "Sabritas 45 gr", 2, 12)

        let inventario01= new Inventario()

        inventario01.agregar(producto01)
        inventario01.agregar(producto02)
        inventario01.listar()
    }
}

let app = new Main()
app.test()