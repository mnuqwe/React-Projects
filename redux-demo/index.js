// import redux from 'redux';
const redux = require('redux');
const reduxLogger = require('redux-logger')

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE"
const BUY_ICE_CREAM = "BUY_ICE_CREAM"

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}
function buyIceCream(){
    return {
        type: BUY_ICE_CREAM,
        info: 'first redux action'
    }
}

// (prevState, action) => newState

const initialCakeState = {
    noOfCakes : 10
}
const initialIceCreamState = {
    noOfIceCream : 10
}
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE: return{
//             ...state,
//             noOfCakes: state.noOfCakes - 1 
//         }
//         default: return state 
//     }
// }
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return{
            ...state,
            noOfCakes: state.noOfCakes - 1 
        }
        default: return state 
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM: return{
            ...state,
            noOfIceCream : state.noOfIceCream - 1 
        }
        default: return state 
    }
}

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));
console.log('Initial state' , store.getState());
const unSubscribe = store.subscribe(()=>{})
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
unSubscribe();