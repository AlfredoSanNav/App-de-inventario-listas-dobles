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

    buscar(codigo){
        if(this.inicio.codigo == codigo){
            console.log(this.inicio)
            return this.inicio
        } else {
            let aux = this.inicio
            while(aux.siguiente.codigo != codigo){
                aux = aux.siguiente
            }
            if(aux.siguiente == null){
                return null
            } else {
                console.log(aux.siguiente)
                return aux.siguiente
            }

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

    listarInverso(){
        if(this.inicio == null){
            console.log("La lista está vacía :(")
        }else{
            let aux = this.inicio
            while(aux.siguiente != null){
                aux = aux.siguiente
            }
            console.log(aux)
            while(aux.anterior != null){
                console.log(aux.anterior)
                aux = aux.anterior
            }
        }
    }
}