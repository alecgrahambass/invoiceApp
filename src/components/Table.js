import { getActiveElement } from "@testing-library/user-event/dist/utils"

export default function Table({date, timeIn, timeOut }) {

  function addTime(timeIn, timeOut) {

    return timeIn
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
          <td>{addTime(timeIn, timeOut)}</td>
        </tr>
      </tbody>
    </table>
  </>
 )
}  