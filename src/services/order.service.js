import { storageService } from "./async-storage.service";
import { utilService } from "./util.service";
import { httpService } from "./http.service";

const STORAGE_KEY_USERS = 'fiver-users'
const STORAGE_KEY = 'orders'


export const orderService = {
    add,
    getOrder,
    query,
}


async function query(userId) {
    const orders = await httpService.get(`api/order/${userId}`)
    return orders
}


async function add(order) {
    const addedOrder = await httpService.post(`order/add`, order)
    console.log(addedOrder);
    return addedOrder
}


async function getOrder(orderId) {
    const order = await storageService.get(STORAGE_KEY, orderId)
    return order
}