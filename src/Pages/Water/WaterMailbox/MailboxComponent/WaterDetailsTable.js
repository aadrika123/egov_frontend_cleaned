//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 09 June 2022
//    Revision - 1
//    Project - rmcdmc
//    Component  - WaterDetailsTable
//    DESCRIPTION - WaterDetailsTable Component
//////////////////////////////////////////////////////////////////////////////////////
import { useEffect, useState } from 'react'
import Td from './Td'
import Th from './Th.js'
import propImage from './prop.jpg'
import axios from 'axios'
import WaterDetailsCard from './WaterDetailsCard'
import { baseUrl } from '../WaterBaseUrl'
function DetailsTable(data) {


    const [applicationData, setApplicationData] = useState({
        "id": 2,
        "saf_no": "0880155833",
        "owner_name": "Water Tax",
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
        axios.get(`${baseUrl}/applicationList/${data.id}`)
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
            <WaterDetailsCard applicationData={applicationData} />
        </>
    )
}

export default DetailsTable
/**
 * Exported to :
 * 1. WaterDetailsTabs component
 */