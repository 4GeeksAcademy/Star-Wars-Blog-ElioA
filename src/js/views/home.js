import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import DisplayCard from "../component/displayCard";

export const Home = () => {

	const {store,actions} = useContext(Context)

	return (
	<>
	<div style={{marginTop:"50px"}}>
		<div  className="bigRow" style={{height:"620px"}}>
		{store.characters?.map((item,index)=>(
		<DisplayCard  key={index} id={item.uid} name={item.name} list="characters" link="single"/>))}
		</div>
	</div>
	<div style={{marginTop:"50px"}}>
		<div  className="bigRow" style={{height:"500px"}}>
		{store.planets?.map((item,index)=>(
		<DisplayCard  key={index} id={item.uid} name={item.name} list="planets" link="planets"/>))}
		</div>
	</div>
	<div style={{marginTop:"50px"}}>
		<div  className="bigRow" style={{height:"425px"}}>
		{store.vehicles?.map((item,index)=>(
		<DisplayCard  key={index} id={item.uid} name={item.name} list="vehicles" link="vehicles"/>))}
		</div>
	</div>
	</>)
};
