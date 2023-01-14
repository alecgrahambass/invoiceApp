import { getActiveElement } from "@testing-library/user-event/dist/utils"

export default function Table({date, timeIn, timeOut }) {

  function addTime(date,timeIn, timeOut) {
      let dateTimeIn = new Date(`${date} ${timeIn}`)
      let dateTimeOut = new Date(`${date} ${timeOut}`)
      let difference = dateTimeOut.getTime() - dateTimeIn.getTime()
      let minutes = (difference/1000)/60
      console.log(minutes)
    return Math.round((minutes/60) * 100) / 100
  }
 return ( 
  <>
    <table width="100%">
      <thead>
        <tr className="bg-gray-100 p-1" >
          <td>Date</td>
          <td>Time in</td>
          <td>Time out</td>
          <td>Number of Hours</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{date}</td>
          <td>{timeIn}</td>
          <td>{timeOut}</td>
          <td>{addTime(date, timeIn, timeOut)}</td>
        </tr>
      </tbody>
    </table>
  </>
 )
}  