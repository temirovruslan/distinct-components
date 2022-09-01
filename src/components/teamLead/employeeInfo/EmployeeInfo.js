import './EmployeeInfo.scss';
import React,{useState, useEffect} from 'react';
import Draggable from "react-draggable";
import circuit from '../../../icons/circuit.png';
import avatar from '../../../icons/employees.svg';
// import minimize from '../../../icons/teamLead/minimize.svg';
import minimize from '../../../icons/minimize.svg'
import axios from 'axios';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const EmployeeInfo = ({handleClickInfoClose, activeUser}) => {

    const [showUser, setShowUser] = useState({})

    useEffect(() => {
        const getActiveUser = () => {
            setShowUser(activeUser)
        };
        getActiveUser()
    }, [activeUser])

    return (
        <Draggable>
            
            <div className="employee-info">
                {
                    activeUser && (
                        <>
                        <div className='employee-info__info-box'>
                                    <div className="info-box">
                                        <img className='info-box__avatar' src={avatar} alt="photo" />
                                        <div className="info-box__information">
                                            <div className='info-box__name-surname'>
                                                <p className='info-box__name initials'>{activeUser.email.slice(0,5)}</p>
                                                <p className='info-box__surname initials'></p>
            
                                            </div>
                                            <p className="info-box__occupation">
                                                {activeUser.id}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="common-info">
                                        <div className="common-info__project-box common-box">
                                            <p className="project-box__project definition">Email: </p>
                                            <br/>
                                            <p className="project-box__project-name definition-info">{activeUser.email}</p>
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="employee-info__circuit">
                                    <img src={circuit} alt="circuit" />
                                </div>
                                
                                
                                <button onClick={handleClickInfoClose} className='employee-info__minimaze-icon'>
                                    <img  src={minimize} alt="minimize" />
                                </button>
                                </>
                    )
                }
            </div>
         
        </Draggable>
    );
}

export default EmployeeInfo;