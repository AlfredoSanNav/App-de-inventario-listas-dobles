import Producto from './producto.js'

export default class Inventario{
    constructor(){
        this.inicio = null
    }

    agregar(producto){
        if(this.inicio == null){
            this.inicio = producto
        } else {
            let aux = this.inicio
            while(aux.siguiente != null){
                aux = aux.siguiente
            }
            aux.siguiente = producto
            aux.siguiente.anterior = aux
        }
    }

    listar(){
        if(this.inicio == null){
            console.log("La lista está vacía :(")
        }else{
            let aux = this.inicio
            console.log(aux)
            while(aux.siguiente != null){
            console.log(aux.siguiente)
            aux = aux.siguiente
        }
        }
        
    }
}