export default function TableForm({date, setDate, timeIn, setTimeIn, timeOut, setTimeOut}) {
  return (
    <article className="lg:grid grid-cols-3 gap-10">
      <div className="flex flex-col">
        <label htmlFor="date">Date</label>
          <input type="text" name="date" id="date"
          placeholder="Date" value={date} onChange={(e) => 
          setDate(e.target.value)}/>
      </div>
      <div className="flex flex-col">
        <label htmlFor="timeIn">Time In</label>
          <input type="time" name="timeIn" id="timeIn"
          placeholder="Time In" value={timeIn} onChange={(e) =>
          setTimeIn(e.target.value)}/>
      </div>
      <div className="flex flex-col">
        <label htmlFor="timeOut">Time Out</label>
          <input type="time" name="timeOut" id="timeOut"
          placeholder="Time Out" value={timeOut} onChange={(e) =>
          setTimeOut(e.target.value)}/>
      </div>
    </article>
  )
    
}
 