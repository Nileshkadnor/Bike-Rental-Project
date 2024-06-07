import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Add_Bike from './components/Pages/Bike_Ownerdb/Add_Bike';
import Added_Bike from './components/Pages/Bike_Ownerdb/Added_Bike';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Carosual from './components/Carosual';
import Bike_Owner_Db from './components/Pages/Bike_Ownerdb/Bike_Owner_Db';
import Booking from './components/Pages/Bike_Ownerdb/Booking';
import History from './components/Pages/Bike_Ownerdb/History';
import Feed from './components/Pages/Bike_Ownerdb/Feed';
import Bike_Customer_Db from './components/Pages/Bike_Customerdb/Bike_Customer_Db';
import Payment from './components/Pages/Bike_Customerdb/Payment';
import Cust_Feedback from './components/Pages/Bike_Customerdb/Cust_Feedback';
import Customerform from './components/Pages/Bike_Customerdb/Customerform';
import Forgotpass from './components/Pages/Forgotpass';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
//import 'react-toastify/dist/ReactToastify.css';
import Home from './Home';
import Regist from './Regist';
import CustomerRegister from './components/CustomerRegister';
import CLogin from './components/Pages/CLogin';
import Chistory from './components/Pages/Bike_Customerdb/Chistory';
import Cadded_bike from './components/Pages/Bike_Customerdb/Cadded_bike';
import AddBinfo from './components/Pages/Bike_Ownerdb/AddBinfo';
import BikeList from './components/Pages/BikeList';
import Editcust from './components/Pages/Bike_Ownerdb/Editcust';
import Addcust from './components/Pages/Bike_Ownerdb/Addcust';
import Custdetail from './components/Pages/Bike_Ownerdb/Custdetail';
import Cbike_List from './components/Pages/Bike_Customerdb/Cbike_List';
import Ccustdetail from './components/Pages/Bike_Customerdb/Ccustdetail';
import Logout from './components/Pages/Logout';
import  {AuthProvider} from "./components/AuthContext";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "AddBinfo",
    element: <AddBinfo/>,
  },
  
  {
    path: "Ccustdetail/:id/:vno",
    element: <Ccustdetail/>,
  },
  {
    path: "Logout",
    element: <Logout/>,
  },
  {
    path: "Ccustdetail/:id",
    element: <Ccustdetail/>,
  },
  {
    path: "Cbike_List",
    element: <Cbike_List/>,
  },
  {
    path: "Custdetail/:id/:vno",
    element: <Custdetail/>,
  },
  {
    path: "Custdetail/:id",
    element: <Custdetail/>,
  },
  {
    path: "Addcust",
    element: <Addcust/>,
  },
  {
    path: "Editcust/:custid",
    element: <Editcust/>,
  },

  {
    path: "BikeList",
    element: <BikeList/>,
  },
  
  {
    path: "Home",
    element: <Home/>,
  },
  {
    path: "Cadded_bike",
    element: <Cadded_bike/>,
  },
  {
    path: "Chistory",
    element: <Chistory/>,
  },
  {
    path: "CLogin",
    element: <CLogin/>,
  },
  {
    path: "Regist",
    element: <Regist/>,
  },
  {
    path: "Bike_Customer_Db",
     element: <Bike_Customer_Db/>,
   },
   {
    path: "Forgotpass",
     element: <Forgotpass/>,
   },
   {
    path: "Payment",
     element: <Payment/>,
   },
   {
    path: "Customerform",
     element: <Customerform/>,
   },
   {
    path: "Cust_Feedback",
     element: <Cust_Feedback/>,
   },
  
  {
    path: "Feed",
     element: <Feed/>,
   },
  
   {
   path: "History",
    element: <History/>,
  },


  {
    path: "CustomerRegister",
    element: <CustomerRegister/>,
  },
  {
    path: "Carosual",
    element: <Carosual/>,
  },
  {
    path: "Bike_Owner_Db",
    element: <Bike_Owner_Db/>,
  },
  {
    path: "Login",
    element: <Login/>,
  },
  {
    path: "Dashboard",
    element: <Dashboard/>,
  },
  {
    path: "AboutUs",
    element: <AboutUs/>,
  },
  
  {
    path: "Footer",
    element: <Footer/>,
  },
   {
     path: "Add_Bike",
     element: <Add_Bike/>,
   },
   {
    path: "Added_Bike",
    element: <Added_Bike/>,
  },
  {
    path: "Booking",
    element: <Booking/>,
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
   <AuthProvider>
   {/* <BikeList/> */}
    </AuthProvider> 
  </React.StrictMode>
);
reportWebVitals();
