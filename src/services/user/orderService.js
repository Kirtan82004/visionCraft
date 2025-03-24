import API from "../../utils/axiosInstance";

const placeOrder = async (orderData) => {
    try {
        const res = await API.post('users/placeOrder', orderData);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
}
const getOrderHistory = async () => {
    try {
        const res = await API.get('users/getOrderHistory');
        return res.data;
    } catch (error) {
        return error.response.data;
    }
}
const getOrderDetails = async (orderId) => {
    try {
        const res = await API.get(`users/getOrderDetails/${orderId}`);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
}
const cancelOrder = async (orderId) => {
    try {
        const res = await API.delete(`users/cancelOrder/${orderId}`);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
}
export {
    placeOrder,
    getOrderHistory,
    getOrderDetails,
    cancelOrder
};