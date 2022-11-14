/////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 24 june 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - SidebarLink
//    DESCRIPTION - SidebarLink Component
//////////////////////////////////////////////////////////////////////////////////////

import { useState } from 'react'
import { FaEnvelope } from 'react-icons/fa';
import { MdOutlineNavigateNext } from 'react-icons/md';
import RawLink from './RawLink'




function CollapseMenu(props) {
    const [menuHeight, setmenuHeight] = useState('h-0')
    const toggleCollapseMenu = () => {
        if (menuHeight == 'h-0') {
            setmenuHeight('h-auto')
        } else {
            setmenuHeight('h-0')
        }
    }
    return (
        <>
            <div className="block">
                <li onClick={toggleCollapseMenu} className='cursor-pointer flex items-center pl-2 py-2 mt-2 hover:bg-sky-100 hover:border-l-2 hover:border-indigo-600  hover:text-blue-500' style={{ 'width': '250px' }}>
                    <div className="flex-none ">
                        {/* <FaEnvelope size={14} /> */}
                        {props.icon}
                    </div>
                    <div className="flex-initial w-40">
                        <RawLink subMenuStatus={props.subMenuStatus} path={props.path} title={props.title} />
                    </div>
                    {
                        props.subMenuStatus && <div className="flex-none ">
                            <MdOutlineNavigateNext size={18} />
                        </div>
                    }


                </li>

                {
                    props.subMenuStatus &&
                    <div className={`transition-all duration-1000 ${menuHeight} overflow-hidden bg-sky-50`}>
                        {
                            props.subMenu.map((subMenu) => (
                                <div className='flex items-center pl-8 py-2 hover:bg-sky-100 hover:border-l-2 hover:border-indigo-600  hover:text-blue-500  text-gray-600' style={{ 'width': '250px' }}>
                                    <div className="flex-none ">
                                        <FaEnvelope size={14} />
                                    </div>
                                    <div className="flex-initial w-40">
                                        <RawLink path={subMenu.menuPath} title={subMenu.menuName} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>



                }

            </div>
        </>
    )
}

export default CollapseMenu
/**
 * Exported to :
 * 1. Sidebar Component
 * 
 */