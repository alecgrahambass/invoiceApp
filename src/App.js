import { useState } from "react"
import Payment from "./components/invoiceComponents/Payment";
import Notes from "./components/invoiceComponents/Notes";
import Table from "./components/invoiceComponents/Table";
import Header from "./components/invoiceComponents/Header";
import Footer from "./components/invoiceComponents/Footer";
import MainDetails from "./components/invoiceComponents/MainDetails";
import ClientDetails from "./components/invoiceComponents/ClientDetails";
import Dates from"./components/invoiceComponents/Dates";
import TableForm from "./components/formComponents/TableForm";
import InvoiceDetails from "./components/formComponents/InvoiceDetails";
import PersonalDetails from "./components/formComponents/PersonalDetails";
import BankDetails from "./components/formComponents/BankDetails";
import ClientFormDetails from "./components/formComponents/ClientFormDetails";
import NotesForm from "./components/formComponents/NotesForm";


function App() { 
  const [showInvoice, setShowInvoice] = useState(true);
  const [name, setName] = useState("Alec Graham");
  const [streetAddress, setStreetAddress] = useState("1033 Valley Vista Dr.");
  const [cityAddress, setCityAddress] = useState("Camarillo, CA 93010");
  const [email, setEmail] = useState("alecgrahambass@mail.com");
  const [phone, setPhone] = useState("805-795-2788");
  const [bankName, setBankName] = useState("Wells Fargo");
  const [bankAccount, setBankAccount] = useState("11223344556667");
  const [zelle, setZelle] = useState("alecgraham");
  const [venmo, setVenmo] = useState("@alecgraham");
  const [clientName, setClientName] = useState("Laura Agudelo");
  const [clientEmail, setClientEmail] = useState("lagudeloc22@gmail.com");
  const [clientPhone, setClientPhone] = useState("781-999-3251");
  const [invoiceNumber, setInvoiceNumber] = useState("001");
  const [invoiceDate, setInvoiceDate] = useState(" 2023-01-11");
  const [dueDate, setDueDate] = useState("2023-01-31");
  const [jobTitle, setJobTitle] = useState("Musician");
  const [hourlyRate, setHourlyRate] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [timeOut, setTimeOut] = useState("");
  const [hours, setHours] = useState("");
  const [totalHours, setTotalHours] = useState("");
  const [list, setList] = useState([]);
  const [isNote, setIsNote] = useState(false)
 
  const handlePrint = () => {
    window.print()
  } 
  return (
    <>
     <main className="mb-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl 
     bg-white rounded shadow">
      {showInvoice ?
              <div>
               <section className="backgroundTop">
              <section className="m-5 p-5 flex flex-row justify-between">
              <Header name={name}  />
              <MainDetails streetAddress={streetAddress} cityAddress={cityAddress} email={email} phone={phone}/>
              </section>
              </section>
              <section className="m-5 p-5 flex flex-row justify-between">
               <ClientDetails clientName={clientName} clientEmail={clientEmail} clientPhone={clientPhone} />
               <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate}/> 
              </section>
              
              <Table 
                date={date} 
                timeIn={timeIn} 
                timeOut={timeOut} 
                hours={hours} 
                setHours={setHours} 
                list={list} 
                setList={setList} 
                hourlyRate={hourlyRate}
                totalHours={totalHours}
                setTotalHours={setTotalHours}
                jobTitle={jobTitle}
              />
              <Notes notes={notes} isNote={isNote}/>
              <section className="backgroundBottom">
              <Payment cityAddress={cityAddress} streetAddress={streetAddress} phone={phone} name={name} zelle={zelle} venmo={venmo} />
              <Footer
              setShowInvoice={setShowInvoice}
              handlePrint={handlePrint}
              />
              </section>
              </div> : (
                <>
              <section className="m-5 p-5">
               <div className="flex flex-col justify-center">
                <InvoiceDetails
                  invoiceNumber={invoiceNumber}
                  setInvoiceNumber={setInvoiceNumber}
                  invoiceDate={invoiceDate}
                  setInvoiceDate={setInvoiceDate}
                  dueDate={dueDate}
                  setDueDate={setDueDate}
                  jobTitle={jobTitle}
                  setJobTitle={setJobTitle}
                  hourlyRate={hourlyRate}
                  setHourlyRate={setHourlyRate}
                />
                <PersonalDetails
                  name={name}
                  setName={setName}
                  streetAddress={streetAddress}
                  setStreetAddress={setStreetAddress}
                  cityAddress={cityAddress}
                  setCityAddress={setCityAddress}
                  email={email}
                  setEmail={setEmail}
                  phone={phone}
                  setPhone={setPhone}
                  venmo={venmo}
                  setVenmo={setVenmo}
                />
                <BankDetails
                  bankName={bankName}
                  setBankName={setBankName}
                  bankAccount={bankAccount}
                  setBankAccount={setBankAccount}
                  zelle={zelle}
                  setZelle={setZelle}
                  
                />
                <ClientFormDetails
                  clientName={clientName}
                  setClientName={setClientName}
                  clientEmail={clientEmail}
                  setClientEmail={setClientEmail}
                  clientPhone={clientPhone}
                  setClientPhone={setClientPhone}
                />
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
                  totalHours={totalHours}
                  setTotalHours={setTotalHours}
                />
                <NotesForm
                notes={notes}
                setNotes={setNotes}
                isNote={isNote}
                setIsNote={setIsNote}
                />
            <button onClick={() => setShowInvoice(true)}
            className="bg-blue-500 text-white
            font-bold py-2 px-8
            rounded shadow border-2 border-blue-500
            hover:bg-transparent hover:text-blue-500
            transition-all duration-300">Preview Invoice</button>
                </div>
                </section>
                </>
              )}

     </main>
    </>
  );
}

export default App;
 