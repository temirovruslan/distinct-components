import "./Accardion.scss";
import Chevron from "../../../../icons/shevron.svg";
import React, { useState, useEffect, useRef } from "react";



export default function Accordion() {
	//change name of btns
	const [btnName, setBtnName] = useState('List of workers')
	const [btnPrevName, setBtnPrevName] = useState('')

	// * accardion's state
	const [toggle, setToggle] = useState(false);
	const [heightEl, setHeightEl] = useState();

	const refHeight = useRef();

	useEffect(() => {
		console.log(refHeight);
		setHeightEl(`${refHeight.current.scrollHeight}px`);
	}, []);

	const toggleState = () => {
		setToggle(!toggle);
	};
	// * accardion's state 

	//change name of btns
	const handleChangeNameAsProject = () => {
		setBtnName('List of projects')
		console.log('btnName >>>',btnName);
		
	}


	return (
		<div className="accordion">
			<button onClick={toggleState} className="accordion-visible">
				
				<button className="accordion-visible__title accardion__btns" >{btnName}</button>
				<img className={toggle && "active"} src={Chevron} />
			</button>

			<div
				className={
					toggle ? "accordion-toggle animated" : "accordion-toggle"
				}
				style={{ height: toggle ? `${heightEl}` : "0px" }}
				ref={refHeight}
			>
				<button
					className="accordion-toggle__link accardion__btns"
					aria-hidden={toggle ? "true" : "false"}
					
					onClick={handleChangeNameAsProject}
				>
					List of projects
				</button>
				<button
					className="accordion-toggle__link accardion__btns"
					aria-hidden={toggle ? "true" : "false"}
					
				>
					List of companies
				</button>
				
			</div>
		</div>
	);
}
