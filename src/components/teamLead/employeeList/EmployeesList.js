import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import "./EmployeesList.scss";
import CloseIcon from "@mui/icons-material/Close";
import SearchBox from "./searchBox/SearchBox";
import Employees from "./employees/Employees";
import ReactPaginate from 'react-paginate';
import axios from 'axios';

import leftBtn from '../../../icons/left.svg';
import rightBtn from '../../../icons/right.svg';
import Accordion from "./accardion/Accardion";

const EmployeesList = ({handleClickInfoOpen,handleClickListOpen}) => {
	const limit = 5

	const [items, setItems] = useState([]);

  	const [pageCount, setPageCount] = useState(0);
	const [totalUsers, setTotalUsers] = useState(0);


	const [showLastUserInPage, setShowLastUserInPage] = useState(limit)
	const [showFirstUserInPage, setShowFirstUserInPage] = useState(1)

	  const fetchComments = async (currentPage) => {
		const res = await fetch(

		  `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
		);
		const data = await res.json();
		return data;
	  };
	
	  const handlePageClick = async (data) => {
	
		let currentPage = data.selected + 1;
		const commentsFormServer = await fetchComments(currentPage);
		setItems(commentsFormServer);

		// shows user's number in the page
		setShowLastUserInPage(currentPage * limit)
		setShowFirstUserInPage((currentPage * limit)-4)
	  };
 

	return (
		<Draggable>
			<div className="employees-list">
				<div className="employees-list__container">
					<div className="employees-list__header">
						<Accordion/>
						<button
							className="close-btn"
							onClick={handleClickListOpen}
						>
							<CloseIcon fontSize="small" />
						</button>
					</div>

					<div className="employees-list__view-all">
						<span>This is draggable componetns</span>
					</div>

					<SearchBox />

					<div className="employees-list__pages">
						<span>{showFirstUserInPage} - {showLastUserInPage} of {totalUsers}</span>
					</div>
					<Employees
						setItems={setItems}
						items={items}
						setPageCount={setPageCount}
						setTotalUsers={setTotalUsers}
						handleClickInfoOpen={handleClickInfoOpen}
					/>
					<ReactPaginate
						previousLabel={<img src={leftBtn}/>}
						nextLabel={<img src={rightBtn}/>}
						breakLabel={''}
						pageCount={pageCount}
						marginPagesDisplayed={1}
						pageRangeDisplayed={1}
						onPageChange={handlePageClick}
						containerClassName={"pagination justify-content-center"}
						pageClassName={"page-item size"}
						pageLinkClassName={"page-link size"}
						previousClassName={"page-item size"}
						previousLinkClassName={"page-link size"}
						nextClassName={"page-item size"}
						nextLinkClassName={"page-link size"}
						breakClassName={"page-item"}
						breakLinkClassName={"page-link"}
						activeClassName={"active"}
					/>
					
				</div>
			</div>
		</Draggable>
	);
};

export default EmployeesList;

