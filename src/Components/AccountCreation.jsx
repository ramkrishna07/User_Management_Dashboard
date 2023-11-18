import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import back from  '../img/back.png';
import alert from '../img/alert.png';
import login from '../img/login.gif';

const ManualAlert = ({ message, onClose }) => {
    return (
      // manual alert portion
      <div className="alert fixed top-10 left-40 m-auto flex flex-col items-start bg-green-200 p-5 rounded-lg w-6/12 lg:w-9/12">
      <div className="header flex items-center justify-start w-full">
        
        <img src={alert} alt="" className="icon w-10 h-10 mr-2.5"/>
        <h4>Account Created</h4>
      </div>
      <div className="description text-base ">
        <p>Sit back relax,your account has been created succesfully</p>
      </div>
      <div class="footer">
        <button onClick={onClose} className="ok-button mt-2 py-1 px-8 bg-transparent text-black border-0 rounded cursor-pointer text-sm self-end hover:bg-green-300">OK</button>
      </div>
    </div>
    );
  };


const AccountCreation = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  // function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
    setShowAlert(true);
    console.log(`Submitted: Username - ${username}, Password - ${password}`);
  };

  // functionality to close alert
  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
      <div>
        {/* this manual alert portion triggers upon form submission */}
        {/* ManualAlert component defined in above */}
          {showAlert && (
        <ManualAlert message={username} onClose={closeAlert} />
      )}
      {/* link for returning to dashboard */}
      <Link to="/">
      <div className='fixed top-2 left-2 w-20 h-4'>
        <img className='w-16 h-16' src={back} alt="back" />
      </div>
      </Link>
    <div className="body flex h-screen m-0 bg-gray-900">
       {/* main container starts */}
    <div className="main-container flex flex-1 gap-4"> 
    {/* this div contains the gif  */}
        <div className="bg-container float-left w-0 md:w-1/2 bg-blue-100"
        style={{
          backgroundImage:`url(${login})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
          
        </div>
        {/* this div contains the login form */}
        <div className="login-container float-left bg-gray-800 rounded-md p-8 w-full h-max  md:w-1/2 my-5 mr-4 lg:mr-12 shadow-md shadow-gray-700">
            <h2 className="login-title text-3xl mb-5 text-left text-white font-semibold">Sign in to your account</h2> 
        <form className="login-form flex flex-col gap-4 m-auto rounded-lg" onSubmit={handleSubmit}> 
        {/* field for entering the username */}
            <div className="input-container flex flex-col gap-4">
                <label className='font-medium text-base text-white' for="">Username</label>
                <input type="text" className="form-control bg-gray-700 text-white border border-solid border-slate-400 rounded p-2.5 mb-4" required value={username} onChange={(e) => setUsername(e.target.value)}/> 
            </div>
            {/* field for entering the password */}
            <div className="input-container flex flex-col gap-4">
                <label className='font-medium text-base text-white' for="">Password</label>
                <input type="password" className="form-control text-white bg-gray-700 border border-solid border-slate-400 rounded p-2.5 mb-4 text-base" required value={password} onChange={(e) => setPassword(e.target.value)}/> 
            </div>
            {/* field for checking  the remember me checkbox*/}
            <div className="form-check mb-4 gap-4"> 
                <input type="checkbox" className="form-check-input p-2 mt-0.5 mr-1 mb-0.5 ml-1" id="remember-me"/> 
                <label className="form-check-label text-white" for="remember-me">Remember me</label> 
            </div> 
              {/* submit button */}
            <button type="submit" className="submit-btn bg-blue-600 text-slate-50 border-0 rounded-sm cursor-pointer text-base py-2 px-5 text-center no-underline inline-block mx-1 my-1 duration-300 hover:bg-blue-800">Login</button> 
        </form> 
        {/* forgot password text */}
        <p className="link text-blue-600 mt-4 text-center hover:text-blue-800">Forgot password?</p> 
        </div>
        </div>
    </div>
    </div>
  );
};

export default AccountCreation;
