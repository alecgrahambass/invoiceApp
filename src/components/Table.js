import { getActiveElement } from "@testing-library/user-event/dist/utils"
import React from "react"
export default function Table({list }) {



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
      <table width="100%" className="mb-10">
      <thead>
        <tr className="bg-gray-100 p-1" >
          <td className="font-bold">Date</td>
          <td className="font-bold">Time in</td>
          <td className="font-bold">Time out</td>
          <td className="font-bold">Number of Hours</td>
        </tr>
      </thead>
      {list.map(({id, date, timeIn, timeOut, hours})=> (
       <React.Fragment key={id}>
 
      <tbody>
        <tr>
          <td>{date}</td>
          <td>{timeIn}</td>
          <td>{timeOut}</td>
          <td>{hours}</td>
        </tr>
      </tbody> 
        </React.Fragment>
      ))}
      </table>
      <h2>Total Number of Hours: {console.log(list)}</h2>
  </>
 )
}  