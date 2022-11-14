//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 24 june 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Home
//    DESCRIPTION - Home Component
//////////////////////////////////////////////////////////////////////////////////////
import { useState, useEffect } from 'react'

function Home() {
    const [currentUser, setcurrentUser] = useState('')

    useEffect(() => {
        let user = JSON.parse(window.localStorage.getItem('user'))
        if (user != undefined) {
            setcurrentUser(user.username)
        }
    }, [])

    return (
        <>
            <h1 className='text-lg text-semibold'><span className='bg-gray-700 text-white px-4 rounded-r shadow-lg border-4 border-white'>Welcome <span className='text-2xl font-bold px-4 text-white'>{currentUser}</span></span></h1>
        </>
    )
}

export default Home
/**
 * Exported to :
 * 1. App.js
 * 
 */