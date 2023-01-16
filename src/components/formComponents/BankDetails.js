export default function BankDetails({
  bankName,
  setBankName,
  bankAccount,
  setBankAccount,
  zelle,
  setZelle,
  venmo,
  setVenmo
}) {
  return(
    <>
    {/*<h1 className="sectionTitle">Bank Information</h1>
      <article className="lg:grid grid-cols-2 gap-12">
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

    <article className="lg:grid grid-cols-2 gap-12">
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
    </article>*/}
  </>
  )
}