export const cartReducer = (state, action) => {
    switch (action.type) {
        case "Add_TO_CART":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
        case "REMOVE_FROM_CART":
            return { ...state, cart: state.cart.filter(c => c.id !== action.payload.id) }
        case 'CANGE_CART_QTY':
            return { ...state, cart: state.cart.filter(c => c.id === action.payload.id ? c.qty = action.payload.qty : c.qty) }



        default:
            return state;
    }
}