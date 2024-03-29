export default function Dates({invoiceNumber, invoiceDate, dueDate}) {
  return (
    <>
    <section className="grid-row-2">
      <article className=" my-5 flex items-end justify-end">
        <ul>
          <li className="p-1">
            <span className="font-bold">Invoice # </span> {invoiceNumber}
          </li>
          <li className="p-1">
            <span className="font-bold">Invoice Date: </span> {invoiceDate}
            </li>
          <li className="p-1">
            <div className="bg-gray-100">
            <span className="font-bold">Due Date: </span> {dueDate}
            </div>
            </li>
        </ul>      
      </article>
    </section>
    </>
  )
}