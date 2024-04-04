import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = props => {
	const { store, actions } = useContext(Context);
	const {theid} = useParams();
	console.log(theid)
	
	useEffect(()=>{
		actions.loadSinglePlanet(theid)
	},[])
	
	
	return (
		<div className="container">
			<div className="card" style={{width:"500px", marginLeft:"30%"}}>
				<img  className="card-img-top" src={`https://starwars-visualguide.com/assets/img/planets/${theid}.jpg`}/>	
				<h2>name: {store.singlePlanet?.properties?.name}</h2>
			</div>
		</div>
	);
};
Planets.propTypes = {
	match: PropTypes.object
};

