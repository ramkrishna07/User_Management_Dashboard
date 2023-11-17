import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import back from  '../img/back.png';
import alert from '../img/alert.png';
const ManualAlert = ({ message, onClose }) => {
  return (
      <div className="alert fixed top-2.50 left-40 m-auto flex flex-col items-start bg-green-200 p-5 rounded-lg w-6/12 lg:w-9/12">
      <div className="header flex items-center justify-start w-full">
        
        <img src={alert} alt="" className="icon w-10 h-10 mr-2.5"/>
        <h4>Report Generated</h4>
      </div>
      <div className="description text-base ">
        <p>Report - {message}</p>
      </div>
      <div class="footer">
        <button onClick={onClose} className="ok-button mt-2 py-1 px-8 bg-transparent text-black border-0 rounded cursor-pointer text-sm self-end hover:bg-green-300">OK</button>
      </div>
    </div>
  );
};

const UserDetails = ({ userData, onUserClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showAlert, setShowAlert] = useState(null);
  const filteredUsers = userData.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const selectUser = (user) => {
    setSelectedUser(user);
  };
  const openModal = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  const generateReport = (user) => {
    if (user) {
      setSelectedUser(null);
      
      setShowAlert(user);
      
    }
  };
  const closeAlert = () => {
    setShowAlert(false);
  };
  return (
    <div className='body m-0 p-0'>
      {showAlert && (
        <ManualAlert message={
          <p>Username:{showAlert.username}, Email:{showAlert.email}, Phone:{showAlert.phone}, ID:{showAlert.id}</p>
        } onClose={closeAlert} />
      )}
      <div className= "main-container flex flex-col justify-start items-center h-max bg-gray-900">
      <Link to="/">
      <div className='fixed top-2 left-2 w-20 h-4'>
        <img className='w-16 h-16' src={back} alt="back" />
      </div>
      </Link>
      {selectedUser && (
        <div className="modal card generate-container fixed top-4 text-center left-88 z-10 w-5/12 h-62 border border-solid border-slate-200 shadow shadow-slate-100 rounded p-3 bg-gray-200" >
          <div className="modal-content card-body">
          <h2 className='card-title font-bold text-2xl mx-0'>Report Card</h2>
          <p className='text-base mt-2.5 mb-16'>Do you want to generate report for {selectedUser.username}</p>
          <div className="btn-container flex flex-col lg:flex-row justify-center gap-2 lg:gap-2.56">
            <button className="btn bg-blue-600 text-black border-0 rounded cursor-pointer py-1 lg:py-2 px-14 hover:bg-blue-500 cancel" onClick={closeModal}>Cancel</button>
            <button className="btn bg-blue-600 text-black border-0 rounded cursor-pointer py-1 lg:py-2 px-10 hover:bg-blue-500 generate" onClick={() => generateReport(selectedUser)}>Generate</button>
          </div>
          </div>
        </div>
      )}
        <div className= {selectedUser!==null?"search-container w-7/12 sm:w-10/12 mt-5 blur-sm":"search-container w-10/12 mt-5"}>
          
            <input type="text"
            className='p-2 border border-solid bg-gray-700 text-white font-bold border-zinc-400 rounded-md w-full'
            placeholder="Search by username"
            value={searchTerm}
            onChange={handleSearch} id="searchInput" />
        </div>
        
        <table  className= {selectedUser!==null?"user-table w-10/12 border-collapse mt-5 rounded-lg overflow-hidden blur-sm":"user-table w-10/12 border-collapse mt-5 rounded-lg overflow-hidden"}  id="userTable">
        <thead>
          <tr>
            <th className='border border-solid border-slate-400 p-2.5 sm:p-1 text-left bg-gray-800 text-white font-bold'>Username</th>
            <th className='border border-solid border-slate-400 p-2.5 sm:p-1 text-left bg-gray-800 text-white font-bold'>Email</th>
            <th className='border border-solid border-slate-400 p-2.5 sm:p-1 text-left bg-gray-800 text-white font-bold'>Phone</th>
            <th className='border border-solid border-slate-400 p-2.5 sm:p-1 text-left bg-gray-800 text-white font-bold'>ID</th>
            <th className='border border-solid border-slate-400 p-2.5 sm:p-1 text-left bg-gray-800 text-white font-bold'>Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr className='h-12 bg-gray-700 text-white transition-shadow cursor-pointer hover:bg-gray-600' key={user.id} onClick={() => selectUser(user)} >
              <td className='border border-solid border-slate-400 p-2.5 sm:p-1 text-left'>{user.username}</td>
              <td className='border border-solid border-slate-400 p-2.5 sm:p-1 text-left'>{user.email}</td>
              <td className='border border-solid border-slate-400 p-2.5 sm:p-1 text-left'>{user.phone}</td>
              <td className='border border-solid border-slate-400 p-2.5 sm:p-1 text-left'>{user.id}</td>
              <td className='border border-solid border-slate-400 p-2.5 sm:p-1 text-left'>{user.creationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* <Dashboard/> */}
      
      {/* Table displaying user information */}
      
      {/* Implement modal or popup for report generation */}
      
    </div>
    </div>
  );
};

export default UserDetails;
