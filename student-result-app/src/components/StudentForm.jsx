import React, { useState } from "react"

export default function StudentForm(props) {
  const { initial, onCancel, onSubmit } = props

  const [name, setName] = useState(initial?.name || "")
  const [section, setSection] = useState(initial?.section || "")
  const [marks, setMarks] = useState(initial?.marks ?? "")
  const [grade, setGrade] = useState(initial?.grade || "")

  const handleSubmit = (e) => {
    e.preventDefault()
    const student = {
      name: name.trim(),
      section: section.trim(),
      marks: Number(marks),
      grade: grade.trim()
    }
    onSubmit(student)
  }

  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <div className="title">{initial ? "Edit Student" : "Add Student"}</div>
        <div className="actions">
          <button onClick={onCancel}>Back</button>
        </div>
      </div>

      <form onSubmit={handleSubmit} style={{ marginTop:12 }}>
        <div className="form-row">
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
          <input value={section} onChange={e => setSection(e.target.value)} placeholder="Section" required />
        </div>
        <div className="form-row">
          <input value={marks} onChange={e => setMarks(e.target.value)} placeholder="Marks" required type="number" />
          <input value={grade} onChange={e => setGrade(e.target.value)} placeholder="Grade" required />
        </div>
        <div style={{ display:"flex", gap:8 }}>
          <button type="submit" className="primary">Save</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  )
}