import { useState } from "react"
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Table from "./components/Table";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import ClientDetails from "./components/ClientDetails";
import Dates from"./components/Dates";
import TableForm from "./components/TableForm";


function App() { 
  const [showInvoice, setShowInvoice] = useState(true)
  const [name, setName] = useState("Alec Graham")
  const [streetAddress, setStreetAddress] = useState("1033 Valley Vista Dr.")
  const [cityAddress, setCityAddress] = useState("Camarillo, CA 93010")
  const [email, setEmail] = useState("alecgrahambass@mail.com")
  const [phone, setPhone] = useState("805-795-2788")
  const [bankName, setBankName] = useState("Wells Fargo")
  const [bankAccount, setBankAccount] = useState("11223344556667")
  const [zelle, setZelle] = useState("alecgraham")
  const [venmo, setVenmo] = useState("@alecgraham")
  const [clientName, setClientName] = useState("Laura Agudelo")
  const [clientEmail, setClientEmail] = useState("lagudeloc22@gmail.com")
  const [clientPhone, setClientPhone] = useState("781-999-3251")
  const [invoiceNumber, setInvoiceNumber] = useState("001")
  const [invoiceDate, setInvoiceDate] = useState(" 2023-01-11")
  const [dueDate, setDueDate] = useState("2023-01-31")
  const [jobTitle, setJobTitle] = useState("Musician")
  const [hourlyRate, setHourlyRate] = useState("35")
  const [notes, setNotes] = useState("please pay through bank account")
  const [date, setDate] = useState("")
  const [timeIn,setTimeIn] = useState("")
  const [timeOut, setTimeOut] = useState("")
  const [hours, setHours] = useState("")
  const [list, setList] = useState([])
 
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
              <Table date={date} timeIn={timeIn} timeOut={timeOut} hours={hours} setHours={setHours} list={list} setList={setList}/>
              <Notes notes={notes}/>
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
                    <h1>Invoice Information</h1>
                  <article className="lg:grid grid-cols-3 gap-10">
                    <div className="flex flex-col">
                      <label htmlFor="invoiceNumber">Enter invoice number</label>
                      <input 
                      type="number"  
                      name="invoiceNumber" 
                      id="invoiceNumber" 
                      placeholder="Enter invoice number" 
                      autoComplete="on" 
                      value={invoiceNumber}
                      onChange={(e) => setInvoiceNumber(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
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
                    </div>
                    <div className="flex flex-col">
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
                    </div>
                  </article>
                  <h1>Personal Information</h1>
                    <article className="lg:grid grid-cols-3 gap-10">
                      <div className="flex flex-col">
                        <label htmlFor="name">Enter your full name</label >
                        <input 
                          type="text"  
                          name="text" 
                          id="name" 
                          placeholder="full name"   
                          autoComplete="on"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="address">Enter your street name</label>
                        <input 
                          type="text"  
                          name="address" 
                          id="address" 
                          placeholder="street name" 
                          autoComplete="on" 
                          value={streetAddress}
                          onChange={(e) => setStreetAddress(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col">
                      <label htmlFor="city/state/zip">Enter your address</label>
                      <input 
                        type="text"  
                        name="City address" 
                        id="city address" 
                        placeholder="city/state/zip" 
                        autoComplete="on" 
                        value={cityAddress}
                        onChange={(e) => setCityAddress(e.target.value)}
                        />
                      </div>
                    </article>

                    <article className="lg:grid grid-cols-3 gap-10"> 
                      <div className="flex flex-col">
                        <label htmlFor="email">Enter your email</label>
                        <input 
                          type="email"  
                          name="email" 
                          id="email" 
                          placeholder="email" 
                          autoComplete="on" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="phone">Enter your phone number</label>
                        <input 
                          type="text"  
                          name="phone" 
                          id="phone" 
                          placeholder="phone number" 
                          autoComplete="on" 
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                        <div className="flex flex-col">
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
                      </div>
                    </article>
                  
                  <article className="lg:grid grid-cols-3 gap-10">
                  <div className="flex flex-col">
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
                      </div>
                    <div className="flex flex-col">
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
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="bank account">Enter Bank Account Number</label>
                      <input 
                        type="text"  
                        name="bank account" 
                        id="bank account" 
                        placeholder="Enter your bank account number" 
                        autoComplete="on" 
                        value={bankAccount}
                        onChange={(e) => setBankAccount(e.target.value)}
                      />
                    </div>
                  </article>

                  <article className="lg:grid grid-cols-2 gap-10">
                    <div className="flex flex-col">
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
                    </div>
                    <div className="flex flex-col">
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
                    </div>
                  </article>
                  <h1>Client Information</h1>
                  <article className="lg:grid grid-cols-3 gap-10">
                    <div className="flex flex-col">
                    <label htmlFor="clientName">Enter client name</label>
                    <input 
                    type="text"  
                    name="clientName" 
                    id="clientName" 
                    placeholder="Enter your client's name" 
                    autoComplete="on" 
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="clientEmail">Enter client email</label>
                      <input 
                      type="email"  
                      name="clientEmail" 
                      id="clientEmail" 
                      placeholder="Enter your client's email" 
                      autoComplete="on" 
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="clientPhone">Enter client phone number</label>
                      <input 
                      type="text"  
                      name="clientPhone" 
                      id="clientPhone" 
                      placeholder="Enter your client's phone number" 
                      autoComplete="on" 
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      />
                    </div>
                  </article>
                  {/*this is a table form */}
                  <article>
                    <h1>Time Sheet Information</h1>
                    <TableForm 
                      date={date} 
                      setDate={setDate}
                      timeIn={timeIn}
                      setTimeIn={setTimeIn}
                      timeOut={timeOut}
                      setTimeOut={setTimeOut}
                      list={list}
                      setList={setList}
                      hours={hours} 
                      setHours={setHours}
                    />
                  </article>
                  
                  <label htmlFor="notes"> Additional Notes</label>
                  <textarea
                    name="notes"
                    id="notes"
                    cols="30"
                    rows="10"
                    placeholder="Additional notes to client"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
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
 