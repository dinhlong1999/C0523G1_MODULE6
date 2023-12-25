import {Navigate, Outlet} from "react-router-dom";
import * as loginService from "../service/loginService"
const hasValueInAuthorProperty = (allowedRoles, currentRoles) => {
    for (let i = 0; i < allowedRoles.length; i++) {
        const valueToCheck = allowedRoles[i];
        for (let j = 0; j < currentRoles.length; j++) {
            const obj = currentRoles[j];
            if (obj.authority === valueToCheck) {
                return true;
            }
        }
    }
    return false;
}
const Authentication = ({ allowedRoles }) => {
    const jwtRole = loginService.getRole();
    let roles;
    if (jwtRole) {
        roles = jwtRole;
    }

    return roles && hasValueInAuthorProperty(allowedRoles, roles) ? (
        <Outlet />
    ) : <Navigate to={`/403`} />
}
export default Authentication;