//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 16 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - 
//    DESCRIPTION -
//////////////////////////////////////////////////////////////////////////////////////
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TiArrowBack } from 'react-icons/ti';
import PaymentApiList from './PaymentApiList';


function ViewDetails(props) {
    const [bgColor, setBgcColor] = useState("red")
    const [fetchedData, setFetchedData] = useState()

    const { getPaymentByid } = PaymentApiList();



    const bearer = JSON.parse(window.localStorage.getItem('token'))
    const header = {
        headers: {
            Authorization: `Bearer ${bearer}`,
            Accept: 'application/json',
        }
    }

    useEffect(() => {
        axios.get(`${getPaymentByid}/${props.btnId}`, header)
            .then(function (response) {
                console.log("Data fetched ......", response.data.data);
                setFetchedData(response.data.data)
            })
            .catch(function (response) {
                console.log("Failed to fetch", response);
            });
    }, [props.btnId]);

    useEffect(() => {
        if (fetchedData?.payment_status === 'Complated') {
            setBgcColor("green")
        } else if (fetchedData?.payment_status === 'Processing') {
            setBgcColor("blue")
        } else if (fetchedData?.payment_status === 'Hold') {
            setBgcColor("yellow")
        } else if (fetchedData?.payment_status === 'Failed') {
            setBgcColor("red")
        } else if (fetchedData?.payment_status === 'Cancel') {
            setBgcColor("red")
        } else {
            setBgcColor("pink")
        }
    }, [fetchedData?.payment_status])

    // console.log("DATA---", fetchedData)
    // return


    console.log("Button ID in Details Page : -- ", props.btnId)
    console.log("Color is", bgColor)

    const handleBackBtn = () => {
        props.backBtn();
    }
    // console.log("data in view page", props.viewData)

    return (
        <>
            <div className={`mx-5 border shadow-lg bg-${bgColor}-50`}>
                <div className={`p-2 bg-${bgColor}-400 shadow-lg`}>
                    <div className='grid grid-cols-2 '>
                        <div className='col-span-1 text-xl font-semibold'>Payment Details</div>
                        <div className='col-span-1 justify-self-end'><button onClick={handleBackBtn} className='bg-blue-600 hover:bg-blue-500 font-semibold text-white px-5 pl-2 py-1 shadow-lg rounded'><span className='inline-block'><TiArrowBack /></span> Back</button></div>
                    </div>
                </div>
                <div className='p-5 '>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-5'>
                            <h1 className='font-semibold'>Payment Details</h1>
                            {fetchedData && <div className='space-y-1 ml-5 text-gray-700'>
                                <div><span className='font-semibold'>Amount </span> {fetchedData?.amount} </div>
                                <div><span className='font-semibold'>Payment Status </span> {fetchedData?.payment_status} </div>
                                <div><span className='font-semibold'>Order Id </span> {fetchedData?.order_id} </div>
                                <div><span className='font-semibold'>Payment Id </span> {fetchedData?.payment_id} </div>
                                <div><span className='font-semibold'>Payment Method </span> Online </div>
                            </div>}
                        </div>
                        <div className='col-span-5'>
                            <h1 className='font-semibold'>User Details</h1>
                            <div className='space-y-1 ml-5 text-gray-700'>
                                <div><span className='font-semibold'>Paid For </span> {fetchedData?.module} </div>
                                <div><span className='font-semibold'>Name </span> {fetchedData?.name} </div>
                                <div><span className='font-semibold'>Email </span> {fetchedData?.email} </div>
                                <div><span className='font-semibold'>Phone </span> {fetchedData?.phone} </div>
                                <div><span className='font-semibold'>Payment Date </span> {fetchedData?.payment_date} </div>
                            </div>
                        </div>
                        <div className='col-span-2 justify-self-center'>
                            <button className='bg-gray-100 hover:bg-gray-300 border border-black px-3 py-1 shadow-lg rounded-sm'> Issue Refund</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewDetails