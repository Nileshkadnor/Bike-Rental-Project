//import React, {useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../useFetch";
//import { AuthProvider, useAuth, AuthContext } from "../../components/AuthContext";
//import { AuthContext } from "../AuthContext";
//import { AuthContext } from "../AuthContext";
const BikeList = () => {
//   const authContext = useContext(AuthContext);
//     const loggedInUser = authContext.user;

    const { data, errordata, isloaded } = useFetch('http://localhost:8000/customer');
    
    const navigate=useNavigate();   
    const Redirectdetail=(id)=>{
        navigate('/Custdetail/'+id)
    }
    const FunEdit=(id)=>{
        navigate('/Editcust/'+id)
    }
    const FunRemove=((id)=>{
        if(window.confirm("Do you want to remove?")){
            fetch("http://localhost:8000/customer/"+id,
            {method:"DELETE"}).then(()=>{

                window.location.reload();

            }).catch((err)=>{
                console.log(err.message)
            })
        }

    })
  
    return (
     <div className="container">
            <div className="card mt-5" >
                <div className="card-body">
                    <button type="submit"> <Link className="btn btn-success " to="/Bike_Owner_Db">Dashboard</Link>
                   </button> 
                    <h5 className="card-title">Customer Listing</h5>
                    {isloaded && <div>Please Wait</div>}
                    {errordata && <div>{errordata}</div>}
                    {data &&
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>Vehicle No</td>
                                    <td>RC Book</td>
                                    <td>Bike Rent/hr</td>
                                    <td>Owner Name </td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                            {data.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.vno}</td>
                                <td>{item.rcbook}</td>
                                <td>{item.bikerh}</td>
                                 <td>{item.own}</td>  
               
                                {/* <td>{loggedInUser === item.own ? item.own : "Not Authorized"}</td> */}
                              {/* <td> <Link className="btn btn-primary" to={"/empdetails/" + item.id}>Details</Link></td> */}
                                        <td><button type="button" onClick={()=>{Redirectdetail(item.id)}}>Details</button> | 
                                        <button type="button" onClick={()=>{FunEdit(item.id)}}>Edit</button> |
                                        <button type="button" onClick={()=>{FunRemove(item.id)}}>Detete</button>
                                        </td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                    }
                </div>
            </div>

            </div>
    );
}
export default BikeList;