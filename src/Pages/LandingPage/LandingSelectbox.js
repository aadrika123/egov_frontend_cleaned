//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 07 july 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - LandingSelectbox 
//    DESCRIPTION - LandingSelectbox Component
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function LandingSelectbox(props) {
    const [dataSelect, setDataSelect] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3333/Select')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setDataSelect(response.data)
            })

    }, [])

    const handleChange = (e) => {

        props.fun(e.target.value)
        return
    }
    return (
        <>
            <div class="flex">

                <select
                    class=" flex-1 mb-7 p-1 form-select block w-2/3px-3 py-1.5 mt-5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"

                    onChange={handleChange}
                >
                    <option value={0}>SELECT YOUR ULB</option>
                    {dataSelect.map((items) => (
                        <option value={items.ulbid}>{items.header}</option>
                    ))}

                </select>


            </div>
        </>
    )
}

export default LandingSelectbox
/**
 * Exported to :
 * 1. LandingNavbar
 * 
 * 
 */