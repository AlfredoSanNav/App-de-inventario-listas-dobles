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
            aux.siguiente.anterior = aux
            aux.siguiente = nuevo
        }
    }

    listar(){
        aux = this.inicio
        while(aux.siguiente != null){
            console.log(aux)
            aux = aux.siguiente
        }
    }
}