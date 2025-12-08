$(document).ready(function () {
    $('#searchBox').keyup(function () {
        let query = $(this).val().trim();

        $('#loading').show();

        $.ajax({
            url: `http://localhost:3001/products?q=${query}`,
            method: 'GET',
            success: function (data) {
                $('#loading').hide();
                $('#results').empty();

                if (data.length === 0) {
                    $('#results').html("<p>No products found</p>");
                    return;
                }

                data.forEach(item => {
                    $('#results').append(`
                        <div class="item">
                            <img src="${item.image}" alt="">
                            <div>
                                <h3>${item.name}</h3>
                                <p>₹${item.price}</p>
                            </div>
                        </div>
                    `);
                });
            }
        });
    });
});