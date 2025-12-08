const base = "http://localhost:3005/timetable"

const daySelect = document.getElementById("daySelect")
const result = document.getElementById("result")

daySelect.onchange = () => {
    const day = daySelect.value
    if (!day) return result.innerHTML = ""
    fetch(base + "?day=" + day)
        .then(r => r.json())
        .then(data => {
            result.innerHTML = ""
            if (data.length === 0) {
                result.innerHTML = "<div class='msg'>No classes today.</div>"
                return
            }
            data.forEach(item => {
                result.innerHTML += `
                    <div class="card">
                        <div>${item.subject}</div>
                        <div>${item.faculty}</div>
                        <div>${item.time}</div>
                    </div>
                `
            })
        })
}