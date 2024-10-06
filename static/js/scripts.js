/*!
* Start Bootstrap - Simple Sidebar v6.0.6 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

$(function () {
    $('#myTab li:eq(1) a').tab('show');
});

$(document).ready(function(){
    $('#button').click(function(){
        $.post("/index",
            {
                "geolocation_val": $("#geolocation").val(),
            },
            function(data,status){
                $("#output_geolocation").text(data.geolocation_val)

            }
        );
    });
});

function updateData() {
    $.ajax({
        url: '/update',
        type: 'POST',
        success: function(response) {
            var divElement = document.getElementById('geolocation');
            divElement.innerHTML = response;
        }
    });
}