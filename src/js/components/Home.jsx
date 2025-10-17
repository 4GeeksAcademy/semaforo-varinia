import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import {Hooks} from "./Hooks.jsx" 

//create your first component
export function Home () {
	return (
		<div>
			<div classNameNameName="card">
  				<div classNameName="card-body">
					sostiene el semaforo
  				</div>
			</div>
			<div class="d-grid gap-2 col-6 mx-auto">
            	<button type="button" className={"btn btn-danger btn-lg"}></button>
            	<button type="button" className={"btn btn-warning btn-lg"}></button>
            	<button type="button" className={"btn btn-success btn-lg"}></button>
            </div>
		</div>
	);
};

export default Home;