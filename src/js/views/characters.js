import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const {theid} = useParams();
	console.log(theid)
	
	useEffect(()=>{
		actions.loadSingleCharacter(theid)
	},[])
	
	
	return (
		<div className="container">
			<div className="card" style={{width:"500px", marginLeft:"30%"}}>
				<img  className="card-img-top" src={`https://starwars-visualguide.com/assets/img/characters/${theid}.jpg`}/>	
				<h2>name: {store.singleCharacter?.properties?.name}</h2>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
