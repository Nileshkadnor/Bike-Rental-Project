import { useNavigate } from "react-router-dom";
import useFetch from "../../../useFetch";
//import { useAuth } from '../AuthContext';
const Feed = () => {
  const { data, errordata, isloaded } = useFetch('http://localhost:8000/feed');
  const navigate = useNavigate();
  // const { dispatch } = useAuth();

  // const handleLogout = () => {  
  //   dispatch({ type: 'LOGOUT' });  
  // };
  return (
    
      <div className="row">
        <div className="col-md-4">
          <div className="sidebar">
            <div className="logo text-center">
              <h2>BIKE RENTAL</h2>
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
        <div className="col-md-7">
          <div className="card mt-5" >
            <div className="card-body">
              <h5 className="card-title">Customer Feed</h5>
              {isloaded && <div>Please Wait</div>}
              {errordata && <div>{errordata}</div>}

              {data &&
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email Id</th>
                      <th>Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td>{item.fname}</td>
                        <td>{item.lname}</td>
                        <td>{item.email}</td>
                        <td>{item.texta}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              }
            </div>
          </div>
        </div>
      </div>
  
  );
}

export default Feed;
