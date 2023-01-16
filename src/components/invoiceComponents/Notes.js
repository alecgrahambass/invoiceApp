import { useState } from "react"

export default function Notes({ notes, isNote }) {

  

  function showNotes(notes) {
       <>

    </>
  }
  return (
    <>
    {isNote ? 
          <section className="m-5 p-5">
          <h2 className="mb-2 text-xl italic text-decoration: underline">Additional Notes</h2>
          <section className="bg-gray-100">
          <p>{notes}</p>
          </section>
        </section>
       : 
       <section>

       </section>
       }
    </>
    
  )
} 