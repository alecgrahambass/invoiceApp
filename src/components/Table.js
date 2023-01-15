import { getActiveElement } from "@testing-library/user-event/dist/utils"
import React from "react"
export default function Table({list, hourlyRate }) {


function addHours() {
  let previousHours = 0;

  list.map(({hours}) => {
    let currentHours = hours;
  
    currentHours = currentHours + previousHours;
    previousHours = currentHours
  })
return previousHours

}


 return ( 
  <>
  <h2 className="mb-2 font-bold">Hourly Rate: ${hourlyRate}</h2>
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
      <div align="right" className="mr-5">
        <h2 className="font-bold">Total Number of Hours: {addHours()} hours</h2>
        <h2 className="mt-1 font-bold">Total: ${addHours() * hourlyRate}</h2>
      </div>
      <div>
         
      </div>
      
  </>
 )
}  