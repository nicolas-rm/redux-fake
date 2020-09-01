import { Action, Reducer } from './ngrx-fake/ngrx';
import { contadorReducer } from './contador/contador.reducer';
import { incrementadorAction } from './contador/contador.actions';
// Store.
// Donde se almacena toda la informacion de 
// la aplicacion.


// 1.- Clase de tipo generica
// 
class Strore<T> {

    constructor(private reducer: Reducer<T>, private state: T) {

    }

    // 2.- Obtener El Estado.
    getState() {
        return this.state;
    }


    // 2.- Ejecutar Funciones, para la creacion de un nuevo estado.
    // recibe como argumentos (estadoActual(oldState) , action).
    dispatch(action: Action) {
        this.state = this.reducer(this.state, action);
    }
}

// No ejecuta la funcion contadorReducer, si no manda toda
// la definicion.
const store = new Strore(contadorReducer, 10); // 10

console.log(store.getState()); // 10

store.dispatch(incrementadorAction); // 11
store.dispatch(incrementadorAction); // 12
store.dispatch(incrementadorAction); // 13

console.log(store.getState()); // 13
