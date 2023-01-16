export default function NotesForm({
  notes,
  setNotes,
  setIsNote
}) {
  function update(e){
    setNotes(e.target.value)
    setIsNote(true)
  }
  return(
    <>
      <h1 className="sectionTitle"> Additional Notes</h1>
      <textarea
        name="notes"
        id="notes"
        cols="30"
        rows="10"
        placeholder="Additional notes to client"
        value={notes}
        onChange={(e) =>update(e)}
      />
    </>
  )
}