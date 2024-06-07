import React from 'react'
import { navigate, useNavigate } from 'react-router-dom';
//const myImage2 = require('../assets/images/slide1.jpg');
// import myImage3 from '../assets/images/bycycle2.jpg';
const Bike_Owner_Db = () => {
    // const user =JSON.parse(localStorage.getItem('user-info'));
    // console.warn
    const navigate =useNavigate();
    function logout()
    {
        localStorage.clear();

    }
  return <>
  <div class="col-md-4">
      <div className="sidebar">
          <div className="logo">
          <a href="http://localhost:3000/"> <h2 className='text-center'>BIKE RENTAL</h2></a>
              {/* <hr className="my-1 w-75 mx-auto bg-primary border-4 border-top border-primary" /> */}
          </div>
          <div className="menu">
            <ul>              
                <li><a href="Add_Bike" className='text-center'>Add Bike</a></li>
                <li><a href="Added_Bike" className='text-center'>Added Bike</a></li>
                <li><a href="Booking" className='text-center'>Booking</a></li>
                <li><a href="History" className='text-center'>History</a></li>
                <li><a href="Feed" className='text-center'>Feedback</a></li>
                <li><a href="/" onClick={logout} className='text-center'>Logout</a></li> 
            </ul>
          </div>
       </div>
   </div>

   <section className="contact-wrapper ">
    <div className="pb-3">
                {/* .col-md-8 */}
        <div className="container-xxl">
            <div className="row">
                <div className=" ">
                    {/* <p>welcome title={user.name}</p>                */}
               <img src="https://images.pexels.com/photos/1595483/pexels-photo-1595483.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className='w-100 ms-5 me-3' /> 
                    {/* <img src={myImage3} className='d-block w-100' alt="My Image" /> */}
                </div>
            </div>
        </div>
    </div>
  </section>    
  </>;
}

export default Bike_Owner_Db



