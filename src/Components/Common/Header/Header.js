//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 24 june 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Header
//    DESCRIPTION - Header Component
//////////////////////////////////////////////////////////////////////////////////////
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import LogoText from './LogoText'
import NavButton from './NavButton'
import HeaderIcons from './HeaderIcons'

function Header() {
  const location = useLocation();


  return (
    <>
      {
        ((location.pathname != '/landing') && (location.pathname != '/') && (location.pathname != '/error')) && <div className="grid grid-cols-12 w-100 px-0 h-16 bg-white shadow-xl  z-50 relative animate__animated animate__fadeInDown" >
          {/* LogoText contains municipal logo and text */}
          <div className="hidden sm:block col-span-0 sm:col-span-2"> <LogoText /></div>
          {/* NavButton contains action button to open or close Sidebar */}
          <div className='col-span-9 sm:col-span-3 place-items-center'><NavButton /></div>
          {/* HeaderIcons contains action icons */}
          <div className='col-span-3 place-items-center col-start-10'><HeaderIcons /></div>

        </div>
      }

    </>
  )

  //.......................................v2.......................................
  // return (
  //   <>
  //     {
  //       ((location.pathname != '/landing') && (location.pathname != '/') && (location.pathname != '/error')) && <div className="flex w-100 h-16 bg-white shadow-xl  z-50 relative animate__animated animate__fadeInDown bg-red-600" >
  //         {/* LogoText contains municipal logo and text */}
  //         <div className="hidden sm:block col-span-0 sm:col-span-2"> <LogoText /></div>
  //         {/* NavButton contains action button to open or close Sidebar */}
  //         <div className='col-span-9 sm:col-span-3 place-items-center'><NavButton /></div>
  //         {/* HeaderIcons contains action icons */}
  //         <div className='col-span-3 place-items-center col-start-10 bg-blue-600 w-full'><HeaderIcons /></div>

  //       </div>
  //     }

  //   </>
  // )
}

export default Header
/**
 * Exported to :
 * 1. App.js
 */