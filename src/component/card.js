import React from 'react';
//import {robots} from './robots'

const card = ({name,id,email}) =>{
return(

	<div className= 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow5 tc'>
	<img alt='robots' src= {`https://robohash.org/${id} ? 10px`} />  
	<div>
	<h2>{name}</h2>
	<p>{email}</p>
	<h2>{id}</h2>
	</div>
	</div>


    
	);

}

export default card;
