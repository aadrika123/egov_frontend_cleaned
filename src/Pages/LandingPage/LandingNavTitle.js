//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 07 july 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - LandingNavTitle 
//    DESCRIPTION - LandingNavTitle Component
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'

function LandingNavTitle() {
    return (
        <>


            <div class=" flex bg-white h-32 w-auto px-0 py-0 drop-shadow-md ">
                <div class="flex-1 w-1/5 justify-right ">
                    <img src='https://massnvoid.in/clients_img/client6728.png' class='h-28 ' />
                </div>
                <div class="flex justify-left flex-1 w-4/5 mt-6">
                    <h1 class="lg:text-3xl font-bold text-green-700 drop-shadow-md sm:text-lg "> JUIDCO (JHARKHAND URBAN INFRASTRUCTURE DEVELOPMENT COMPANY )</h1>
                    {/* <h1 class="lg:text-lg font-bold text-green-700 drop-shadow-md sm:text-lg ">झारखंड अर्बन इंफ्रास्ट्रक्चर डेवलपमेंट कंपनी</h1> */}
                </div>
            </div>

        </>
    )
}

export default LandingNavTitle
/**
 * Exported to :
 * 1. LandingPage
 * 
 * 
 */