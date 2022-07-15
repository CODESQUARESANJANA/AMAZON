$(document).ready(function () {
// console.log(subcategory_data);
    //mens category dynamic list display 
    $("#hiddenLi").hide();

    $("#mens_cat").mouseenter(function () {
            var lst_str = '';
            var cat_id = $(this).val();
            for(let i=0; i<subcategory_data.length;i++){
                console.log("getting list", subcategory_data[i]);
                if(subcategory_data[i].cat_id == cat_id ){
                    lst_str += `<li style=" text-transform:uppercase;"><a href="product-listing.html?cat_id=${cat_id}&sub_cat_id=${subcategory_data[i].sub_cat_id}">${subcategory_data[i].sub_cat_name}*</a></li>`
                    
                }
              
            }
            $('#cat_list').html(lst_str);
        
            
        $('#hiddenLi').css('display' , 'flex')
        $("#hiddenLi").show();
        // $("#hideenLi2, #hiddenLi3").hide();
    })


    $(" #hiddenLi").mouseleave(function () {

        $("#hiddenLi").hide();

    });
    
    //side bar diplay code
    $('#openbtn').on('click', function () {
        document.getElementById("mySidebar1").style.width = "300px";
        document.getElementById("main").style.marginLeft = "250px";

    })

    $('#closenav').on('click', function () {
        document.getElementById("mySidebar1").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    })


    //women categogy dynamic display
    $("#hiddenLi2").hide();

    $("#women_cat").mouseenter(function () {
        var lst_str1 = '';
            var cat_id1 = $(this).val();
            for(let i=0; i<subcategory_data.length;i++){
                console.log("getting list", subcategory_data[i]);
                if(subcategory_data[i].cat_id == cat_id1 ){
                    lst_str1 += `<li style="text-transform:uppercase;"><a href="product-listing.html?cat_id=${cat_id1}&sub_cat_id=${subcategory_data[i].sub_cat_id}">${subcategory_data[i].sub_cat_name}*</a> </li>`
                    
                }
              
            }
            $('#women_cat_list').html(lst_str1);

        $('#hiddenLi2').css('display' , 'flex')
        $("#hiddenLi2").show();
    })


    $("#hiddenLi2").mouseleave(function () {

        $("#hiddenLi2").hide().fadeOut()

    });

        //kid category list display dynamic
    $("#hiddenLi3").hide();

    $("#kids_cat").mouseenter(function () {

        var lst_str2 = '';
        var cat_id2 = $(this).val();
        for(let i=0; i<subcategory_data.length;i++){
            console.log("getting list", subcategory_data[i]);
            if(subcategory_data[i].cat_id == cat_id2 ){
                lst_str2 += `<li style=" text-transform:uppercase;"><a href="product-listing.html?cat_id=${cat_id2}&sub_cat_id=${subcategory_data[i].sub_cat_id}">${subcategory_data[i].sub_cat_name}*</a></li>`
                
            }
          
        }
        $('#kid_cat_list').html(lst_str2);

        $('#hiddenLi3').css('display' , 'flex')
        $("#hiddenLi3").show();
    })


    $("#hiddenLi3").mouseleave(function () {

        $("#hiddenLi3").hide().fadeOut()

    });


 
});

//mens_cat


