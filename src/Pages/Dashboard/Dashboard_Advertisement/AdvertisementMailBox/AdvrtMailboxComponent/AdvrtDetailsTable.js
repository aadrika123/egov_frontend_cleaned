//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 24-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - AdvrtDetailsTable
//    DESCRIPTION - AdvrtDetailsTable Component
//////////////////////////////////////////////////////////////////////////////////////



import { useEffect, useState } from 'react'
// import Td from './TradeTd.js'
// import Th from './TradeTh.js'
// import propImage from '../../../Components/MailboxComponent/prop.jpg'
import axios from 'axios'
import AdvrtDetailsCard from './AdvrtDetailsCard.js'

function AdvrtDetailsTable(data) {


    const [applicationData, setApplicationData] = useState({
        "id": 2,
        "saf_no": "0880155833",
        "owner_name": "Maddalena",
        "mobile": "2494499119",
        "property_type": "INDEPENDENT",
        "assessment_type": "Mutation",
        "ward_no": 2,
        "received_at": "5/27/2022"
    })

    useEffect(() => {
        fetchApplication() //fetching data of specific application
    }, [])

    const fetchApplication = () => {
        axios.get(`http://localhost:3001/applicationList/${data.id}`)
            .then(function (response) {
                setApplicationData(response.data)

            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
            });
    }

    return (
        <>
            <AdvrtDetailsCard applicationData={applicationData} />
        </>
    )
}

export default AdvrtDetailsTable