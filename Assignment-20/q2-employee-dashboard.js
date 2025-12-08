document.addEventListener("DOMContentLoaded", () => {
    loadEmployees();
});

function loadEmployees() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3002/employees");

    xhr.onload = function () {
        let data = JSON.parse(xhr.responseText);
        let table = document.getElementById("empTable");

        data.forEach(emp => {
            let row = document.createElement("tr");

            row.innerHTML = `
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td class="${emp.status}" id="status-${emp.id}">
                    ${emp.status}
                </td>
                <td>
                    <button onclick="toggleStatus(${emp.id})">Toggle</button>
                </td>
            `;

            table.appendChild(row);
        });
    };

    xhr.send();
}

function toggleStatus(id) {
    let statusCell = document.getElementById(`status-${id}`);
    let current = statusCell.textContent.trim();
    let newStatus = current === "active" ? "inactive" : "active";

    statusCell.textContent = newStatus;
    statusCell.className = newStatus;
    document.getElementById("error").style.display = "none";

    let xhr = new XMLHttpRequest();
    xhr.open("PATCH", `http://localhost:3002/employees/${id}`);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        if (xhr.status !== 200) {
            revert(statusCell, current);
        }
    };

    xhr.onerror = function () {
        revert(statusCell, current);
    };

    xhr.send(JSON.stringify({ status: newStatus }));
}

function revert(cell, originalStatus) {
    cell.textContent = originalStatus;
    cell.className = originalStatus;
    document.getElementById("error").style.display = "block";
}