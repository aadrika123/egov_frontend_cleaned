//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 07 july 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - LandingAbout 
//    DESCRIPTION - LandingAbout Component
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'

function LandingAbout() {
  return (
    <div>
      <div class=" lg:flex  bg-sky-50  border border-gray-200 shadow-lg dark:bg-sky-700 dark:border-gray-700 h-80 mt-4 pr-5">
        <div class='flex 1 w-1/4 '>
          <a href="#">
            <img class='drop-shadow-md border border-gray-200 shadow-lg h-64 w-64 ml-7 mt-7' src="https://www.marsconsultancy.com/wp-content/uploads/2021/11/WaterAMRUT_1.jpg" alt="" />
          </a>
        </div>

        <div class='justify-left lg: h-80 w-3/4 text-sm text-left mt-7 '>
          <p class='font-bold'>
            <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">About Us</h5>

            JUIDCO organization was formed on 19-11-2013 under The Companies Act, 1956 with its aims to Administer, Manage or Control works and conveniences of all kinds whether for any Government, Public Body, Local Authority, or any other company by itself or through any other agency or its individual.<br /><br />

            JUIDCO is dedicated to Public works, Government projects of all kinds and all other works of Urban Development and conveniences or other public or private liability. JUIDCO assists financially for starting, running, expanding, modernizing, shifting or otherwise and in finding markets for manufactured goods of Indian and Foreign origin and secure sound investments of foreign capital in Indian Undertakings and Enterprises.<br /><br />

            JUIDCO acts as advisors and/or consultants on all matters and problems relating to Urban and Town Planning, Administration, Management, Organization, Manufacture, Production, Storage, Process, Systems and Account, Training of personnel, Marketing, Distributing and selling methods and principles. JUIDCO is dedicated to engage and/or to avail the services of an individual, firm, body corporate or any other agency whether established in India or abroad.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LandingAbout
/**
 * Exported to :
 * 1. LandingPage
 * 
 * 
 */