import API from "../../utils/axiosInstance";

const registerAdmin = async (formData) => {
    try {
        const res = await API.post('admin/register', formData);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
}
const loginAdmin = async (formData) => {
    try {
        const res = await API.post('admin/login', formData);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
}
const logoutAdmin = async () => {
    try {
        const res = await API.get('admin/logout');
        return res.data;
    } catch (error) {
        return error.response.data;
    }
}
const getCurrentAdmin = async () => {
    try {
        const res = await API.get('admin/current-Admin');
        return res.data;
    } catch (error) {
        return error.response.data;
    }
}
const UpdateAccountDetails = async (formData) => {
    try {
        const res = await API.put('admin/update-Account',formData);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
}
const changeCurrentPassword = async (formData) => {
    try {
        const res = await API.put('admin/change-Password', formData);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
}
export {
    registerAdmin,
    loginAdmin,
    logoutAdmin,
    changeCurrentPassword,
    UpdateAccountDetails,
    getCurrentAdmin
}