$(document).ready(function() {
    $.ajax({
        url: "/currentPerson"
    }).then(function(data) {
       $('.name').append(data.name);
    });
});