import { BUY_ICE_CREAM } from "./iceCreamType"

const initialState = {
    noOfIceCream : 20
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM :
            return {
                ...state,
                noOfIceCream : state.noOfIceCream - 1
            }
        default : return state;
    }
}

export default iceCreamReducer;