$(document).ready(function () {

    $("#hiddenLi").hide();

    $("#mens_cat").mouseenter(function () {
        $('#hiddenLi').css('display' , 'flex');
        $("#hiddenLi").show();
    })


    $("#mens_cat, #hiddenLi").mouseleave(function () {

        $("#hiddenLi").hide()

    });

    $('#openbtn').on('click', function () {
        document.getElementById("mySidebar1").style.width = "300px";
        document.getElementById("main").style.marginLeft = "250px";

    })

    $('#closenav').on('click', function () {
        document.getElementById("mySidebar1").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    })






});

//mens_cat


