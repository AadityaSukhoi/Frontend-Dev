jq1(document).ready(function () {
    let slides = ["Slide 1", "Slide 2", "Slide 3"];
    let index = 0;

    setInterval(function () {
        jq1("#carousel").text(slides[index]);
        index = (index + 1) % slides.length;
    }, 1500);

    jq1(".widget").click(function () {
        jq1(".widget").removeClass("active");
        jq1(this).addClass("active");
    });
});

jq2(document).ready(function () {
    jq2(".widget").hover(function (e) {
        let tip = jq2(this).attr("data-tip");
        jq2("#tooltip").text(tip).css({
            top: e.pageY + 10,
            left: e.pageX + 10
        }).fadeIn(200);
    }, function () {
        jq2("#tooltip").fadeOut(200);
    });

    setTimeout(function () {
        jq2("#notificationModal").fadeIn(300);
    }, 2000);

    jq2("#closeModal").click(function () {
        jq2("#notificationModal").fadeOut(200);
    });
});