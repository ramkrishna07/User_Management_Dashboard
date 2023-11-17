import React, { useState, useEffect } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import UserDetails from './Components/UserDetails';
import AccountCreation from './Components/AccountCreation';
import DashBoard from './Components/DashBoard';
import dummyData from './api/UsersApi';

const App = () => {
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  // dummyData is the placeholder database which I have imported from api folder
  useEffect(() => {
    setUserData(dummyData);
  }, []);
  // this handels the user click from the userdetails component
  const handleUserClick = (user) => {
    setSelectedUser(user);
  };
  return (

    <div className="App">

      <BrowserRouter>
        <Routes>
          {/* routing */}
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
