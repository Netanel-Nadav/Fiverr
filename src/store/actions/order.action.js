import {orderService} from '../../services/order.service'

export function loadOrders() {
    return async (dispatch) => {
        try {
            const orders = await orderService.query()
            const action = {type: 'SET_ORDERS', orders}
            dispatch(action)
        } catch (err) {
            console.log(err);
        }
    }
}