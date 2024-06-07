import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBRipple,
  MDBContainer

} from 'mdb-react-ui-kit';

export default function Added_Bike() {
  const [basicModal, setBasicModal] = useState(false);
  const toggleOpen = () => setBasicModal(!basicModal);
  return (
    <> 
     <div className="row">
     <div class="col-4">
    <div className="sidebar" style={{ marginTop: 'auto' }}>
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
<div class="col-6">
  <MDBContainer className=' w-100 mt-5'>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='shadow-lg p-3 mb-5 bg-body rounded'>
          <MDBCardImage
            src='https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmlrZXxlbnwwfHwwfHx8MA%3D%3D'
            alt='...'
            position='top' />        
            <div class="modal-footer">
              <Link to="/BikeList" className="form-link">
              <button type="button" class="btn btn-outline-primary "  data-mdb-dismiss="modal">
              Booked..!!!
              </button></Link>
          </div>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard className='shadow-lg p-3 mb-5 bg-body rounded'> 
          <MDBCardImage
            src='https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXxlbnwwfHwwfHx8MA%3D%3D'
            alt='...'
            position='top'
          />  
            <div class="modal-footer">
              <Link to="/BikeList" className="form-link">
              <button type="button" class="btn btn-outline-primary" data-mdb-dismiss="modal">
              Booked..!!!
              </button></Link>
          </div>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard className='shadow-lg p-3 mb-5 bg-body rounded'>
          <MDBCardImage
            src='https://media.istockphoto.com/id/1457093031/photo/motorcycle-parked-on-the-road.webp?b=1&s=170667a&w=0&k=20&c=_X-HuzPFxKROObljqBH33YLxEaeEyxtb6MLLIh4gUGw='
            alt='...'
            position='top'
          />
    
            <div class="modal-footer">
              <Link to="/BikeList" className="form-link">
              <button type="button" class="btn btn-outline-primary" data-mdb-dismiss="modal">
              Booked..!!!
              </button></Link>
          </div>

      
        </MDBCard>
      </MDBCol>
    
<MDBCol>
        <MDBCard className='shadow-lg p-3 mb-5 bg-body rounded'>
          <MDBCardImage
            src='https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXxlbnwwfHwwfHx8MA%3D%3D'
            alt='...'
            position='top'
          />  
            <div class="modal-footer">
              <Link to="/BikeList" className="form-link">
              <button type="button" class="btn btn-outline-primary" data-mdb-dismiss="modal">
              Booked..!!!
              </button></Link>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='shadow-lg p-3 mb-5 bg-body rounded'>
          <MDBCardImage
            src='https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='...'
            position='top'
          />  
            <div class="modal-footer">
              <Link to="/BikeList" className="form-link">
              <button type="button" class="btn btn-outline-primary" data-mdb-dismiss="modal">
              Booked..!!!
              </button></Link>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='shadow-lg p-3 mb-5 bg-body rounded'>
          <MDBCardImage
            src='https://images.unsplash.com/photo-1501147830916-ce44a6359892?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlrZXxlbnwwfHwwfHx8MA%3D%3D'
            alt='...'
            position='top'
          />  
            <div class="modal-footer">
              <Link to="/BikeList" className="form-link">
              <button type="button" class="btn btn-outline-primary" data-mdb-dismiss="modal">
              Booked..!!!
              </button></Link>
          </div>
        </MDBCard>
      </MDBCol>
    
    </MDBRow>
 
    </MDBContainer>
    </div>
         
    </div>
    </>
  );
}


   
  