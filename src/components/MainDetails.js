export default function MainDetails({name, streetAddress, cityAddress, email, phone}) {
  return (
    <>
      <section>
        <h2 className=" flex justify-end font-bold italic text-xl">{name}</h2>
        <ul className="flex flex-col items-end justify-end">
          <li>{streetAddress}</li>
          <li>{cityAddress}</li>
          <li>{email}</li>
          <li>{phone}</li>
        </ul>
      </section>
    </>
  )
}