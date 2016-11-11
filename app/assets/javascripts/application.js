// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require Chart
//= require materialize.js


$( document ).ready(function(){

    $(".dropdown-button").dropdown();
    $('.collapsible').collapsible();
    $('.modal').modal();
    $('.slider').slider({full_width: true});
    $(".button-collapse").sideNav();
    // $(window).load(function() {
    //     $('#modal1').modal('show');
    // });
    // $('#nav-search').click(function(){
    //     var search_nav = '<form> <div class="input-field">' +
    //                     '<input id="search" type="search" required>' +
    //                     '<label for="search"><i class="material-icons">search</i></label>' +
    //                     '<i id = "search-close" class="material-icons">close</i></div></form>';
    //     $('.nav-wrapper').html(search_nav);
    // });
    //
    // $('#search-close').click(function(){
    //     alert('ghost');
    //     var origin_nav = '<a href="#!" class="brand-logo"><i class="material-icons">cloud</i>Logo</a><ul class="right hide-on-med-and-down">' +
    //         '<li><span id="nav-search"><i class="material-icons left">search</i></span></li>' +
    //         '<li><a class="dropdown-button" href="#!" data-activates="dropdown2"><i class="small material-icons left">notifications</i><span class="new badge red">3</span></a></li>' +
    //         '<li><a class="dropdown-button" href="#!" data-activates="dropdown1"><i class="small material-icons left">comment</i><span class="new badge red">4</span></a></li>' +
    //         '</ul>';
    //     $('.nav-wrapper').html(origin_nav);
    // });

})

// activity chart js

// var ctx = document.getElementById("myChart");
// // var ctx = document.getElementById("myChart").getContext("2d");
// var ctx = $("#myChart");
// var myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ["January", "February", "March", "April", "May", "June", "July"],
//         datasets: [
//             {
//                 label: "Data use status",
//                 fill: false,
//                 lineTension: 0.1,
//                 backgroundColor: "rgba(75,192,192,0.4)",
//                 borderColor: "rgba(75,192,192,1)",
//                 borderCapStyle: 'butt',
//                 borderDash: [],
//                 borderDashOffset: 0.0,
//                 borderJoinStyle: 'miter',
//                 pointBorderColor: "rgba(75,192,192,1)",
//                 pointBackgroundColor: "#fff",
//                 pointBorderWidth: 1,
//                 pointHoverRadius: 5,
//                 pointHoverBackgroundColor: "rgba(75,192,192,1)",
//                 pointHoverBorderColor: "rgba(220,220,220,1)",
//                 pointHoverBorderWidth: 2,
//                 pointRadius: 1,
//                 pointHitRadius: 10,
//                 data: [65, 59, 80, 81, 56, 55, 40],
//                 spanGaps: false,
//             }
//         ]
//     },
//     options: {
//         title: {
//             display: true,
//             text: 'User Manager Statement'
//         }
//
//
//     }
// });



// var data = {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//         {
//             label: "My First dataset",
//             fill: false,
//             lineTension: 0.1,
//             backgroundColor: "rgba(75,192,192,0.4)",
//             borderColor: "rgba(75,192,192,1)",
//             borderCapStyle: 'butt',
//             borderDash: [],
//             borderDashOffset: 0.0,
//             borderJoinStyle: 'miter',
//             pointBorderColor: "rgba(75,192,192,1)",
//             pointBackgroundColor: "#fff",
//             pointBorderWidth: 1,
//             pointHoverRadius: 5,
//             pointHoverBackgroundColor: "rgba(75,192,192,1)",
//             pointHoverBorderColor: "rgba(220,220,220,1)",
//             pointHoverBorderWidth: 2,
//             pointRadius: 1,
//             pointHitRadius: 10,
//             data: [65, 59, 80, 81, 56, 55, 40],
//             spanGaps: false,
//         }
//     ]
// };
//
// var options = {
//     title: {
//         display: true,
//         text: 'Custom Chart Title'
//     }
//
// };