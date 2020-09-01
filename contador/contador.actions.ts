import { Action } from '../ngrx-fake/ngrx';

// Action

// Las acciones son fragmentos de codigos, en las  
// cuales viene el tipo de tarea ( accion ) que se realizara
// y los datos (payload - opcional) que necesitara.
export const incrementadorAction: Action = {
    type: 'INCREMENTAR'
}

export const decrementadorAction: Action = {
    type: 'DECREMENTAR'
}

export const multiplicadorAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
}

export const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 2
}

export const resetAction: Action = {
    type: 'RESET'
}