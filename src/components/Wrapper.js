import React from 'react';

import Box from "./Box.js"
import funkoData from "../Data.js";

function Wrapper() {

	const funkoComponents = funkoData.map(funko => <Box key={funko.id} img={funko.img} 
							name={funko.name} category={funko.category} value={funko.value} />)

	return (
		<div>
			<div>
				{funkoComponents}
			</div>
			
		</div>
	);
}

export default Wrapper;
