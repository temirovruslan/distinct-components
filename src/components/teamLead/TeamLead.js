import React, { useState, useEffect } from "react";
import "./TeamLead.scss";

import EmployeeInfo from "./employeeInfo/EmployeeInfo";
import EmployeesList from "./employeeList/EmployeesList";
import axios from "axios";
import Sidebar from '../Sidebar/Sidebar'

const TeamLead = () => {
    //popup state
    const [employeesList, setEmployeesList] = useState(true);
    const [employeeInfo, setEmployeeInfo] = useState(false);

    // map btns state
    const [imageClicked, setImageClicked] = useState({
		first: false,
		second: false,
		ground: false,
	  });

    const [onClickId, setOnClickId] = useState()

    //EmployeeInfoStates
    const [usersInfo, setUsersInfo] = useState([])
    const [activeUser, setActiveUser] = useState(null)


    // popup
    const handleClickListOpen = () => {
		setEmployeesList((currentState) => !currentState);
	};

    const handleClickInfoOpen = (id) => {
        setOnClickId(id)
        if(id){
            setEmployeeInfo(true)
        }
       
	};

    const handleClickInfoClose = () => {
        setEmployeeInfo(false)
    }

    useEffect(() => {
        const getUserActive = () => {
            usersInfo.map(user => {
                if(user.id === onClickId) {
                    setActiveUser(user)
                }
            })
        };
        getUserActive()
    }, [onClickId])


    useEffect(() => {
		const getUsers = async () => {
			const url =
				`https://jsonplaceholder.typicode.com/comments`;
			const response = await axios.get(url);
			setUsersInfo(response.data);

		};
		getUsers();
	}, []);


    return (
        <div className="team-lead">
            {/* <SimpleMap/> */}
            <div className="team-lead__container">
    
                <button  onClick={handleClickListOpen} className="employees-list_btn">Click</button>
                <Sidebar/>
                {/* <LayersBtn imageClicked={imageClicked} setImageClicked={setImageClicked} /> */}
                {
                    employeesList && (
                        <EmployeesList 
                            handleClickListOpen={handleClickListOpen}  
                            handleClickInfoOpen={handleClickInfoOpen}/>
                    )
                }

                {
                    employeeInfo && (
                        <EmployeeInfo 
                            handleClickInfoClose={handleClickInfoClose}
                            onClickId={onClickId}
                            activeUser={activeUser}
                        />
                    )
                }
               
                
            </div>
            
        </div>
    );
}

export default TeamLead;