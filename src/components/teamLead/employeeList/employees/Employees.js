// == Base:
import React, { useState, useEffect } from "react";
import { EmployeesData } from "./EmployeesData";
import "./Employees.scss";
// == Styles:

import avatar from "../../../../icons/employees.svg";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from "axios";
import AndroidIcon from '@mui/icons-material/Android';


const Employees = ({ items, setPageCount, setItems, setTotalUsers,handleClickInfoOpen}) => {
	
	let limit = 5

	useEffect(() => {
		const getUsers = async () => {
			const url =
				`https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`;
			const response = await axios.get(url);
			setItems(response.data);
			const totalNumberOfUsers = response.headers['x-total-count']
			setTotalUsers(totalNumberOfUsers)
			setPageCount(Math.ceil(totalNumberOfUsers/limit))
	
			
		};
		getUsers();
	}, []);
	

	


	return (
		<div className="employee">
			<ul className="employee-list">
				{items.map((data, key) => {
					return (
						<li 
							onClick={() =>handleClickInfoOpen(data.id)} 
							


							className="employee-list__items page-item" 
							key={key}
						>
							<div className="list-items__left-block">
								<span className="list-items__number">
									{data.id}.
								</span>
								{/* <img
									className="list-items__avatar"
									src={AccountCircleIcon}
									alt="photo"
								/> */}

								<AndroidIcon/>
							</div>

							<div className="list-items__right-block">
								<div className="right-block__upper-side">
									<div className="upper-side__name">
										{data.email.slice(0,5)}
									</div>
									<div className="upper-side__surname">
										{/* {data.surname} */}
									</div>
								</div>

								<div className="right-block__occupation">
									{/* {data.occupation} */}
								</div>
							</div>
						</li>
					);
				})}
			</ul>
			
		</div>
	);
};

export default Employees;
