$(document).ready(function () {
// console.log(subcategory_data);

    $("#hiddenLi").hide();

    $("#mens_cat").mouseenter(function () {
            var lst_str = '';
            var cat_id = $(this).val();
            for(let i=0; i<subcategory_data.length;i++){
                console.log("getting list", subcategory_data[i]);
                if(subcategory_data[i].cat_id == cat_id ){
                    lst_str += `<li style="font-family:cursive ;"><b><a href="product-listing.html?cat_id=${cat_id}&sub_cat_id=${subcategory_data[i].sub_cat_id}">${subcategory_data[i].sub_cat_name}</a> </b></li>`
                    
                }
              
            }
            $('#cat_list').html(lst_str);
        
            
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
        var lst_str1 = '';
            var cat_id1 = $(this).val();
            for(let i=0; i<subcategory_data.length;i++){
                console.log("getting list", subcategory_data[i]);
                if(subcategory_data[i].cat_id == cat_id1 ){
                    lst_str1 += `<li style="font-family:cursive ;"><b><a href="product-listing.html?cat_id=${cat_id}&sub_cat_id=${subcategory_data[i].sub_cat_id}">${subcategory_data[i].sub_cat_name}</a> </b></li>`
                    
                }
              
            }
            $('#women_cat_list').html(lst_str1);

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


