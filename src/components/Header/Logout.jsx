import React ,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {logoutUser} from "../../services/user/authService.js"
import {logoutAdmin} from "../../services/admin/authService.js"
import {userLogout} from "../../store/authSlice.js"
import {adminLogout} from "../../store/adminAuthSlice.js"
import {getCurrentUser} from "../../services/user/authService.js"


const LogoutBtn = () => { 
    const dispatch = useDispatch();
    const user = useSelector((state)=>state.auth.status);
    const admin = useSelector((state)=>state.adminAuth.status);

    
    const handleLogout = async() => {
        const user = await getCurrentUser();
        console.log(user)

        if(user){
            await logoutUser()
           
                dispatch(userLogout())
        
            
        }
        if(admin){
            await logoutAdmin()
            dispatch(adminLogout());
        }
    }
    return (
        <>
        <button 
        onClick={handleLogout}
        className='bg-purple-900 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition'>
            Logout
            </button>
        </>
    )
}

export default LogoutBtn;
