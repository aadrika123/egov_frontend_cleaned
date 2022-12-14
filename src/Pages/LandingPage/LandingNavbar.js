//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 07 july 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - LandingNavbar 
//    DESCRIPTION - LandingNavbar Component
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import LandingSelectbox from './LandingSelectbox'
// import { Link } from 'react-router-dom'
function LandingNavbar(props) {

    function select(id) {
        props.fun(id)
    }
    return (
        <>

            <nav class=" border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-800 bg-sky-600 ">
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jharkhand_Rajakiya_Chihna.svg/1200px-Jharkhand_Rajakiya_Chihna.svg.png" class="mr-3 h-9 sm:h-16" />
                  
                    <div class="flex md:order-2">

                        {/* <Link to="/"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">LOGIN</button></Link> */}

                        <button data-collapse-toggle="mobile-menu-4" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>

                    </div>
                    <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
                        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white">About</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white">Services</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <LandingSelectbox fun={select} />
                </div>
            </nav>

        </>
    )
}

export default LandingNavbar
/**
 * Exported to :
 * 1. LandingPage
 * 
 * 
 */