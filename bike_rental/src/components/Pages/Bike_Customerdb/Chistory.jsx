import React, { useState } from 'react';
import {  useNavigate } from "react-router-dom";
import useFetch from '../../../useFetch';

export default function Chistory() {
  const { data: historyData, errordata: historyError, isloaded: historyIsLoaded } = useFetch(
    'http://localhost:8000/form'
  );

  const { data: statusData, errordata: statusError, isloaded: statusIsLoaded } = useFetch(
    'http://localhost:8000/updateStatus'
  );
  const navigate=useNavigate();
  return (
    <>
<div className="row">
  <div class="col-md-4">
    <div className="sidebar">
      <div className="logo">
        <h2 className='text-center'>BIKE RENTAL</h2>
         <hr className="my-1 w-75 mx-auto bg-primary border-4 border-top border-primary" />
      </div>
      <div className="menu">
        <ul>
           <li><a href="Added_Bike" className='text-center'>Book Bike</a></li>
           <li><a href="History" className='text-center'>History</a></li>
           {/* <li><a href="Customerform" className='text-center'>Form</a></li> */}
           <li><a href="Cust_Feedback" className='text-center'>Feedback</a></li>
     
           <li><a href="/" className='text-center'>Logout</a></li> 
        </ul>
       </div>
     </div>
    </div>

   <div class="col-md-7">
      <div className="card mt-5" >
          <div className="card-body">
              <h5 className="card-title text-center">Bike History</h5>
              {historyError && <div>{historyError}</div>}
              {statusError && <div>{statusError}</div>}
                    {historyData && statusData &&
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr className="text-center">
                                    <td>Customer Name</td>
                                    <td>Hr</td>
                                    <td>Date</td>
                                    <td>price</td>
                                    
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {historyData.map((item, index) => (
                                    <tr key={item.id}>
                                        <td className="text-center">{item.custname}</td>
                                        <td className="text-center">{item.qty}</td>
                                        <td className="text-center">{item.dob}</td>
                                        <td className="text-center">{item.amt}</td>
                                        
                                        <td className="text-center">{statusData[index]?.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    }
                </div>
            </div> 
    </div>

 </div>
   </>
  );
}