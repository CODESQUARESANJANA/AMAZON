$(document).ready(function () {
console.log(subcategory_data);

    $("#hiddenLi").hide();

    $("#mens_cat").mouseenter(function () {

            var cat_id = $(this).val();
            
        $('#hiddenLi').css('display' , 'flex')
        $("#hiddenLi").show();
    })


    $(" #hiddenLi").mouseleave(function () {

        $("#hiddenLi").hide().fadeOut();

    });
    

    $('#openbtn').on('click', function () {
        document.getElementById("mySidebar1").style.width = "300px";
        document.getElementById("main").style.marginLeft = "250px";

    })

    $('#closenav').on('click', function () {
        document.getElementById("mySidebar1").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    })



    $("#hiddenLi2").hide();

    $("#women_cat").mouseenter(function () {
        $('#hiddenLi2').css('display' , 'flex')
        $("#hiddenLi2").show();
    })


    $("#hiddenLi2").mouseleave(function () {

        $("#hiddenLi2").hide().fadeOut()

    });


    $("#hiddenLi3").hide();

    $("#kids_cat").mouseenter(function () {
        $('#hiddenLi3').css('display' , 'flex')
        $("#hiddenLi3").show();
    })


    $("#hiddenLi3").mouseleave(function () {

        $("#hiddenLi3").hide().fadeOut()

    });


});

//mens_cat


