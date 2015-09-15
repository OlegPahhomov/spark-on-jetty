(function () {
    window.onload = function() {
        $.ajax("localhost:4567/resource", {
            success: function (response) {
                alert(response);
            }
        });
    };
})();