import { storageService } from "./async-storage.service"
import { httpService } from "./http.service"


const STORAGE_KEY = 'fiver-users'
const STORAGE_LOGGEDIN_KEY = 'fiver-logged-user'

export const userService = {
    login,
    logout,
    signup,
    getById,
    getLoggedUser,
    update,
}

async function login(credentials) {
    try {
        const user = await httpService.post('auth/login', credentials)
        _setLoggedinUser(user)
        return user
    } catch (err) {
        console.log(err);
    }

}
async function logout() {
    const user = _setLoggedinUser(null)
    return user
}


async function signup(userInfo) {
    const newUser = await httpService.post('auth/signup', userInfo)
    _setLoggedinUser(newUser)
    return newUser
}

async function getById(userId) {

}

async function update(userToUpdate) {
    const updatedUser = await httpService.put(`user/${userToUpdate._id}`, userToUpdate)
    _setLoggedinUser(updatedUser)
    return updatedUser
}


function getLoggedUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_LOGGEDIN_KEY))
}

function _setLoggedinUser(user) {
    sessionStorage.setItem(STORAGE_LOGGEDIN_KEY, JSON.stringify(user))
    return user
}