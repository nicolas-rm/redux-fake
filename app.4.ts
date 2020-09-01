import { createStore, Store } from 'redux';
import { contadorReducer } from './contador/contador.reducer';
import { incrementadorAction } from './contador/contador.actions';

// Creacion del store con redux
const store: Store = createStore(contadorReducer);

// Suscribirse a cualquier cambio que se genere en el state
store.subscribe(() => {
    console.log('Store State ', store.getState());
});

// Ejecutar el action para generar un nuevo estado
store.dispatch(incrementadorAction);
