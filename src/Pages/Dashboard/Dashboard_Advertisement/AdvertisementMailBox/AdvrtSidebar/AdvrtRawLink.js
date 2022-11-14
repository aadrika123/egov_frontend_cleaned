//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 24-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - AdvrtRawLink
//    DESCRIPTION - AdvrtRawLink Component
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function AdvrtRawLink() {

    const checqueActive = () => {
        console.log(props.title, ' is active')
    }
    return (
        <>
            {/* <Link to={props.path}>{props.title}</Link> */}
            {/* <NavLink to={{ pathname: props.path }} activeStyle={{'color':'red',backgroundColor:'blue'}}>{props.title}</NavLink> */}
            <NavLink to={{ pathname: props.path }} className={isActive =>
                "bg-red-700" + (!isActive ? " bg-red-700" : "")
            }><li style={{ 'textDecoration': 'none', 'fontSize': '13px', 'fontWeight': '400', 'paddingLeft': '10px' }} href={props.path}>{props.title}</li></NavLink>

        </>
    )
}

export default AdvrtRawLink