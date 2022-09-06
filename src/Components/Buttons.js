import React from 'react';
import '../Styles/Buttons.css'

const Buttons = ({list,setList,data}) => {
    function handleSort(filteredCategory){
        let singleCategory = data.filter(
          (filteredList) => filteredList.category === filteredCategory
        )

        
        setList(singleCategory)
    }
  return (
    <div>
      <div className='button'>
        <button onClick={() => handleSort("men's clothing")}>Men  </button>
        <div>
          
        </div>
        <button onClick={() => handleSort("women's clothing")}>Women</button>
        <button onClick={() => handleSort('jewelery')}>Jewelry</button>
        <button onClick={() => handleSort('electronics')}>Electronics</button>
        <button onClick={() => setList(data)}>All</button>
      </div>
    </div>
  )
}

export default Buttons
