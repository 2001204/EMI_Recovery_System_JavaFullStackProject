import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
//import { Navigationbar } from "./components/Navigationbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import Services from "./components/Services";

import AdminRegistration from "./components/AGENCY/AdminRegistration";
import BankRegistration from "./components/BANK/BankRegistration";
import Adminlogin from "./components/AGENCY/Adminlogin";
import AssignWork from "./components/AGENCY/AssignWork";
import Booking from "./components/BANK/Addcustomer";
import UserNavigationbar from './components/BANK/UserNavigationbar';
import Addcustomer from './components/BANK/Addcustomer';
import Updatecustomer from './components/BANK/Updatecustomer';

import Bankdetailss from './components/BANK/Bankdetailss';

import Footer from "./components/Footer/Footer";
import AdminPage from "./components/AGENCY/AdminPage";
import UserPage from "./components/BANK/UserPage";

import ViewContact from "./components/AGENCY/ViewContact";
import Addservice from "./components/AGENCY/Addservice";
import BankLogin from "./components/BANK/BankLogin";
import ViewBookedServices from "./components/AGENCY/ViewServices";

import ViewFeedback from "./components/AGENCY/Trackstatus";

import ServiceCenterRegsitration from "./components/TELECALLER/ServiceCenterRegsitration";
import ServiceCenterLogin from "./components/TELECALLER/ServiceCenterLogin";
import ServiceCenterHome from "./components/TELECALLER/ServiceCenterHome";
import RequestService from "./components/TELECALLER/Telecallerlist";
import InvoiceService from "./components/TELECALLER/InvoiceService";

import Telecallerlist from "./components/TELECALLER/Telecallerlist";

import { Alluser } from "./components/BANK/Alluser";

import Snav from "./components/SUPERADMIN/Snav";
// import { UserAuthContextProvider } from "./Context/UserAuthContext";
import Sadminlogin from "./components/SUPERADMIN/Sadminlogin";
import { Employee } from "./components/SUPERADMIN/Employee";
import { Authentication } from './components/BANK/Authentication';
import { ForgetPassword } from './components/BANK/ForgetPassword';
import { UserAuthContextProvider } from "./Context/UserAuthContext";

import Telecaller from "./components/TELECALLER/telecaller";
import Updateloan from "./components/BANK/Updateloan";
import DeleteCustomer from "./components/TELECALLER/DeleteCustomer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/DeleteCustomer" element={<DeleteCustomer/>} />

      <Route path="/updateloan/:id" element={<Updateloan />} />
        <Route path="/telecaller" element={<Telecaller />}></Route>
        <Route path="/Bankdetailss" element={<Bankdetailss />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/AdminPage" element={<AdminPage />}></Route>
        <Route path="/AdminRegistration" element={<AdminRegistration />}></Route>




<Route path="/assignwork" element={<AssignWork/>}></Route>


        {/* <Route path="/Login" element={<Login />}></Route> */}
        <Route path="/Adminlogin" element={<Adminlogin />}></Route>
      </Routes>





      <Routes>
        <Route path="/Telecallerlist" element={<Telecallerlist />}></Route>
        <Route path="/AdminPage" element={<AdminPage />}></Route>
        <Route path="/ViewContact" element={<ViewContact />}></Route>
        <Route path="/Addservice" element={<Addservice />}></Route>
        <Route path="/ViewServices" element={<ViewBookedServices />}></Route>
        <Route path="/ViewFeedback" element={<ViewFeedback />}></Route>
      </Routes>

      <Routes>
        <Route path="/Addcustomer" element={<Addcustomer />}></Route>
        <Route path="/UserPage" element={<UserPage />}></Route>
        {/* <Route path="/UserFeedback" element={<UserFeedback />}></Route> */}
        
        
        {/* <Route path="/ShowBooking" element={<ShowBooking/>}></Route> */}
        <Route path="/Alluser" element={<Alluser />}></Route>
	<Route path="/updatecustomer/:id" element={<Updatecustomer />} />
      <Route path="/BankRegistration" element={<BankRegistration />}></Route>
      <Route path="/BankLogin" element={<BankLogin />}></Route>
      </Routes>

      <Routes>
        <Route path="/addcustomr" element={<addcustomer />}></Route>
        <Route path="/ServiceCenterRegsitration" element={<ServiceCenterRegsitration />}></Route>
        <Route path="/ServiceCenterLogin" element={<ServiceCenterLogin />}></Route>
        <Route path="/ServiceCenterHome" element={<ServiceCenterHome />}></Route>
        /*<Route path="/RequestService" element={<RequestService />}></Route>
        <Route path="/InvoiceService" element={<InvoiceService />}></Route>
      </Routes>
      {/* <Routes>
        <Route path="/ServiceCenterRegsitration" element={<ServiceCenterRegsitration/>}</Route>
      </Routes> */}



      <Routes>
        {/* <Route path="/Addcustomer" element={<Addcustomer />} />
        <Route path="/Trackstatus" element={<Trackstatus />} />
        <Route path="/Bankdetailss" element={<Bankdetailss />} /> */}
        <Route path="/Snav" element={<Snav />}></Route>
        <Route path="/Employee" element={<Employee />}></Route>
        <Route path="/Sadminlogin" element={<Sadminlogin />}></Route>
        {/* <Route path="/Employee" element={<Employee />}></Route> */}
        <Route path="/authenticate" element={<Authentication></Authentication>}></Route>
        <Route path="/forgetpass" element={<ForgetPassword></ForgetPassword>}></Route>
      </Routes>


      <Footer />
    </BrowserRouter>
  );
}

export default App;
