import React from 'react';

import Box from "./Box.js"
import funkoData from "../Data.js";

class Wrapper extends React.Component{

	constructor(){
		super()
		this.state = {
			showMe: 0
		}
	}


	render(){



		const funkoComponentsAll = funkoData.map(funko => <Box key={funko.id} img={funko.img} 
								name={funko.name} category={funko.category} value={funko.value} />)

		const funkoComponentsGames = funkoData.map(funko => <Box key={funko.id} img={funko.img} 
								name={funko.name} category={funko.category = "games"} value={funko.value} />)

		const funkoComponentsTelevision = funkoData.map(funko => <Box key={funko.id} img={funko.img} 
								name={funko.name} category={funko.category = "television"} value={funko.value} />)

		const funkoComponentsAnimation = funkoData.map(funko => <Box key={funko.id} img={funko.img} 
								name={funko.name} category={funko.category = "animation"} value={funko.value} />)

		
		return (

			<div>
				<navbar className="buttons">
					<button type="button" onClick={() => this.setState({showMe: 1})}>Games</button>
					<button type="button" onClick={() => this.setState({showMe: 2})}>Television</button>
					<button type="button" onClick={() => this.setState({showMe: 3})}>Animation</button>
					<button type="button" onClick={() => this.setState({showMe: 0})}>All</button>
				</navbar>
				<div className="container">
					{(() => {
				        switch (this.state.showMe) {
				          case 0: return funkoComponentsAll;
				          case 1: return funkoComponentsGames;
				          case 2: return funkoComponentsTelevision;
				          case 3: return funkoComponentsAnimation;
				          default: return funkoComponentsAll;
				        }
				    })()}
				</div>

				
			</div>
		);		

	}


}

export default Wrapper;
