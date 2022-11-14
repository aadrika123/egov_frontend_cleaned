//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 27-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Dashboard_Advertisement
//    DESCRIPTION - Dashboard_Advertisement Component
//////////////////////////////////////////////////////////////////////////////////////


import React from 'react'
import AdvertisementMailbox from './AdvertisementMailBox/AdvertisementMailbox'
import AgencyApplication from './AgencyApplication'
import HoardingBoard from './HoardingBoard'
import PrivateLand from './PrivateLand'
import SelfAdvertisement from './SelfAdvertisement'

function Dashboard_Advertisement() {
  return (
    <>
      {/* Advertisement Dashboard */}
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6'>
        <h1 className='text-center text-2xl mt-4  font-semibold text-gray-600'>APPLY APPLICATION</h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-3 mt-8'>

        <div class="shadow-lg rounded-2xl w-64 p-2 py-2 bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div class="flex flex-col items-center justify-center">
            <div class="w-20 h-20  rounded-full relative border border-blue-00">
              <img src='https://img.freepik.com/free-vector/profile-interface-concept-illustration_114360-2850.jpg?w=740&t=st=1664274233~exp=1664274833~hmac=522e5bcf3834f2bc492b270610878ccef08f7fa09de3f086006b8055760a1833' className='rounded-full opacity-75' />
            </div>
            <p class="text-gray-500 text-md font-medium mb-1 mt-4">
              SELF ADVERTISEMENT
            </p>
            <p class="text-gray-400 text-center text-xs px-1 mb-2">
              You Can Get License To Advertise Your Business Name On Your Shop
            </p>
          </div>
        </div>
        <div class="shadow-lg rounded-2xl w-64 p-2 py-2 bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div class="flex flex-col items-center justify-center">
            <div class="w-20 h-20 rounded-full relative border border-blue-100">
              <img src='https://cdn-icons-png.flaticon.com/512/1254/1254747.png?w=740&t=st=1664275214~exp=1664275814~hmac=4382d9e06601e6838c33fd8d88ee42d3cae910e8498357991310ff1835aecc7d' className=' w-14 ml-3 mt-2 opacity-75' />
            </div>
            <p class="text-gray-500 text-md font-medium mb-1 mt-4">
              MOVABLE VEHICLE
            </p>
            <p class="text-gray-400 text-center text-xs px-1 mb-2">
              You Can Get License To Advertise Your Business Name On Your Shop
            </p>
          </div>
        </div>
        <div class="shadow-lg rounded-2xl w-64 p-2 py-2 bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div class="flex flex-col items-center justify-center">
            <div class="w-20 h-20 rounded-full relative border border-blue-100">
              <img src='https://cdn-icons-png.flaticon.com/128/1041/1041023.png?uid=R75839436&ga=GA1.2.679888497.1658218961' className='h-12 mt-3 ml-3 opacity-75' />
            </div>
            <p class="text-gray-500 text-md font-medium mb-1 mt-4">
              PRIVATE LAND
            </p>
            <p class="text-gray-400 text-center text-xs px-1 mb-2">
              You Can Get License To Advertise Your Business Name On Your Shop
            </p>
          </div>
        </div>
        <div class="shadow-lg rounded-2xl w-64 p-2 py-2 bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div class="flex flex-col items-center justify-center">
            <div class="w-20 h-20  rounded-full relative border border-blue-100">
              <img src='https://cdn-icons-png.flaticon.com/512/1158/1158396.png?w=740&t=st=1664275419~exp=1664276019~hmac=465d66d910bd6a1c401263a9b19ad531151f5f9605444084cce89888925a38b7' className=' h-12 mt-3 ml-4 opacity-75' />
            </div>
            <p class="text-gray-500 text-md font-medium mb-1 mt-4">
              AGENCY
            </p>
            <p class="text-gray-400 text-center text-xs px-1 mb-2">
              Advertisement Agencies Can Apply To Get License
            </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Dashboard_Advertisement