import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../useFetch";
import{
    MDBContainer,
    MDBCard
}from 'mdb-react-ui-kit';
const Custdetail = () => {
    const { id } = useParams();
    const { data ,errordata, isloaded } = useFetch('http://localhost:8000/customer/' + id)
    // console.log(data);
    const navigate=useNavigate();
    const backtolist=()=>{
        navigate(-1);
    }
   
    return (
        <MDBContainer className=' w-50 mt-5'>
        <MDBCard>
        <div className="card-body ">
            {data && <div>
                <h3> Owner Name : {data.own}
                </h3>
                <h4>  Vehicle No is : {data.vno} <i>({data.id})</i>
                </h4>
                <h4> RC Book No : {data.rcbook}
                </h4>
               
                <h4> Bike Rent/Hr : {data.bikerh}</h4>
                {/* <h4> Bike Img : {data.bikeimg}</h4> */}
                <div>
                    <button className=" me-3" onClick={backtolist}>Back to Listing</button>
                   
                </div>
            </div>}

            </div>
        </MDBCard>
        </MDBContainer>
    );
}

export default Custdetail;