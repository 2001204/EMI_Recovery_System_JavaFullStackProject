import { useState } from "react"
import Footer from "./Footer"
import Notes from "./Notes"
import Table from "./Table"
import Header from "./Header"
import ServiceNavigationbar from "./ServiceNavigationBar"
import MainDetails from "./MainDetails"
import ClientDetails from "./ClientDetails"
import Dates from "./Dates"


export default function InvoiceService()
{

    const [showInvoice,setShowInvoice]=useState(false)
    const[name,setName]=useState("")
    const[address,setAddress]=useState("")
    const[email,setEmail]=useState("")
    const[phone,setPhone]=useState("")
    const[vehiclename,setVehiclename]=useState("")
    const[vehicleregistrationnumber,setVehicleregistrationnumber]=useState("")
    const[clientname,setClientname]=useState("")
    const[clientaddress,setClientaddress]=useState("")
    const[invoicenumber,setInvoicenumber]=useState("")
    const[invoicedate,setInvoicedate]=useState("")
    const[duedate,setDuedate]=useState("")
    const[notes,setNotes]=useState("")
    const handlePrint=()=>{
        window.print()
    }
    return(
         <>
         <ServiceNavigationbar/>
            <main className=" p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl  bg-gray-100 mt-5 rounded shadow">
            {showInvoice ? (
            <div>
              <Header handlePrint={handlePrint}/>
              <MainDetails name={name} address={address}/>
              <ClientDetails clientName={clientname} clientAddress={clientaddress}/>
              <Dates invoiceNumber={invoicenumber} invoiceDate={invoicedate}  dueDate={duedate}/>
              <Table/>
              <Notes notes={notes}/>
              <Footer name={name} address={address} email={email} mobile={phone} vehcileName={vehiclename} vehicleRegistrationNumber={vehicleregistrationnumber} />
              <button onClick={() => setShowInvoice(false)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 ml-12 mt-5">Edit Information</button>
              </div> 
              ):(
                <>
                {/*name,address,email,phone,vehicle name,vehicle registration number,client name,client address,invoice number,invoice date,due date,notes*/}
                      <div className="flex flex-col justify-center">
                      <label htmlFor="name">Enter Your name</label>
                      <input type="text" name="text" id="name" placeholder="Enter your name" autoComplete="off" className="ml-12 p-2" value={name} onChange={(e)=>setName(e.target.value)}/>

                      <label htmlFor="address">Enter Your Address</label>
                      <input type="text" name="text" id="address" placeholder="Enter your address" autoComplete="off" className="ml-12 p-2" value={address} onChange={(e)=>setAddress(e.target.value)}/>
 
                      
                      <label htmlFor="email">Enter Your Email</label>
                      <input type="text" name="text" id="email" placeholder="Enter your Email" autoComplete="off" className="ml-12 p-2" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                      
                      <label htmlFor="phone">Enter Your Mobile Number</label>
                      <input type="text" name="text" id="phone" placeholder="Enter your Mobile Number" autoComplete="off" className="ml-12 p-2" value={phone} onChange={(e)=>setPhone(e.target.value)}/>


                      <label htmlFor="vehiclename">Enter Your Vehicle Name</label>
                      <input type="text" name="text" id="vehiclename" placeholder="Enter your Vehicle Name" autoComplete="off" className="ml-12 p-2" value={vehiclename} onChange={(e)=>setVehiclename(e.target.value)}/>

                      
                      <label htmlFor="vehicleregistrationnumber">Enter Your Vehicle Registration Number</label>
                      <input type="text" name="text" id="vehicleregistrationnumber" placeholder="Enter your Vehicle Registration Number" autoComplete="off" className="ml-12 p-2" value={vehicleregistrationnumber} onChange={(e)=>setVehicleregistrationnumber(e.target.value)}/>

                     
                      <label htmlFor="clientname">Enter Your Client Name</label>
                      <input type="text" name="text" id="clientname" placeholder="Enter your Client Name" autoComplete="off" className="ml-12 p-2" value={clientname} onChange={(e)=>setClientname(e.target.value)}/>

                      
                      <label htmlFor="clientaddress">Enter Your Client Address</label>
                      <input type="text" name="text" id="clientaddress" placeholder="Enter your Client Address" autoComplete="off" className="ml-12 p-2" value={clientaddress} onChange={(e)=>setClientaddress(e.target.value)}/>

                      <label htmlFor="invoicenumber">Enter Your Invoice Number</label>
                      <input type="text" name="text" id="invoicenumber" placeholder="Enter your Invoice Number" autoComplete="off" className="ml-12 p-2" value={invoicenumber} onChange={(e)=>setInvoicenumber(e.target.value)}/>


                      <label htmlFor="invoicedate">Enter Your Invoice date</label>
                      <input type="date" name="text" id="invoicedate" placeholder="Enter your Invoice date" autoComplete="off" className="ml-12 p-2" value={invoicedate} onChange={(e)=>setInvoicedate(e.target.value)}/>


                      <label htmlFor="duedate">Enter Your Due date</label>
                      <input type="date" name="text" id="duedate" placeholder="Enter your due date" autoComplete="off" className="ml-12 p-2" value={duedate} onChange={(e)=>setDuedate(e.target.value)}/>


                      <label htmlFor="notes">Additional Notes</label>
                      <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Additonal Notes to the client" autoComplete="off" className="ml-12 p-2" value={notes} onChange={(e)=>setNotes(e.target.value)}/>


                      {/* <label htmlFor="vehicleregistrationnumber">Enter Your Vehicle Registration Number</label>
                      <input type="text" name="text" id="vehicleregistrationnumber" placeholder="Enter your Vehicle Registration Number" autoComplete="off" className="ml-12 p-2" value={vehicleregistrationnumber} onChange={(e)=>setVehicleregistrationnumber(e.target.value)}/>
 */}





                      
                      
                      
                      <button  onClick={()=> setShowInvoice(true)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 ml-12 mt-5">Preview Invoice</button>
                      </div>
                </>
              )}
            </main>
         </>

    )
}