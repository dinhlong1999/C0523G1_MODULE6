import {GET_ALL} from "../ActionsType";

export const CartReducer = (cart= [],action) => {
    const{type,payload} = action;
    switch (type) {
        case GET_ALL:
            console.log(payload);
            return payload;

        default:
            console.log(cart)
            return cart;
    }
}