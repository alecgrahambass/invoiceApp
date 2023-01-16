import React from "react";

export default function InvoiceDetails({
  invoiceNumber, 
  setInvoiceNumber, 
  invoiceDate, 
  setInvoiceDate, 
  dueDate, 
  setDueDate,
  jobTitle,
  setJobTitle,
  hourlyRate,
  setHourlyRate
}) {

  return (
    <>
      <h1 className="sectionTitle">Invoice Information</h1>
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
    <article className="lg:grid grid-cols-2 gap-12">
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
    </article>
    </>
  )
}