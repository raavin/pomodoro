jQuery(document).ready(function($) {
    $("#up-pom").click(function() {
        $("#timer").html(timer())
    });
    var seconds = 60;
    var countVar = 0
    var timer = setInterval(displayTimer, 1000);

    function displayTimer() {
        document.getElementById("pom-timer").innerHTML = counter() < 11 ? "<h2>24:0" + seconds + "</h2>": "<h2>24:" + seconds + "</h2>";
    }

    function counter() {
        if (seconds <= 1) {
            clearInterval(timer);
        }
        return seconds--;
    }
});
