import React from "react"

export default function StudentList(props) {
  const { students, onLoad, onAdd, onEdit, onDelete, onView } = props

  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <div className="title">Students</div>
        <div className="actions">
          <button onClick={onLoad} className="primary">Load Students</button>
          <button onClick={onAdd}>Add Student</button>
        </div>
      </div>

      {students.length === 0 ? (
        <div className="center">No students loaded. Click "Load Students" to fetch data.</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Section</th>
              <th>Marks</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(s => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.section}</td>
                <td>{s.marks}</td>
                <td>{s.grade}</td>
                <td>
                  <div style={{ display:"flex", gap:8 }}>
                    <button onClick={() => onView(s.id)}>View</button>
                    <button onClick={() => onEdit(s.id)}>Edit</button>
                    <button onClick={() => onDelete(s.id)} className="danger">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="small" style={{ marginTop:12 }}>
        After Add/Edit/Delete the data has changed on the server. Click "Load Students" to refresh the list.
      </div>
    </div>
  )
}