import React, { useState, useEffect } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import UserDetails from './Components/UserDetails';
import AccountCreation from './Components/AccountCreation';
import DashBoard from './Components/DashBoard';
import dummyData from './api/UsersApi';
const App = () => {
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    setUserData(dummyData);
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    // Code to open modal or popup for report generation
    // You can use a modal library like react-modal for this purpose
  };
  return (

    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashBoard/>}/>
          <Route path='/user' element={<UserDetails userData={userData} onUserClick={handleUserClick}/>}/>
          <Route path='/create' element={<AccountCreation/>}/>
          <Route path='*' element={<DashBoard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
