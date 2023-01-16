export default function ClientFormDetails({
  clientName,
  setClientName,
  clientEmail,
  setClientEmail,
  clientPhone,
  setClientPhone
}){
  return (
    <>
    <h1 className="sectionTitle">Client Information</h1>
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
    </>
  )
}