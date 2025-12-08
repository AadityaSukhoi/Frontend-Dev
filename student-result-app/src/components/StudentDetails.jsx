import React from "react"

export default function StudentDetails(props) {
  const { student, onBack } = props

  if (!student) {
    return <div className="center">No student selected.</div>
  }

  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <div className="title">Student Details</div>
        <div className="actions">
          <button onClick={onBack}>Back</button>
        </div>
      </div>

      <div style={{ marginTop:12 }}>
        <div className="card" style={{ padding:12 }}>
          <div><strong>Name:</strong> {student.name}</div>
          <div><strong>Section:</strong> {student.section}</div>
          <div><strong>Marks:</strong> {student.marks}</div>
          <div><strong>Grade:</strong> {student.grade}</div>
        </div>
      </div>
    </div>
  )
}