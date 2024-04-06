import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicles = props => {
	const { store, actions } = useContext(Context);
	const {theid} = useParams();
	console.log(theid)
	
	useEffect(()=>{
		actions.loadSingleVehicle(theid)
	},[])
	
	
	return (
		<div className="container">
			<div className="d-flex" style={{width:"500px", marginLeft:"30%",marginTop:"30px"}}>
				<img  className="card-img-top" src={`https://starwars-visualguide.com/assets/img/vehicles/${theid}.jpg`}/>
				<div style={{marginLeft:"20px"}}>
				<h2>name: {store.singleVehicle?.properties?.name}</h2>
				</div>	
			</div>
		</div>
	);
};
Vehicles.propTypes = {
	match: PropTypes.object
};