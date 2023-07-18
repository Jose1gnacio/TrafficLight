import React, {useState} from "react";

//create your first component
const TrafficLight = () => {
	
	const [colorLight, setColorLight] = useState("");
	const [blueLight, setBlueLight] = useState("");
	
	return (
		<>
			<div className={"traficLight" + (blueLight === "active" ? " traficLight2" : "")}>
				<div className={(colorLight === "redOn" ? "  redOn" : "redOff")} onClick={() => setColorLight("redOn")}  ></div>
				<div className={(colorLight === "yellowOn" ? " yellowOn" :"yellowOff")} onClick={() => setColorLight("yellowOn")}></div>
				<div className={(colorLight === "greenOn" ? " greenOn" : "greenOf")} onClick={() => setColorLight("greenOn")}></div>
				<div className={(blueLight === "active" ? "blueOff" : "") + (colorLight === "blueOn" ? " blueOn" : " blueOf") } onClick={() => setColorLight("blueOn")}></div>				
			</div>
			<div className="button">
				<button type="button" onClick={() => setBlueLight("active")} className="btn btn-warning"><strong>Add Light</strong></button>
			</div>
			<div className="button">
				<button type="button" onClick={() => {setBlueLight(""); setColorLight("")}} className="btn btn-danger btn-sm"><strong>Remove light</strong></button>
			</div>
		</>
	);
};

export default TrafficLight;