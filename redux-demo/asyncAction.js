const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const initState = {
    loading: false,
    user: [],
    errors: ""
}

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload : error
    }
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading : false,
                user: action.payload,
                errors : ''
            }
        case FETCH_USERS_FAILURE : 
            return{
                loading: false,
                user: [],
                errors : action.payload
            }
    }
}

 const fetchUsers = ()=> {
     return function(dispatch) {
         dispatch(fetchUsersRequest())
         axios.get('https://jsonplaceholder.typicode.com/users')
            .then( response => {
                const users = response.data;
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error.message))
            })
     }
 }

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers());