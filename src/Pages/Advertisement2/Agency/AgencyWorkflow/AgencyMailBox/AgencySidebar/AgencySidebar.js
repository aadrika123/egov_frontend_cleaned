//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 26-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - AgencySidebar
//    DESCRIPTION - AgencySidebar Component
//////////////////////////////////////////////////////////////////////////////////////

import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { connect } from "react-redux";
import { FaEnvelope } from 'react-icons/fa'
import TradeSideImgCard from './TradeSideImgCard';
import TradeRawLink from './TradeRawLink';
import TradeSidebarLink from './TradeSidebarLink';

function AgencySidebar() {
    const location = useLocation();

    const [menuPermission, setMenuPermission] = useState([
      { id: 1, menuName: 'Home', menuPath: '/home', subMenu: [] },
      { id: 1, menuName: 'Mailbox', menuPath: '/mailbox', subMenu: [] },
      { id: 1, menuName: 'Master', menuPath: '/workflow-mstr', subMenu: [] },
      { id: 1, menuName: 'CMS', menuPath: '/cms', subMenu: [] },
      { id: 1, menuName: 'Water Mailbox', menuPath: '/water-mailbox', subMenu: [] },
      { id: 1, menuName: 'Trade Mailbox', menuPath: '/trade-mailbox', subMenu: [] },
  
    ])
  
    const expandSidebar = () => {
      props.navOriginalCloseStatus && props.NAV_OPEN() //if shorthand
    }
    const contractSidebar = () => {
      props.navOriginalCloseStatus && props.NAV_CLOSE() //if shorthand
    }
  

  return (
    <>
 {
        ((location.pathname != '/landing') && (location.pathname != '/') && (location.pathname != '/error')) && <div className={(props.navCloseStatus ? "w-0 sm:w-9" : "w-56 pr-2") + " shadow-lg px-0 bg-white h-full pb-12 overflow-hidden absolute top-16 left-0  text-gray-700 transition-all z-50 border-r-2"} onMouseEnter={expandSidebar} onMouseLeave={contractSidebar}>
          <div className='py-4' >
            <TradeSideImgCard sideBarStatus={props.navCloseStatus} />
          </div>
          <ul className="list-none" style={props.navCloseStatus == true ? { 'padding': '0px 2px 0px 2px' } : { 'padding': '0px 10px 0px 10px' }}>
            <li className='flex items-center pl-2 py-2 mt-2 bg-sky-100 border-l-2 border-indigo-600 text-blue-500 hover:bg-sky-100 hover:border-l-2 hover:border-indigo-600  hover:text-blue-500' style={{ 'width': '250px' }}>
              <div className="flex-none ">
                <FaEnvelope size={14} />
              </div>
              <div className="flex-initial w-40">
                <TradeRawLink path="/settings" title="Settings" />
              </div>
            </li>
            {
              menuPermission.map((data, index) => (
                <TradeSidebarLink title={data.menuName} path={data.menuPath} >
                </TradeSidebarLink>
              ))
            }
            {/* {
                   menuPermission.map((data,index)=>(
                     <CollapseItem2 title={data.menuName} path={data.menuPath} subMenu={data.subMenu}/>
                   ))
                 } */}




          </ul>
        </div>
      }


    </>
  )
}


//for redux
const mapStateToProps = (state) => {
    return {
      navCloseStatus: state.navCloseStatus,
      navOriginalCloseStatus: state.navOriginalCloseStatus
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      // buyCake: () => dispatch(buyCake())
      NAV_OPEN: (data2) => dispatch({ type: "NAV_OPEN" }),
      NAV_CLOSE: (data3) => dispatch({ type: "NAV_CLOSE" })
    };
  };
  // export default Home // EXPORTING HOME COMPONENT
  export default connect(mapStateToProps, mapDispatchToProps)(AgencySidebar);
  
