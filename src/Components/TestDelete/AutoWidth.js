import { useState } from 'react'

function AutoWidth() {


    const age = [
        {name:'mark',age:20}
    ]
    // const result = age.filter((dd) => {
    //     return "hello"
    // });
    const result1 = age.reduce((acc, curr) => {
        acc = acc + curr
        return acc
    }, 0);


    const result2 = age.filter((data) => {
        return data < 3
    }).map((data) => {
        return data * 5
    })

    console.log('updated age ', result2)
    console.log('updated sum ', result1)
    const [width, setWidth] = useState(true)
    return (
        <>
            <div className="w-4/6 bg-red-100 h-96 flex transition-all">
                <div className={`bg-yellow-600 h-full ${width ? 'w-32' : 'w-0'} transition-all`}>hello</div>
                <div className='bg-green-600 h-full flex-auto transition-all'></div>
            </div>

            <button onClick={() => setWidth(!width)} className='bg-red-200 text-white '>click me</button>
        </>
    )
}

export default AutoWidth