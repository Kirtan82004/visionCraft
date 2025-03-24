import API from "../../utils/axiosInstance";

const getUserWishlist = async () => {
    try {
        const res = await API.get('users/getUserWishlist');
        return res.data;
    } catch (error) {
        return error.response.data;
    }
}

const addToWishlist = async (product) => {
    try {
        const res = await API.post('users/addToWishlist', product, { withCredentials: true });
        return res.data;
    } catch (error) {
        return error.response.data;
    }
}

const removeFromWishlist = async (product) => {
    try {
        const res = await API.delete('users/removeFromWishlist', {
            data: { product },
            withCredentials: true
        });
        return res.data;
    } catch (error) {
        console.error("Error removing from wishlist:", error.response?.data);
        return error.response?.data;
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
