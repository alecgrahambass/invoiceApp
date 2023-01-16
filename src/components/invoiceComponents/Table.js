import { getActiveElement } from "@testing-library/user-event/dist/utils"
import React, { useState } from "react"
export default function Table({list, hourlyRate, setTotalHours, totalHours, jobTitle }) {


  function addHours() {
    let previousHours = 0;
  
    list.map(({hours}) => {
      let currentHours = hours;
    
      currentHours = currentHours + previousHours;
      previousHours = currentHours
    })
  return previousHours
  
  }

  setTotalHours(addHours())


 return ( 
  <>
    <section className="m-5 p-5">
      <article className="grid grid-cols-2 gap-10">
      <h2 className="flex flex-col mb-2 font-bold">{jobTitle}</h2>
      <h2 className="flex flex-col mb-2">Hourly Rate: ${hourlyRate}</h2>
      </article>
  
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
        <tfoot className="border-t-2 border-black"> 
          <tr className="font-bold">
            <td>Total Hours:</td>
            <td></td>
            <td></td>
            <td>{totalHours}</td>
          </tr>
        
        </tfoot>
      </table> 
      <div >
        <h2 className="mr-20 flex items-end justify-end text-gray-800
      text-4xl font-bold">Total: ${totalHours * hourlyRate}</h2>
      </div>
      </section>
  </>
 )
}  