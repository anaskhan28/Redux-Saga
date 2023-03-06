const redux = require('redux');

const createStore = redux.legacy_createStore

const CAKE_ORDERED = 'CAKE_ORDERED'
function orderCake() {
    return {
    type: CAKE_ORDERED,
    quantity: 1,
    }
}

const initialState = {
    numOfCakes: 10,
    anotherProperty: 0,
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                numOfCakes: state.numOfCakes-1,
            }
            default:
                return state
    }
}
const store = createStore(reducer)
console.log('Initial state', store.getState())

const unsubscribe = store.subscribe(() => console.log('update sate', store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()

