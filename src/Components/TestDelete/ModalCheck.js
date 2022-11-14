import ModalComponent from 'Components/Common/ModalComponent'
import {useState} from 'react'
import Loader from './Loader'

function ModalCheck() {
    const [togleModalCount, setTogleModalCount] = useState(0)
    let child = <h1>hello mr data</h1>
  return (
    <>
    <button className='bg-red-200 text-red-800 shadow-lg rounded-sm p-2' onClick={()=>setTogleModalCount((prev)=>prev+1)}>Toggle modal</button>
    <ModalComponent openState={togleModalCount}>
      <div className='bg-sky-200 p-10'>
        <h1>Action of form</h1>
        <div className="flex">
          <div className="flex-1"><input className='border-2 border-gray-200' type="text" /></div>
          <div className="flex-1"><input className='border-2 border-gray-200' type="text" /></div>
        </div>
      </div>
      </ModalComponent>
      
    </>
  )
}

export default ModalCheck