import { useState } from "react"
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Table from "./components/Table";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import ClientDetails from "./components/ClientDetails";
import Dates from"./components/Dates";


function App() { 
  const [showInvoice, setShowInvoice] = useState(false)
  const [name, setName] = useState("")
  const [streetAddress, setStreetAddress] = useState("")
  const [cityAddress, setCityAddress] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [bankName, setBankName] = useState("")
  const [bankAccount, setBankAccount] = useState("")
  const [zelle, setZelle] = useState("")
  const [venmo, setVenmo] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientEmail, setClientEmail] = useState("")
  const [clientPhone, setClientPhone] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [hourlyRate, setHourlyRate] = useState("")
 
  const handlePrint = () => {
    window.print()
  } 
  return (
    <>
     <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl 
     bg-white rounded shadow">
      {showInvoice ?
              <div>
              <Header handlePrint={handlePrint} />
              <section className="flex flex-row justify-between">
              <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate}/> 
              <MainDetails name={name} streetAddress={streetAddress} cityAddress={cityAddress} email={email} phone={phone}/>
              </section>
              <ClientDetails clientName={clientName} clientEmail={clientEmail} clientPhone={clientPhone} />
              <Table />
              <Notes />
              <Footer bankName={bankName} bankAccount={bankAccount} zelle={zelle} venmo={venmo} />
              <button 
                onClick={() => setShowInvoice(false)}
                className="mt-5  bg-blue-500 text-white
                font-bold py-2 px-8
                rounded shadow border-2 border-blue-500
                hover:bg-transparent hover:text-blue-500
                transition-all duration-300" >Edit Information</button>
              </div> : (
                <>
                {/* name, address, email, phone, bank name, bank account number,
                zelle, venmo, client name, client email address, client phone number, 
                invoice number, invoice date, due date, notes  */}
                  <div className="flex flex-col 
                  justify-center">
                    <label htmlFor="name">Enter your name</label>
                    <input type="text"  
                    name="text" 
                    id="name" 
                    placeholder="Enter your name"  
                    autoComplete="on"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="address">Enter your address</label>
                    <input 
                    type="text"  
                    name="street address" 
                    id="address" 
                    placeholder="Enter your street" 
                    autoComplete="on" 
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                    />
                    <input 
                    type="text"  
                    name="City address" 
                    id="city address" 
                    placeholder="Enter your City/state/Zip" 
                    autoComplete="on" 
                    value={cityAddress}
                    onChange={(e) => setCityAddress(e.target.value)}
                    />
                    <label htmlFor="email">Enter your email</label>
                    <input 
                    type="email"  
                    name="email" 
                    id="email" 
                    placeholder="Enter your email" 
                    autoComplete="on" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="phone">Enter your phone number</label>
                    <input 
                    type="text"  
                    name="phone" 
                    id="phone" 
                    placeholder="Enter your phone number" 
                    autoComplete="on" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    />
                    <label htmlFor="bank name">Enter your Bank Name</label>
                    <input 
                    type="text"  
                    name="bank name" 
                    id="bank name" 
                    placeholder="Enter your bank name" 
                    autoComplete="on" 
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    />
                    <label htmlFor="bank account">Enter your Bank Account Number</label>
                    <input 
                    type="text"  
                    name="bank account" 
                    id="bank account" 
                    placeholder="Enter your bank account number" 
                    autoComplete="on" 
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                    />
                    <label htmlFor="zelle">Enter your zelle</label>
                    <input 
                    type="text"  
                    name="zelle" 
                    id="zelle" 
                    placeholder="Enter your zelle" 
                    autoComplete="on" 
                    value={zelle}
                    onChange={(e) => setZelle(e.target.value)}
                    />
                    <label htmlFor="venmo">Enter your venmo</label>
                    <input 
                    type="text"  
                    name="venmo" 
                    id="venmo" 
                    placeholder="Enter your venmo" 
                    autoComplete="on" 
                    value={venmo}
                    onChange={(e) => setVenmo(e.target.value)}
                    />
                    <label htmlFor="clientName">Enter your client's name</label>
                    <input 
                    type="text"  
                    name="clientName" 
                    id="clientName" 
                    placeholder="Enter your client's name" 
                    autoComplete="on" 
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    />
                    <label htmlFor="clientEmail">Enter your client's email</label>
                    <input 
                    type="email"  
                    name="clientEmail" 
                    id="clientEmail" 
                    placeholder="Enter your client's email" 
                    autoComplete="on" 
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    />
                    <label htmlFor="clientPhone">Enter your client's phone number</label>
                    <input 
                    type="text"  
                    name="clientPhone" 
                    id="clientPhone" 
                    placeholder="Enter your client's phone number" 
                    autoComplete="on" 
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    />
                    <label htmlFor="invoiceNumber">Enter invoice number</label>
                    <input 
                    type="text"  
                    name="invoiceNumber" 
                    id="invoiceNumber" 
                    placeholder="Enter invoice number" 
                    autoComplete="on" 
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                    />
                    <label htmlFor="invoiceDate">Enter invoice date</label>
                    <input 
                    type="date"  
                    name="invoiceDate" 
                    id="invoiceDate" 
                    placeholder="Enter invoice date" 
                    autoComplete="on" 
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                    />
                    <label htmlFor="dueDate">Enter due date</label>
                    <input 
                    type="date"  
                    name="dueDate" 
                    id="dueDate" 
                    placeholder="Enter due date" 
                    autoComplete="on" 
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    />
                    <label htmlFor="jobTitle">Enter job title</label>
                    <input 
                    type="text"  
                    name="jobTitle" 
                    id="jobTitle" 
                    placeholder="Enter job title" 
                    autoComplete="on" 
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    />
                    <label htmlFor="hourlyRate">Enter hourly rate</label>
                    <input 
                    type="text"  
                    name="hourlyRate" 
                    id="hourlyRate" 
                    placeholder="Enter hourly rate" 
                    autoComplete="on" 
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(e.target.value)}
                    />
                    <button onClick={() => setShowInvoice(true)}
                    className="bg-blue-500 text-white
                    font-bold py-2 px-8
                    rounded shadow border-2 border-blue-500
                    hover:bg-transparent hover:text-blue-500
                    transition-all duration-300">Preview Invoice</button>
                  </div>
                </>
              )}

     </main>
    </>
  );
}

export default App;
 