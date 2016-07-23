$(document).ready(function() {
    $.ajax({
        url: "/currentUser"
    }).then(function(data) {
       $('.name').append(data.name);
    });
});