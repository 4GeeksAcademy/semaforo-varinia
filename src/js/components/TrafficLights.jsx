import { useState } from "react";
export const TrafficLights =()=>{  
	let [lightRed, setBtnColorRed] = useState("btn-danger opacity-25")
	let [lightYellow, setBtnColorYellow] = useState("btn-warning opacity-25") 
	let [lightGreen, setBtnColorGreen] = useState("btn-success opacity-25")  
		
	
    return(
        <div>
            <div className="semaforo">
				<div className="card">
  					<div className="card-body"></div>
				</div>				
				<div className="lights">
					<div className={"d-grid gap-2 col-1"}>
            			<button type="button" className={"btn "+lightRed} onClick={()=>setBtnColorRed("btn-danger")}></button>
            			<button type="button" className={"btn "+lightYellow} onClick={()=>setBtnColorYellow("btn-warning")}></button>
            			<button type="button" className={"btn "+lightGreen} onClick={()=>setBtnColorGreen("btn-success")}></button>
            		</div>
				</div>
			</div>

        </div>
    );

};
export default TrafficLights;