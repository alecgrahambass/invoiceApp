export default function MainDetails({name, streetAddress, cityAddress, email, phone}) {
  return (
    <>
      <section>
        <ul className="flex flex-col items-end justify-end">
          <li>{streetAddress}</li>
          <li>{cityAddress}</li>
          <li className="mt-3">{email}</li>
          <li className="mt-3">{phone}</li>
        </ul>
      </section>
    </>
  )
}