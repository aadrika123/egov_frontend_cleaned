//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 10 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Water 
//    DESCRIPTION - Water Final
//////////////////////////////////////////////////////////////////////////////////////
import { useEffect, useState } from 'react'
import Td from './Td'
import Th from './Th'
import propImage from './prop.jpg'
import axios from 'axios'
import DetailsCard from './DetailsCard'
function DetailsTable(data) {


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
            <DetailsCard applicationData={applicationData} />
        </>
    )
}

export default DetailsTable
/**
 * Exported to :
 * 1. DetailsTabs component
 */