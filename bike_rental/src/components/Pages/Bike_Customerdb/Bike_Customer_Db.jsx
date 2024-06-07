import React from 'react'
import {  useNavigate } from "react-router-dom";
const Bike_Customer_Db = () => {
  const navigate=useNavigate();
  return <>
  <div class="col-md-4">
      <div className="sidebar">
          <div className="logo">
             <a href="http://localhost:3000/"> <h2 className='text-center'>BIKE RENTAL</h2></a>
              {/* <hr className="my-1 w-75 mx-auto bg-primary border-4 border-top border-primary" /> */}
          </div>
          <div className="menu">
            <ul>
              <li><a href="Cadded_Bike" className='text-center'>Book Bike</a></li>
              <li><a href="Chistory" className='text-center'>History</a></li>
              {/* <li><a href="Customerform" className='text-center'>Form</a></li> */}
              <li><a href="Cust_Feedback" className='text-center'>Feedback</a></li>
              {/* <li><a href="Payment" className='text-center'>Payment</a></li> */}
              <li><a href="/" className='text-center'>Logout</a></li> 
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
                  <img src="https://images.pexels.com/photos/1595483/pexels-photo-1595483.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className='w-100 ms-5 me-3' />
                </div>
            </div>
        </div>
    </div>
  </section>    
  </>;
}

export default Bike_Customer_Db