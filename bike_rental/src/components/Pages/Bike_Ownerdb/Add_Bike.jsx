import { useState } from "react";
import { useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

const Add_Bike = () => {
    const [id, idchange] = useState('');
    const [vno, vnochange] = useState('');
    const [own, ownchange] = useState('');
    const [rcbook, rcbookchange] = useState('');
    const [bikerh, bikerhchange] = useState(0);
    const [vnoError, setVnoError] = useState('');
    const [rcbookError, setRcbookError] = useState('');
    const [bikerhError, setBikerhError] = useState('');
    const navigate = useNavigate();

    const handlesubmit = async (e) => {
        e.preventDefault();

        // Validate fields
        if (!vno) {
            setVnoError('Vehicle No is required');
            return;
        } else {
            setVnoError('');
        }

        if (!rcbook) {
            setRcbookError('RC Book No is required');
            return;
        } else {
            setRcbookError('');
        }

        if (!bikerh) {
            setBikerhError('Bike Rent/Hr is required');
            return;
        } else {
            setBikerhError('');
        }
       
        const custobj = {own, vno, rcbook, bikerh };
        try {
            await fetch("http://localhost:8000/customer", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(custobj),
            });

            Swal.fire('Bike Added!', 'Your action submit', 'success');

            // Redirect to BikeList
            navigate('/Add_Bike');
        } catch (err) {
            console.log(err.message);
            // Show SweetAlert on error
            Swal.fire('Error!', 'An error occurred', 'error');
        }
    };
    
return (
<>

<div className="col-12" >
  <div className="row" >
        <div class="col-4" >
              <div className="sidebar">
                   <div className="logo">
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

          <div class="col-6"  >
                    <form  onSubmit={handlesubmit}>
                        <div className="card mt-5 p-4 ">
                        
                              <div className="col-lg-6 offset-lg-3">
                                  <h3 className="text-center">Add Bike</h3>
                                  
                                  <div className="form-group">
                                      <label>ID</label>
                                      <input value={id}  disabled="disabled" className="form-control"></input>
                                  </div>
                                  <div className="form-group">
                                      <label>Owner Name</label>
                                      <input value={own} onChange={e => ownchange(e.target.value)} className="form-control" required></input>
                                      {own.length === 0 && <span className="errormessage"> </span>}
                                  </div>
                                  <div className="form-group">
                                      <label>Vehicle No</label>
                                      <input value={vno} onChange={e => vnochange(e.target.value)} className="form-control" required></input>
                                      {vno.length === 0 && <span className="errormessage"> </span>}
                                  </div>
                                  <div className="form-group">
                                      <label>RC Book No</label>
                                      <input value={rcbook} onChange={e => rcbookchange(e.target.value)} className="form-control" required></input>
                                      {rcbook.length === 0 && <span className="errormessage"> </span>}
                                      
                                  </div>
                                  <div className="form-group">
                                    <label>Bike Rent/Hr</label>
                                    <input
                                        type="number"
                                        value={bikerh}
                                        onChange={(e) => {
                                            bikerhchange(e.target.value);
                                            setBikerhError('');
                                        }}
                                        className={`form-control ${bikerhError ? 'is-invalid' : ''}`}
                                    />
                                    {bikerhError && <div className="invalid-feedback">{bikerhError}</div>}
                                </div>              
                                  <div className="form-group">
                                      <br></br>
                                      <button   className="btn btn-success" type="submit">Submit</button>

                                  </div>
                              </div>
                        
                          </div>
                    </form>
        </div>
    </div>
    
    </div>
 </>
    );
}
export default Add_Bike;
