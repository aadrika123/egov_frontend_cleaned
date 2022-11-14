//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 19 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - DeleteUderRole
//    DESCRIPTION - DeleteUderRole
//////////////////////////////////////////////////////////////////////////////////////
import axios from 'axios'
import React from 'react'

function DeleteUderRole(props) {

    const closeDialoge = ()=>{
        props.closeDialoge()
    }
    const refetchListData = () => {
        props.refetchListData()
    }

    let token = JSON.parse(window.localStorage.getItem('token'))
    const header = {
        headers:
        {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        }
    }

    const deleteBtn = () => {
        // console.log("deleted..", props?.data.id)
        axios.delete(`http://192.168.0.166/api/delete-role/${props?.data.id}`,header)
            .then(function (res) {
                // console.log("after deleted..", res.data.status)
                if(res.data.status){
                    console.log(res.data.message)
                    closeDialoge()
                    refetchListData() 
                }else if(!res.data.status){
                    console.log(res.data.message)
                    closeDialoge()
                    refetchListData() 
                }
            })
            .catch(function (error) {
                console.log("Error :- ", error)
            })
    }

    // console.log("Data in Delete Page", props.data)

    return (
        <>
            <div className='mb-5 font-medium text-xl'>Do you want to delete  ?</div>
            <button onClick={deleteBtn} className='bg-red-400 hover:bg-red-500 mr-2 px-5 py-2 border border-black font-medium text-xl rounded-sm'>Delete</button>
            <button onClick={closeDialoge} className='bg-blue-400 hover:bg-blue-500 ml-2 px-5 py-2 border border-black font-medium text-xl rounded-sm'>Cancel</button>
        </>
    )
}

export default DeleteUderRole

/*
Exported to -
1. PopUpModel.js
*/