export default function Footer({streetAddress, cityAddress, name, phone, venmo}) {
  return ( 
    <>
      <footer className="footer border-t-2 border-gray-300 p-5">
        <h2 className="text-center text-xl italic">Payment Methods</h2>
        <article className="mt-5 flex-row flex flex-wrap items-baseline
        justify-center gap-20">
          <div>
            <h2 className="font-bold">Mail to:</h2>
            <h2>{name}</h2>
            <h2>{streetAddress}</h2>
            <h2>{cityAddress}</h2>
          </div>
          <div>
            <h2 className="font-bold">Zelle:</h2>
            <h2>{name}</h2>
            <h2>{phone}</h2>
          </div>
          <div>
            <h2 className="font-bold">Venmo:</h2>
            <h2>{venmo}</h2>
          </div>
        </article> 
      </footer>
    </>
  )
}