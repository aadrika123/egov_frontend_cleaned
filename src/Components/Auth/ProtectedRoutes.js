import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { connect } from "react-redux";

function ProtectedRoutes(props) {

    // if(window.innerWidth<=500){
    //     // alert('mobile device entered')
    //     if (!props.navCloseStatus) {
    //         props.NAV_CLOSE()
    //         props.NAV_CLOSE_ORIGINAL_STATUS()
    //     }
       
    // }
    console.log('inside protected routes ....',props.isLoggedIn)
    // return props.isLoggedIn == true ? <Outlet /> : <Navigate to='/' />
}

//for redux
const mapStateToProps = (state) => {
    return {
        navCloseStatus: state.navCloseStatus,
        isLoggedIn: state.isLoggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        NAV_OPEN: (data2) => dispatch({ type: "NAV_OPEN" }),
        NAV_CLOSE: (data3) => dispatch({ type: "NAV_CLOSE" }),
        NAV_OPEN_ORIGINAL_STATUS: (data3) => dispatch({ type: "NAV_OPEN_ORIGINAL_STATUS" }),
        NAV_CLOSE_ORIGINAL_STATUS: (data3) => dispatch({ type: "NAV_CLOSE_ORIGINAL_STATUS" })
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoutes);

/**
 * Exported to :
 * 1. App.js
 * 
 */