import { ADD_TO_CART, DELETE_FROM_CART } from "../actions";

const cart = [];
const cartReducer = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case ADD_TO_CART:
            const exist = state.find(x => x.id === product.id)
            if (exist) {
                return state.map(x => x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
            } else {
                const product = action.payload;
                return [...state, { ...product, qty: 1, }]
            }

        case DELETE_FROM_CART:
            const isExist = state.find(x => x.id === product.id);
            if (isExist.qty === 1) {
                return state.filter(x => x.id !== isExist.id);
            } else {
                return state.map(x => x.id === product.id ? { ...x, qty: x.qty - 1 } : x);
            }

        default: return state
    }
}

export default cartReducer 