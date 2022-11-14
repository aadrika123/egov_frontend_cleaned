
function SelectInput(props) {
    return (
        <>
            <label for="password" className={`block mb-2 text-sm font-medium ${props.titleColor}`}>{props.title}</label>
            <select className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " >
               {props.options.map((option)=>(
                   <option value={option.value}>{option.name}</option>
               ))}

            </select>
        </>
    )
}

export default SelectInput