export default function PersonalDetails({  
  name,
  setName,
  streetAddress,
  setStreetAddress,
  cityAddress,
  setCityAddress,
  email,
  setEmail,
  phone,
  setPhone,
  venmo,
  setVenmo
}) {
return (
  <>
  <h1 className="sectionTitle">Personal Information</h1>
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
  </>
)
}