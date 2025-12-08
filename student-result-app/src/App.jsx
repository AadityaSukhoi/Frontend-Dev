import React, { useState } from "react"
import StudentList from "./components/StudentList.jsx"
import StudentForm from "./components/StudentForm.jsx"
import StudentDetails from "./components/StudentDetails.jsx"
import * as service from "./services/studentService.js"

export default function App() {
  const [students, setStudents] = useState([])
  const [mode, setMode] = useState("list")
  const [selectedId, setSelectedId] = useState(null)
  const [formInitial, setFormInitial] = useState(null)

  const loadStudents = () => {
    service.getAllStudents()
      .then(data => {
        setStudents(data)
      })
      .catch(() => {
        alert("Failed to load students")
      })
  }

  const handleAdd = () => {
    setFormInitial(null)
    setMode("add")
  }

  const handleEdit = (id) => {
    service.getStudentById(id)
      .then(data => {
        setFormInitial(data)
        setSelectedId(id)
        setMode("edit")
      })
      .catch(() => {
        alert("Failed to load student for edit")
      })
  }

  const handleDelete = (id) => {
    const ok = window.confirm("Are you sure you want to delete this student?")
    if (!ok) return
    service.deleteStudent(id)
      .then(() => {
        alert("Student deleted. Click Load Students to refresh.")
      })
      .catch(() => {
        alert("Failed to delete student")
      })
  }

  const handleView = (id) => {
    service.getStudentById(id)
      .then(data => {
        setSelectedId(id)
        setFormInitial(data)
        setMode("details")
      })
      .catch(() => {
        alert("Failed to load student details")
      })
  }

  const handleFormCancel = () => {
    setMode("list")
    setFormInitial(null)
    setSelectedId(null)
  }

  const handleFormSubmitAdd = (student) => {
    service.createStudent(student)
      .then(() => {
        alert("Student added. Click Load Students to refresh.")
        setMode("list")
      })
      .catch(() => {
        alert("Failed to add student")
      })
  }

  const handleFormSubmitEdit = (student) => {
    if (!selectedId) return
    service.updateStudent(selectedId, student)
      .then(() => {
        alert("Student updated. Click Load Students to refresh.")
        setMode("list")
        setSelectedId(null)
        setFormInitial(null)
      })
      .catch(() => {
        alert("Failed to update student")
      })
  }

  return (
    <div className="container">
      <div className="header">
        <div className="title">Student Result Management System</div>
        <div className="small">Manual data fetching: click Load Students</div>
      </div>

      {mode === "list" && (
        <StudentList
          students={students}
          onLoad={loadStudents}
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onView={handleView}
        />
      )}

      {mode === "add" && (
        <StudentForm
          initial={null}
          onCancel={handleFormCancel}
          onSubmit={handleFormSubmitAdd}
        />
      )}

      {mode === "edit" && (
        <StudentForm
          initial={formInitial}
          onCancel={handleFormCancel}
          onSubmit={handleFormSubmitEdit}
        />
      )}

      {mode === "details" && (
        <StudentDetails
          student={formInitial}
          onBack={() => { setMode("list"); setFormInitial(null); setSelectedId(null) }}
        />
      )}
    </div>
  )
}