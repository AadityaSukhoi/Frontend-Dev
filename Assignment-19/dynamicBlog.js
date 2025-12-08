$(document).ready(function () {

    $('#addPost').click(function () {
        let text = $('#newPostText').val();
        let tag = $('#tagText').val();

        if (text.trim() === "") return;

        let post = $('<li class="post"></li>').text(text);

        if (tag.trim() !== "") {
            let tagEl = $('<span class="tag"></span>').text(tag);
            post.before(tagEl);
        }

        $('#blogList').append(post);
    });

    $('#prependPost').click(function () {
        let text = $('#newPostText').val();
        let tag = $('#tagText').val();

        if (text.trim() === "") return;

        let post = $('<li class="post"></li>').text(text);

        if (tag.trim() !== "") {
            let tagEl = $('<span class="tag"></span>').text(tag);
            post.after(tagEl);
        }

        $('#blogList').prepend(post);
    });

    $('#removeLast').click(function () {
        $('#blogList .post').last().remove();
    });

    $('#keywordSearch').keyup(function () {
        let keyword = $(this).val().toLowerCase();

        $('.post').each(function () {
            let text = $(this).text().toLowerCase();

            if (text.includes(keyword) && keyword !== "") {
                $(this).html($(this).text().replace(
                    new RegExp(keyword, "gi"),
                    match => `<span class="highlight">${match}</span>`
                ));
            } else {
                $(this).html($(this).text());
            }
        });
    });

});