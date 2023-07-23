import React, {useState} from "react";

//create your first component
const TrafficLight = () => {
	
	const [colorLight, setColorLight] = useState("");
	const [blueLight, setBlueLight] = useState("");
	
	return (
		<>
			<div className={"traficLight"}>
				<div className={(colorLight === "redOn" ? "  redOn" : "redOff")} onClick={() => setColorLight("redOn")}  ></div>
				<div className={(colorLight === "yellowOn" ? " yellowOn" :"yellowOff")} onClick={() => setColorLight("yellowOn")}></div>
				<div className={(colorLight === "greenOn" ? " greenOn" : "greenOff")} onClick={() => setColorLight("greenOn")}></div>
				
				{
					blueLight == "active" &&
					(
						<div className={(colorLight === "blueOn" ? " blueOn" : "blueOff")} onClick={() => setColorLight("blueOn")}></div>
					)

				}
				{/* <div className={(blueLight === "active" ? "blueOff" : "") + (colorLight === "blueOn" ? " blueOn" : " blueOf") + (blueLight === "active2" ? "blueOn" : "") } onClick={() => {setColorLight("blueOn"); setBlueLight("active2")} }></div> */}				
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