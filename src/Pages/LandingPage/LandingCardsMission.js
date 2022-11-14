//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 07 july 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - LandingCardsMission 
//    DESCRIPTION - LandingCardsMission Component
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import GradeIcon from '@mui/icons-material/Grade';
function LandingCardsMission() {
    return (
        <div class='flex items-center'>
            <div class=" max-w-sm bg-grey-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700    mt-8 ml-12">
                <div class="flex flex-col items-center pb-8 h-40 px-4 pt-4">
                    <RemoveRedEyeIcon />
                    <h5 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">Vission & Mission</h5>
                    <h5 class="mb-1 text-sm  text-gray-900 dark:text-white">The vision of JUIDCO is to become an organization of excellence...</h5>
                </div>
            </div>
            <div class="  max-w-sm bg-grey-500 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700    mt-8 ml-12">
                <div class="flex flex-col items-center pb-8 h-40 px-4 pt-4">
                    <RemoveRedEyeIcon />
                    <h5 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">Objectives</h5>
                    <h5 class="mb-1 text-sm  text-gray-900 dark:text-white">To construct, execute, carry out, equip, improve, alter, develop, decorate, maintain,...</h5>
                </div>
            </div>
            <div class="  max-w-sm bg-grey-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700    mt-8 ml-12">
                <div class="flex flex-col items-center pb-8 h-40 px-4 pt-4">
                    <GradeIcon />
                    <h5 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">Major Achivements</h5>
                    <h5 class="mb-1 text-sm  text-gray-900 dark:text-white">Centrally sponsored schemes and externally aided programs including...</h5>
                </div>
            </div>
        </div>
    )
}

export default LandingCardsMission
/**
 * Exported to :
 * 1. LandingPage
 * 
 * 
 */