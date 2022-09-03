export default function ClientDetails({clientName, clientEmail, clientPhone}) {
  return (
    <> 
      <section className="mt-5 grid-rows-2">
        <h2>Bill to:</h2>
        <ul className="p-5">
          <li>{clientName}</li>
          <li>{clientEmail}</li>
          <li>{clientPhone}</li>
        </ul>
      </section>
    </>
  )
}