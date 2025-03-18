import API from "../../utils/axiosInstance";

const getUserWishlist = async () => {
    try {
        const res = await API.get('users/getUserWishlist');
        return res.data;
    } catch (error) {
        return error.response.data;
    }
}

const addToWishlist = async (productId) => {
    try {
        const res = await API.post('users/addToWishlist', { productId });
        return res.data;
    } catch (error) {
        return error.response.data;
    }
}

const removeFromWishlist = async (productId) => {
    try {
        const res = await API.delete('users/removeFromWishlist',{productId} );
        return res.data;
    } catch (error) {
        return error.response.data;
    }
}
const clearWishlist = async () => {
    try {
        const res = await API.delete('users/clearWishlist');
        return res.data;
    } catch (error) {
        return error.response.data;
    }
}
export {
    getUserWishlist,
    addToWishlist,
    removeFromWishlist,
    clearWishlist
}
