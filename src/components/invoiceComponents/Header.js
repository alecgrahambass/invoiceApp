export default function Header({name}) {
  return (
    <div className="m-3 p-3">
    <h1 className=" uppercase tracking-wide text-6xl font">Invoice</h1>
    <h2 className="mt-3 flex justify-center italic text-3xl font">{name}</h2>
  </div>
  )
}