import React from 'react';
import { Link } from 'react-router-dom';
import brand from '../img/brand.png';
import arrow from '../img/arrow1.png';
import background from '../img/background.jpg';
import banner from '../img/banner-2.gif';
function Dashboard() {
  return (
    // this div contains the background image/gif
    <div style={{backgroundImage:`url(${banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",}}>
      {/* main container starts */}
    <div className="main-container h-screen" >
      {/* demo navbar contains 2 navlist */}
    <header className='text-white p-5'>
        <nav>
          <ul className='list-none'>
            <li className='inline-block mr-5'><a className='no-underline text-white' href="#">Home</a></li>
            <li className='inline-block mr-5'><a className='no-underline text-white' href="#">Features</a></li>
          </ul>
        </nav>
      </header>
    {/* main portion starts from here */}
      <main>
        {/* main div to hold two tabs */}
        <div className="tabs flex flex-col gap-5 absolute top-2/4 left-24 md:left-52 sm:left-36  scale-75 sm:scale-100">
          {/* user details tab */}
          <Link to="/user">
          <div className="tab flex items-center bg-gray-800 text-white font-bold border border-solid border-slate-400 rounded-3xl py-3 pr-2 pl-5 cursor-pointer shadow-md shadow-gray-700">
            <img className='w-10 h-10 mr-3' src={brand} alt=""/>
            <div className="tab-content flex flex-col">
              <h2>Users Details</h2>
              <p>Connect with a community of developers.</p>
            </div>
            <img className='w-8 h-8 ml-3' src={arrow} alt=""/>
          </div>
          </Link>
          {/* account creation tab */}
          <Link to="/create">
          <div className="tab flex items-center bg-gray-800 text-white font-bold border border-solid border-slate-400 rounded-3xl py-3 pr-2 pl-5 cursor-pointer shadow-md shadow-gray-700">
          <img className='w-10 h-10 mr-3' src={brand} alt=""/>
            <div className="tab-content flex flex-col">
              <h2>Create Account</h2>
              <p>Start building your own project and so on</p>
            </div>
            <img className='w-8 h-8 ml-3' src={arrow} alt=""/>
          </div>
          </Link>
        </div>
        {/* this section contains the heading and description */}
        <section className="content p-5 md:ml-48 ml-32 mr-12">
          <h1 className='text-4xl sm:text-5xl xl:text-7xl mb-2.5 text-white'>Let's build together...</h1>
          <p className='md:contents  text-xl xl:text-3xl  text-white'>Where developers build and collaborate on projects.</p>
        </section>
      </main>
    
</div>
</div>
  );
}

export default Dashboard;
