import React from 'react';


const SearchBox=({SearchBox,searchChange})=>{
	return(
		<div className='pa1 b2'>
		<input
		 type ='search' 
		 placeholder='SearchBox'
		 onChange= {searchChange}
		/>
		</div>




		);

}

export default SearchBox;

