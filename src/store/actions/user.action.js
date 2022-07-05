import { userService } from "../../services/user.service"


export function login(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.login(credentials)
            const action = {type: 'SET_USER', user}
            dispatch(action)
        } catch (err) {
            console.log(err);
        }
    }
}

export function logout() {
    return async (dispatch) => {
        try {
            const loggedoutUser = await userService.logout()
            const action = {type: 'SET_USER'}
            dispatch(action)
        } catch (err) {
            console.log(err);
        }
    }
}

export function signup(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.signup(credentials)
            const action = {type: 'SET_USER', user}
            dispatch(action)
        } catch (err) {
            console.log(err);
        }
    }
}


export function update(userToUpdate) {
    return async (dispatch) => {
        try {
            const updatedUser = await userService.update(userToUpdate)
            const action = {type: 'SET_USER', user: updatedUser}
            dispatch(action)
        } catch (err) {
            console.log(err);
        }
    }
}