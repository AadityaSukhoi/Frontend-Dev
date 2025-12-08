const BASE = "http://localhost:3007/students"

export function getAllStudents() {
  return fetch(BASE).then(res => {
    if (!res.ok) throw new Error("Failed to fetch")
    return res.json()
  })
}

export function getStudentById(id) {
  return fetch(`${BASE}/${id}`).then(res => {
    if (!res.ok) throw new Error("Failed to fetch")
    return res.json()
  })
}

export function createStudent(student) {
  return fetch(BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student)
  }).then(res => {
    if (!res.ok) throw new Error("Failed to create")
    return res.json()
  })
}

export function updateStudent(id, student) {
  return fetch(`${BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student)
  }).then(res => {
    if (!res.ok) throw new Error("Failed to update")
    return res.json()
  })
}

export function deleteStudent(id) {
  return fetch(`${BASE}/${id}`, {
    method: "DELETE"
  }).then(res => {
    if (!res.ok) throw new Error("Failed to delete")
    return res
  })
}