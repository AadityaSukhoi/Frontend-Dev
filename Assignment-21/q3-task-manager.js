const baseUrl = "http://localhost:3003/tasks"

function loadTasks(filter="") {
    let url = baseUrl
    if (filter === "Completed") url += "?completed=true"
    else if (filter) url += "?priority=" + filter

    $.get(url, data => {
        $("#taskList").empty()
        data.forEach(task => {
            $("#taskList").append(`
                <li>
                    <input type="checkbox" class="toggle" data-id="${task.id}" ${task.completed ? "checked" : ""}>
                    ${task.title} - ${task.priority}
                </li>
            `)
        })
    })
}

$("#filter").on("change", function() {
    loadTasks($(this).val())
})

$(document).on("click", ".toggle", function() {
    const id = $(this).data("id")
    const completed = $(this).is(":checked")
    $.ajax({
        url: `${baseUrl}/${id}`,
        method: "PATCH",
        data: { completed }
    })
})

loadTasks()