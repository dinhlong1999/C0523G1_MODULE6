import * as userService from "../../../service/userService";
import {GET_USER} from "../ActionsType";


export const getUser = (id) => async (dispatch) => {
    const result = await userService.getUserByAccountId(id)
    dispatch({
        type: GET_USER,
        payload:result.data
    })
    console.log(result.data)
}