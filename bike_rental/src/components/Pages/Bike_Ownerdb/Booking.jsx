import React, { useState } from 'react';
import {useNavigate } from "react-router-dom";
import useFetch from '../../../useFetch';
import Swal from "sweetalert2";


export default function Booking() {
  const { data, errordata, isloaded, refetchData } = useFetch(
    'http://localhost:8000/form'
  );
  const navigate = useNavigate();


  const handleConformClick = (itemId) => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Accept',
      cancelButtonText: 'Reject',
    }).then((result) => {
      if (result.isConfirmed) {
        updateStatus(itemId, 'Accepted');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        updateStatus(itemId, 'Rejected');
      }
    });
  };

  const updateStatus = async (itemId, newStatus) => {
    try {
      const response = await fetch('http://localhost:8000/updateStatus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: itemId,
          status: newStatus,
        }),
      });

      if (response.ok) {
        // Status updated successfully, refetch data
        refetchData();
      } else {
        console.error('Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };
  return (
    <>
  <div className="row">
    <div class="col-md-4">
     <div className="sidebar">
          <div className="logo">
            {/* Your logo or branding */}
            <h2 className='text-center'>BIKE RENTAL</h2>
            <hr className="my-1 w-75 mx-auto bg-primary border-4 border-top border-primary" />
          </div>
          <div className="menu">
            <ul>
              <li><a href="Add_Bike" className='text-center'>Add Bike</a></li>
              <li><a href="Added_Bike" className='text-center'>Added Bike</a></li>
              <li><a href="Booking" className='text-center'>Booking</a></li>
              <li><a href="History" className='text-center'>History</a></li>
              <li><a href="Feed" className='text-center'>Feedback</a></li>
              <li><a href="/" className='text-center'>Logout</a></li> 
            </ul>
          </div>
        </div>
      </div>
      
   <div class="col-md-7">
   <div className="card mt-5" >
                <div className="card-body">
                   {/* <button type="submit"> <Link className="btn btn-success " to="/Addcust">Add New</Link>
                   </button> */}
                    <h5 className="card-title text-center">Bike Booking</h5>
                    {isloaded && <div>Please Wait</div>}
                    {errordata && <div>{errordata}</div>}
                    {data &&
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr className="text-center">
                                    <td>Customer Name</td>
                                    <td>Hr</td>
                                    <td>Date</td>
                                    <td>price</td>
                                    {/* <td>Owner Name</td> */}
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr key={item.id}>
                                        <td className="text-center">{item.custname}</td>
                                        <td className="text-center">{item.qty}</td>
                                        <td className="text-center">{item.dob}</td>
                                        <td className="text-center">{item.amt}</td>
                                        {/* <td className="text-center">{item.own}</td> */}
                                        {/* <td> <Link className="btn btn-primary" to={"/empdetails/" + item.id}>Details</Link></td> */}
                                        <td className="text-center">
                                        <button
                                          onClick={() => handleConformClick(item.id)}
                                          type="submit"
                                        >status </button>
                                         
                                        </td>
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