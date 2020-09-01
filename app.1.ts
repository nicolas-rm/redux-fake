
// Actiones
// interface. regla que un objeto debe de cumplir
interface Action {
    type: string;
    payload?: any;
}

// Reducer(oldstate, action)
// return any
function reducer(state = 10, action: Action) {
    // if (action.type === 'INCREMENTAR') {
    //     return state += 1;
    // }
    // return state;


    // Usualmente se utiliza un switch
    switch (action.type) {
        case 'INCREMENTAR':
            return state += 1;

        case 'DECREMENTAR':
            return state -= 1;

        case 'MULTIPLICAR':
            return state * action.payload;

        case 'DIVIDIR':
            return state / action.payload;

        default:
            return state;
    }

}

// Action
const incrementadorAction: Action = {
    type: 'INCREMENTAR'
}

const decrementadorAction: Action = {
    type: 'DECREMENTAR'
}

const multiplicadorAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
}

const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 2
}

// Reducer
console.log(reducer(10, dividirAction));