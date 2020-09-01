// Actiones
// interface. regla que un objeto debe de cumplir

export interface Action {
    type: string;
    payload?: any;
}

// Interfas de tipo generico
export interface Reducer<T> {
    // STATE: debe de ser igual a lo que entra
    // y debe ser igual a lo que sale
    (state: T, acction: Action): T
}