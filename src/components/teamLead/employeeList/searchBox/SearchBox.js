import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";
// import filter from './icon/filter.svg';
// import filter from "../../../icons/teamLead/filter.svg";
import filter from "../../../../icons/filter.svg";
import "./SearchBox.scss";
// import SearchIcon from '@mui/icons-material/Search';
import search from "../../../../icons/search.svg";




const SearchBox = () => {
	return (
		<div>
			<form className="search-form">
				<img className="search-form_search-icon" src={search} alt="search" />
				<input type="text" name="search" placeholder="Search.."/>
				<img className="search-form_filter-icon" src={filter} alt="filter" />
			</form>
		</div>
	);
};

export default SearchBox;
