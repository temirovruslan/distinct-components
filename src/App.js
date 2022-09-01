import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import TeamLead from './components/teamLead/TeamLead';
// import EmployeesList from './components/Pagination/EmployeesList';
// import List from './components/Pagination/EmployeesList';

// import Profile from './components/user/Profile';


function App() {
  return (
    <Routes>
      
      <Route path="/" element={<TeamLead/>}/>
     
    </Routes>
  );
}

export default App;
