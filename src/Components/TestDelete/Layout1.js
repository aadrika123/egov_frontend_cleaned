//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 24 june 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Header
//    DESCRIPTION - Header Component
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'

function Layout1() {
    return (
        <>

            <section class="flex items-center justify-center py-10 text-white bg-white sm:py-16 md:py-24 lg:py-32">
                <div class="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
                    <div class="flex flex-col w-full md:flex-row">

                        <div class="flex justify-between">
                            <h1 class="relative flex flex-col text-6xl font-extrabold text-left text-black">
                                Crafting
                                <span>Powerful</span>
                                <span>Experiences</span>
                            </h1>
                        </div>
                        <div class="relative top-0 right-0 h-64 mt-12 md:-mt-16 md:absolute md:h-96">
                            <img src="https://cdn.devdojo.com/images/december2020/designs3d.png" class="object-cover mt-3 mr-5 h-80 lg:h-96" />
                        </div>
                    </div>

                    <div class="my-16 border-b border-gray-300 lg:my-24"></div>

                    <h2 class="text-left text-gray-500 xl:text-xl">
                        Building beautiful designs for your next project. We've unlocked the secret to converting visitors into customers. Download our re-usable and extandable components today.
                    </h2>
                </div>
            </section>

        </>
    )
}

export default Layout1
/**
 * Exported to :
 * 1. App.js
 * 
 */