import { useState } from 'react'
import { BiAddToQueue } from 'react-icons/bi'
import { FcBinoculars } from 'react-icons/fc'
import capital from 'Components/Media/capital.png'
import area from 'Components/Media/radar.png'
import tax from 'Components/Media/tax.png'
import occupancy from 'Components/Media/occupancy.png'
import { Radar } from '@mui/icons-material'
import CitizenTaxCard from './CitizenTaxCard'


function PropertyTaxReview(props) {

  const [taxDescriptionState, setTaxDescriptionState] = useState(false)
  return (

    <>
      <div className={` block p-4 mt-20 w-full md:py-4 md:px-4 md:pb-0 md:pt-0 rounded-lg shadow-lg bg-white md:w-full mx-auto absolute -top-20 overflow-x-auto`}>
        <h1 className='px-2 font-semibold mt-0 bg-green-400 text-center text-white font-serif py-2 text-lg shadow-lg border border-white'>Calculated Holding Tax</h1>

        <div className="grid grid-cols-3 mt-8 md:px-20">
          <div className='px-4 py-4 text-sm'>
            
            <div>Ward : <span className='text-sm text-black font-semibold font-mono ml-2'>12</span></div>
            <div>Property Type : <span className='text-sm text-black font-semibold font-mono ml-2'>Independent</span></div>
            <div>Occupany Type : <span className='text-sm text-black font-semibold font-mono ml-2'>Self-Occupied</span></div>
            <div>Construciton Type : <span className='text-sm text-black font-semibold font-mono ml-2'>Residential</span></div>

          </div>
          <div className=''><CitizenTaxCard time="yearly" tax="200" /></div>
          <div><CitizenTaxCard time="quaterly" tax="50" /></div>
        </div>
        <div className="grid grid-cols-4 mt-8">
          <div className='text-center mt-4 col-span-2 col-start-2 px-14'>
            <button onClick={() => setTaxDescriptionState(!taxDescriptionState)} type="button" className="w-full px-6 py-1 bg-gray-200 text-gray-800 font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-amber-100 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out">{!taxDescriptionState ? 'See Tax Description' : 'Hide Tax Description'}</button>
          </div>
        </div>



        {taxDescriptionState &&
          <div>
            <div>
              <h1 className='px-2 font-semibold mt-4 text-gray-600 text-xs'>Floor Details</h1>

              <table className='min-w-full leading-normal mt-2'>
                <thead className='font-bold text-left text-sm bg-amber-100 text-gray-600'>
                  <tr>
                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">#</th>
                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Capital Value Rate</th>
                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Buildup Area</th>
                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Occupancy Factor</th>
                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Tax Percentage</th>
                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Calculation Factor</th>
                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Matrix Factor</th>
                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Effect From</th>
                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Property Tax</th>

                  </tr>
                </thead>
                <tbody className="text-sm">

                  <>
                    <tr className="bg-white shadow-lg border-b border-gray-200">
                      <td className="px-2 py-2 text-sm text-left">1</td>
                      <td className="px-2 py-2 text-sm text-left">2,241.00</td>
                      <td className="px-2 py-2 text-sm text-left">200.00</td>
                      <td className="px-2 py-2 text-sm text-left">1.00</td>
                      <td className="px-2 py-2 text-sm text-left">0.075%</td>
                      <td className="px-2 py-2 text-sm text-left">1.00</td>
                      <td className="px-2 py-2 text-sm text-left">0.80</td>
                      <td className="px-2 py-2 text-sm text-left">Quarter : 1 Financial Year : 2022-2023</td>
                      <td className="px-2 py-2 text-sm text-left"><span className='bg-green-200 px-2 py-1 rounded-lg shadow-lg border border-white'>268.92</span></td>

                    </tr>
                  </>

                </tbody>
              </table>
            </div>
            <div>
              <h1 className='px-2 font-semibold mt-4 text-gray-600 text-xs'>For Building</h1>

              <table className='min-w-full leading-normal mt-2'>
                <thead className='font-bold text-left text-sm bg-amber-100 text-gray-600'>
                  <tr>
                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">#</th>
                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Capital Value Rate</th>
                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Buildup Area</th>
                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Occupancy Factor</th>
                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Tax Percentage</th>
                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Calculation Factor</th>
                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Matrix Factor</th>
                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Effect From</th>
                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Property Tax</th>

                  </tr>
                </thead>
                <tbody className="text-sm">

                  <>
                    <tr className="bg-white shadow-lg border-b border-gray-200">
                      <td className="px-2 py-2 text-sm text-left">1</td>
                      <td className="px-2 py-2 text-sm text-left">2,241.00</td>
                      <td className="px-2 py-2 text-sm text-left">200.00</td>
                      <td className="px-2 py-2 text-sm text-left">1.00</td>
                      <td className="px-2 py-2 text-sm text-left">0.075%</td>
                      <td className="px-2 py-2 text-sm text-left">1.00</td>
                      <td className="px-2 py-2 text-sm text-left">0.80</td>
                      <td className="px-2 py-2 text-sm text-left">Quarter : 1 Financial Year : 2022-2023</td>
                      <td className="px-2 py-2 text-sm text-left"><span className='bg-green-200 px-2 py-1 rounded-lg shadow-lg border border-white'>268.92</span></td>

                    </tr>
                  </>

                </tbody>
              </table>
            </div>
            <div>
              <h1 className='px-2 font-semibold mt-4 text-gray-600 text-xs'>Below taxes are calculated on quarterly basis( Property Tax / 4 ).</h1>

              <table className='min-w-full leading-normal mt-2'>
                <thead className='font-bold text-left text-sm bg-amber-100 text-gray-600'>
                  <tr>
                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">#</th>
                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Effect From</th>
                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Property Tax (Quarterly)</th>
                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Holding Tax (Quarterly)</th>
                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Additional Tax</th>
                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Quarterly Tax (Total)</th>


                  </tr>
                </thead>
                <tbody className="text-sm">

                  <>
                    <tr className="bg-white shadow-lg border-b border-gray-200">
                      <td className="px-2 py-2 text-sm text-left">1</td>
                      <td className="px-2 py-2 text-sm text-left">Quarter : 1 Financial Year : 2022-2023</td>
                      <td className="px-2 py-2 text-sm text-left">254.88</td>
                      <td className="px-2 py-2 text-sm text-left">63.72</td>
                      <td className="px-2 py-2 text-sm text-left">31.86%</td>
                      <td className="px-2 py-2 text-sm text-left"><span className='bg-green-200 px-2 py-1 rounded-lg shadow-lg border border-white'>95.58</span></td>


                    </tr>
                  </>

                </tbody>
              </table>
            </div>
            {/* tax description toggle button */}

            {/* Tax description */}
            <div className='mt-10 bg-amber-100 pb-6'>
              {/* formula text */}
              <h1 className='px-2 font-semibold mt-4 text-gray-600 text-xs bg-white'>Tax Description</h1>
              <div className='flex font-mono text-xs bg-amber-100 py-3 px-1 text-gray-900'>
                <div className='flex-initial px-2 font-bold'>Property Tax</div>
                <div className='flex-initial px-2'>=</div>
                <div className='flex-initial px-2 bg-gray-100 rounded-lg shadow-lg'>Capital Value Rate</div>
                <div className='flex-initial px-2'>x</div>
                <div className='flex-initial px-2 bg-gray-100 rounded-lg shadow-lg'>Builtup Area</div>
                <div className='flex-initial px-2'>x</div>
                <div className='flex-initial px-2 bg-gray-100 rounded-lg shadow-lg'>Occupancy Factor</div>
                <div className='flex-initial px-2'>x</div>
                <div className='flex-initial px-2 bg-gray-100 rounded-lg shadow-lg'>Tax Percentage</div>
                <div className='flex-initial px-2'>x</div>
                <div className='flex-initial px-2 bg-gray-100 rounded-lg shadow-lg'>Calculation Factor</div>
                <div className='flex-initial px-2'>x</div>
                <div className='flex-initial px-2 bg-gray-100 rounded-lg shadow-lg'>Matrix Factor Rate</div>
              </div>
              {/* Calculation Rates*/}

              <h1 className='px-4 font-semibold mt-4 text-gray-600 text-xs'>Rates</h1>
              <div className='flex font-mono text-xs bg-amber-100 px-1'>
                <div className='flex-initial px-2 text-white rounded-lg mt-4'><span className='bg-gray-200 border border-white text-gray-900 px-2 py-2 shadow-lg rounded-lg cursor-pointer hover:bg-white'><img className='w-5 inline' src={capital} alt="icon-image" /> View Circle Rate</span></div>
                <div className='flex-initial px-2 text-white rounded-lg mt-4'><span className='bg-gray-200 border border-white text-gray-900 px-2 py-2 shadow-lg rounded-lg cursor-pointer hover:bg-white'><img className='w-5 inline' src={occupancy} alt="icon-image" /> View Occupancy Factor</span></div>
                <div className='flex-initial px-2 text-white rounded-lg mt-4'><span className='bg-gray-200 border border-white text-gray-900 px-2 py-2 shadow-lg rounded-lg cursor-pointer hover:bg-white'><img className='w-5 inline' src={area} alt="icon-image" /> View  Matrix Factor Rate</span></div>

                <div className='flex-initial px-2 text-white rounded-lg mt-4'><span className='bg-gray-200 border border-white text-gray-900 px-2 py-2 shadow-lg rounded-lg cursor-pointer hover:bg-white'><img className='w-5 inline' src={tax} alt="icon-image" /> View Calculation Factor</span></div>
              </div>

              {/* Usage Types percenatage*/}
              <h1 className='px-4 font-semibold mt-8 text-gray-600 text-xs underline'>Usage Type tax %</h1>
              <div className='flex font-serif text-xs bg-amber-100 px-1 mt-2'>
                <div className='flex-initial px-2 text-white rounded-lg'><span className='text-gray-900 px-2 py-2 rounded-lg'> Residential - <span className='font-mono text-sm font-semibold'>0.075%</span></span></div>
                <div className='flex-initial px-2 text-white rounded-lg'><span className='text-gray-900 px-2 py-2 rounded-lg'> Commercial - <span className='font-mono text-sm font-semibold'>0.150%</span></span></div>
                <div className='flex-initial px-2 text-white rounded-lg'><span className='text-gray-900 px-2 py-2 rounded-lg'> Commercial & greater than 25000 sqft - <span className='font-mono text-sm font-semibold'>0.20%</span></span></div>

              </div>
            </div>
          </div>
        }
        <div className='md:px-10 text-right'>
          <button onClick={() => props.backFun(2)} type="button" className=" px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Review <BiAddToQueue className=' hidden md:inline font-semibold text-sm md:text-lg' /></button>
        </div>
      </div>

    </>
  )
}

export default PropertyTaxReview