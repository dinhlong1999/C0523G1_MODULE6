import {GET_USER} from "../ActionsType";

export const UserReducer = (user ={},action) => {
  const {type,payload} = action;
  switch (type) {
      case GET_USER:
          console.log(payload)
          return payload;

      default:
          return user
  }
}