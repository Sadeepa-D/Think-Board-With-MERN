import React from 'react'
import "./NoteCard.css"

const NoteCard = () => {
  return (
    <>
      <div className="note_card">
        <h3>title</h3>
        <p>Content here</p>
        <button className="dt_btn">delete</button>
      </div>
    </>
  )
}

export default NoteCard