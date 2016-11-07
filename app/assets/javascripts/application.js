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
//= require materialize-sprockets
$( document ).ready(function(){

    $(".dropdown-button").dropdown();
    $('.collapsible').collapsible();

    $('#nav-search').click(function(){
        var search_nav = '<form> <div class="input-field">' +
                        '<input id="search" type="search" required>' +
                        '<label for="search"><i class="material-icons">search</i></label>' +
                        '<i id = "search-close" class="material-icons">close</i></div></form>';
        $('.nav-wrapper').html(search_nav);
    });

    $('#search-close').click(function(){
        alert('ghost');
        var origin_nav = '<a href="#!" class="brand-logo"><i class="material-icons">cloud</i>Logo</a><ul class="right hide-on-med-and-down">' +
            '<li><span id="nav-search"><i class="material-icons left">search</i></span></li>' +
            '<li><a class="dropdown-button" href="#!" data-activates="dropdown2"><i class="small material-icons left">notifications</i><span class="new badge red">3</span></a></li>' +
            '<li><a class="dropdown-button" href="#!" data-activates="dropdown1"><i class="small material-icons left">comment</i><span class="new badge red">4</span></a></li>' +
            '</ul>';
        $('.nav-wrapper').html(origin_nav);
    });

})