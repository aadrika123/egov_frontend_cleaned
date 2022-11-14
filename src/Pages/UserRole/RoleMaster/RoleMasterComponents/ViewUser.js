//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 19 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - ViewUser
//    DESCRIPTION - ViewUser
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'

function ViewUser(props) {

    const data = props.data;

    const closeDialoge = () => {
        props.closeDialoge()
    }

    return (
        <>
            <div>

                Role Name : {data?.role_name} <br />
                Role Description : {data?.role_description} <br />
                ULB Name : {data?.ulb_name} <br />
                <div>
                    <button onClick={closeDialoge} className='bg-blue-500 font-medium text-white tracking-wide px-2 py-1 rounded-sm outline-red-400 shadow-2xl shadow-red-400'>Close</button>
                </div>
            </div>
        </>
    )
}

export default ViewUser

/*
Exported to -
1. PopUpModel.js
*/