import React from 'react'

function Shorthands() {
// debugger
    var l = 60
    let c=50
    let d = 30
   function a(){
    console.log('normal function')
   }
   const good = ()=> console.log('arrow function')
    return (
        <>
        <h1>Shorthands</h1>
        </>
    )
}

export default Shorthands