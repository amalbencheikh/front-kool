import {store} from "../../context/store";

export default function authHeader() {
    const state = store.getState()
    const jwtToken = state?.user?.jwtToken
    if (jwtToken) {
        return { Authorization: 'Bearer ' + jwtToken };
    } else {
        return {};
    }
}
