$(document).ready(function () {
    $('#searchBox').keyup(function () {
        let query = $(this).val().toLowerCase();
        let count = 0;

        $('#courseList li').each(function () {
            let text = $(this).text();
            let lowerText = text.toLowerCase();

            if (lowerText.includes(query) && query !== "") {
                let highlighted = text.replace(
                    new RegExp(query, "gi"),
                    match => `<span class="highlight">${match}</span>`
                );
                $(this).html(highlighted);
                $(this).show();
                count++;
            } else if (query === "") {
                $(this).html(text);
                $(this).show();
            } else {
                $(this).hide();
            }
        });

        $('#count').text(count);
    });
});