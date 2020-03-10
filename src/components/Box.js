import React from "react";


function Box(props){
	return (
		<div  className="items">
			<img src={props.img} alt="Funko"/>
			<h3>Name: {props.name}</h3>
			<h3>Category: {props.category}</h3>
			<h3>Value: {props.value}</h3>
		</div>


	)
}


export default Box
