export default function Notes({ notes }) {
  return (
    <>
      <section className="mt-10 mb-5">
        <h2 className="mb-3 text-xl italic text-decoration: underline">Additional Notes</h2>
        <p>{notes}</p>
      </section>
    </>
  )
} 