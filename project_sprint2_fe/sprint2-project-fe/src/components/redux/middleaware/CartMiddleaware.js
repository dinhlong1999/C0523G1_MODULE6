import * as cartService from "../../../service/cartService";
import * as userService from "../../../service/userService";
import {GET_ALL} from "../ActionsType";

export const getAll = (id) => async (dispatch) =>{
    const result = await cartService.getCartByUserId(id);
    dispatch({
        type: GET_ALL,
        payload:result.data
    })
    console.log(result.data)
}



