//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 24 june 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - RawLink
//    DESCRIPTION - RawLink Component
//////////////////////////////////////////////////////////////////////////////////////

import { Link, NavLink, useNavigate } from 'react-router-dom'
import { connect } from "react-redux";


function RawLink(props) {
  const navigate = useNavigate()
  const checqueActive = () => {
    console.log(props.title, ' is active')
  }

  const activateLink = () => {
    if (window.innerWidth <= 500) {
      if (!props.navCloseStatus) {
        props.NAV_CLOSE()
        props.NAV_CLOSE_ORIGINAL_STATUS()
      }
    }
    navigate(props.path)
  }

  return (
    <>
      {/* <Link to={props.path}>{props.title}</Link> */}
      {/* <NavLink to={{ pathname: props.path }} activeStyle={{'color':'red',backgroundColor:'blue'}}>{props.title}</NavLink> */}
      {props.subMenuStatus ? <li style={{ 'textDecoration': 'none', 'fontSize': '13px', 'fontWeight': '400', 'paddingLeft': '10px' }}>{props.title}</li> : <div onClick={activateLink}><li style={{ 'textDecoration': 'none', 'fontSize': '13px', 'fontWeight': '400', 'paddingLeft': '10px' }} href={props.path}>{props.title}</li></div>
      }

    </>
  )
}


const mapStateToProps = (state) => {
  return {
    navCloseStatus: state.navCloseStatus,
    navOriginalCloseStatus: state.navOriginalCloseStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // buyCake: () => dispatch(buyCake())
    NAV_CLOSE: (data3) => dispatch({ type: "NAV_CLOSE" }),
    NAV_CLOSE_ORIGINAL_STATUS: (data3) => dispatch({ type: "NAV_CLOSE_ORIGINAL_STATUS" })
  };
};
// export default Home // EXPORTING HOME COMPONENT
export default connect(mapStateToProps, mapDispatchToProps)(RawLink);
// export default RawLink
/**
 * Exported to :
 * 1. SidebarLink Component
 */