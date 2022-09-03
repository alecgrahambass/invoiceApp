export default function Footer({bankName, bankAccount, zelle, venmo}) {
  return ( 
    <>
      <footer className="footer">
        <h2 className="text-center text-xl italic">Payment Methods</h2>
        <ul className="mt-5 flex flex-wrap items-center
        justify-center">
          <li><span className="font-bold">Bank:</span>{bankName}</li>
          <li><span className="font-bold">Account Number:</span>{bankAccount}</li>
          <li><span className="font-bold">Zelle:</span>{zelle}</li>
          <li><span className="font-bold">Venmo:</span> {venmo}</li> 

        </ul> 
      </footer>
    </>
  )
}