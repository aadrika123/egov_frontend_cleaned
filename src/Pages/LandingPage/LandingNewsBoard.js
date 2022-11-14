//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 08 july 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - LandingNewsBoard 
//    DESCRIPTION - LandingNewsBoard Component
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from 'react'
import { Divider } from '@mui/material';
import LandingPopUpBox from './LandingPopUpBox';

function LandingNewsBoard(props) {

    const [dataNews, setDataNews] = useState([]);
    const [dataEvent, setDataEvent] = useState([])

    useEffect(() => {
        setDataNews(props.newData)
        setDataEvent(props.eventData)

    }, [props.newData, props.eventData])


    return (
        <>
            <div class='flex w-full m-auto justify-center'>
                <div class=" w-1/5  bg-slate-100 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-96 mt-4 ">
                    <div class="max-w-sm bg-sky-200 h-8 ">
                        <h1 class='pt-2 font-bold text-red-500 sm:text-lg'>NEWS BOARD</h1>
                    </div>

                    {dataNews.map((items) => (
                        <div>
                            <h1 class='font-bold text-md'> {items.header}</h1>
                            <LandingPopUpBox news_id={items.id} />
                            <Divider />
                        </div>
                    ))}
                    <div class="p-5">


                    </div>
                </div>
                <div class="  w-2/5  bg-slate-100 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-96  mt-4 ml-12">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/5/55/Districts_of_Jharkhand_map.svg' />
                </div>

                <div class="  w-1/5 justify-right smax-w-sm bg-slate-100  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-96  mt-4 ml-12">
                    <div class="max-w-sm bg-sky-200 h-8 ">
                        <h1 class='pt-2 font-bold text-red-500'>EVENTS</h1>
                    </div>
                    {dataEvent.map((items) => (
                        <div>
                            <h1 class='font-bold text-md'>{items.header}</h1>
                            <LandingPopUpBox event_id={items.id} />
                            <Divider />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default LandingNewsBoard
/**
 * Exported to :
 * 1. LandingPage
 * 
 * 
 */