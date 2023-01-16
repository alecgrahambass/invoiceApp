import React, { useState, useEffect } from "react"
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"
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
    setTotalHours,
    totalHours,
    setHours
}) {

  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newDay = {
      id:uuidv4(),
      date,
      timeIn,
      timeOut,
      hours: addTime(date, timeIn,timeOut),
      totalHours: 0
    }
    setDate("")
    setTimeIn("")
    setTimeOut("")
    setHours("")
    setTotalHours(0)
    setList([...list, newDay])
    setIsEditing(false)
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
//Edit Function
const editRow = (id) => {
  const editingRow = list.find((row) => row.id === id)
  setList(list.filter((row) => row.id !== id))
  setIsEditing(true)
  setDate(editingRow.date)
  setTimeIn(editingRow.timeIn)
  setTimeOut(editingRow.timeOut)
  //setHours(addTime(editingRow.date, editingRow.timeIn,editingRow.timeOut))
}
//delete function

function deleteRow(id) {
  setList(list.filter((row) => row.id !== id))
}
 

  return (
    <>
    <form onSubmit={handleSubmit}>
    <h1 className="sectionTitle">Time Sheet Information</h1>
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
    transition-all duration-300" >
      {isEditing ? "Edit Day" : "Add Day"}
    </button>
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
          <td>
            <button onClick={() => deleteRow(id)}><AiOutlineDelete className="text-red-500 text-2xl"/></button>
          </td>
          <td>
            <button onClick={() => editRow(id)}><AiOutlineEdit className="text-blue-500 text-2xl"/></button>
          </td>
        </tr>
      </tbody> 
        </React.Fragment>
      ))}
      </table>
    </>

  )
    
}
 