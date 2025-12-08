const base = "http://localhost:3006/users"

const form = document.getElementById("regForm")
const msg = document.getElementById("message")

form.onsubmit = e => {
    e.preventDefault()
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value

    axios.get(base + "?email=" + email)
        .then(res => {
            if (res.data.length > 0) {
                msg.textContent = "Email already registered."
                msg.className = "msg error"
            } else {
                axios.post(base, { name, email })
                    .then(() => {
                        msg.textContent = "Registration successful."
                        msg.className = "msg success"
                        form.reset()
                    })
            }
        })
}