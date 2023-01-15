import React from "react"
import {useEffect} from "react"
import {v4 as uuidv4} from "uuid"


export default function TableForm({
    date, 
    setDate, 
    timeIn, 
    setTimeIn, 
    timeOut, 
    setTimeOut, 
    list, 
    setList,
    hours,
    setHours
}) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const newDay = {
      id:uuidv4(),
      date,
      timeIn,
      timeOut,
      hours: addTime(date, timeIn,timeOut)
    }
    setDate("")
    setTimeIn("")
    setTimeOut("")
    setHours("")
    setList([...list, newDay])
  }
  
  function addTime(date,timeIn, timeOut) {
    let dateTimeIn = new Date(`${date} ${timeIn}`)
    let dateTimeOut = new Date(`${date} ${timeOut}`)
      
    if (timeOut <= timeIn) {
      dateTimeOut.setDate(dateTimeOut.getDate() + 1)
    }

    let difference = dateTimeOut.getTime() - dateTimeIn.getTime()
    let minutes = (difference/1000)/60

  return Math.round((minutes/60) * 100) / 100
}


  return (
    <>
    <form onSubmit={handleSubmit}>
    <article className="lg:grid grid-cols-3 gap-10">
    <div className="flex flex-col">
      <label htmlFor="date">Date</label>
        <input type="date" name="date" id="date"
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
        setTimeOut(e.target.value)}
        />
    </div>
  </article>
  <button type="submit" 
    className="mb-5  bg-blue-500 text-white
    font-bold py-2 px-8
    rounded shadow border-2 border-blue-500
    hover:bg-transparent hover:text-blue-500
    transition-all duration-300" >Add day</button>
    </form>

    {/*Table Items*/}
    <table width="100%" className="mb-10">
      <thead>
        <tr className="bg-gray-100 p-1" >
          <td className="font-bold">Date</td>
          <td className="font-bold">Time in</td>
          <td className="font-bold">Time out</td>
        </tr>
      </thead>
      {list.map(({id, date, timeIn, timeOut, hours})=> (
       <React.Fragment key={id}>
      <tbody>
        <tr>
          <td>{date}</td>
          <td>{timeIn}</td>
          <td>{timeOut}</td>
        </tr>
      </tbody> 
        </React.Fragment>
      ))}
      </table>
    </>

  )
    
}
 