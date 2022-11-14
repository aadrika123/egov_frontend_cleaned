import React from 'react'
import Multiselect from 'multiselect-react-dropdown';

function Multi2() {
    const data = {
        options: [
            { name: 'Option 1️⃣', id: 1 },
            { name: 'Option 2️⃣', id: 2 },
            { name: 'Car', id: 3 },
            { name: 'Bike 2️⃣', id: 4 },
            { name: 'Jet 2️⃣', id: 5 }
        ]
    };


   

    function onSelect(selectedList, selectedItem) {
        console.log(selectedItem)
    }

    function onRemove(selectedList, removedItem) {
        console.log(removedItem)
    }
    return (
        <>
            <form>
                <Multiselect
                    options={data.options} // Options to display in the dropdown
                    selectedValues={data.selectedValue} // Preselected value to persist in dropdown
                    onSelect={onSelect} // Function will trigger on select event
                    onRemove={onRemove} // Function will trigger on remove event
                    displayValue="name" // Property name to display in the dropdown options
                />
            </form>
        </>
    )
}

export default Multi2