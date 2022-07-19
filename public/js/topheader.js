$(document).ready(function () {

    

    // $("#submit_fun").click(function (e) { 
    //     console.log(Product_data)
        
    // });

    // console.log(subcategory_data);
        // console.log(window.location.href);
             //breadcrum for navigation
             
    
             //dynamic title
    
         
    
             
         
            
    
            //  $('document').attr("title",'${sub_cat_name}')
    
            //window.location.search gives query string 
             const queryString = window.location.search;
            //  console.log(queryString);
             const urlParams = new URLSearchParams(queryString);
             const param_cat_id1 = urlParams.get('cat_id');
             const param_sub_category_id1 = urlParams.get('sub_cat_id');
             const param_product_name1 = urlParams.get("sub_cat_name");
            const param_product_id= urlParams.get("product_id")
            var path = "";
            var toName='';
       
    
            //dpcument.location.href gives the full url 
            var href = document.location.href;
            var s = href.split("/");
           
            console.log(s);
            var m = s[3].split('.');
    
        console.log(m[0])
        if(m[0]=='product-listing'){
            document.getElementById("titleChange").innerHTML=`Product Listing`;
            
        }
       
    
    
        if(m[0] == 'detailsPage'){
    
                document.getElementById("titleChange").innerHTML=`Product Details`;
        }
        else if(m[0]=='women-category'){
            document.getElementById("titleChange").innerHTML=`Women Category`;
            
        }
        else if(m[0]=='kid'){
            document.getElementById("titleChange").innerHTML=`Kid Category`;  
        }
        else if(m[0]=='index'){
            document.getElementById("titleChange").innerHTML=`Amazon`;  
        }
        else if(m[0]=='fashion'){
            document.getElementById("titleChange").innerHTML=`Fashion`;  
        }
        
        // console.log(m[1]);
            if(m[0]=="product-listing"){ 
                category_data.forEach(function(val , index){
                    if(val.cat_id == param_cat_id1 ){
                        console.log(val.cat_name);
                        // console.log(val.sub_cat_name);
                        $('#toBreadCrum').append(`<span> > &nbsp <a href="product-listing.html?cat_id=param.cat_id1"  style="text-transform:uppercase; color:black; text-decoration:none"> > ${val.cat_name}</a></span>`)
                    }
                })
                subcategory_data.forEach(function(value,index){
                    if(value.sub_cat_id==param_sub_category_id1){
                        console.log(value.sub_cat_name);
                        // alert(value.sub_cat_name)
                        $('#toBreadCrum').append(`<span > > &nbsp <a href="${urlParams}" style="text-transform:uppercase;color:black; text-decoration:none"> > ${value.sub_cat_name}</a> </span>`)
                    }
                })
    
                Product_data.forEach(function(value,index){
                    if(value.product_id==param_product_id){
                        console.log(value.product_name);
                        // alert(valu.product_name)
                        $('#toBreadCrum').append(`<span> > &nbsp <a href="" style="text-transform:uppercase;color:black; text-decoration:none"> > ${value.product_name}</a> </span>`)
                    }
                })
    
             
            }
    
           
            // if(m[0]=="product-listing"){
            //     Product_data.forEach(function(value,index){
            //         if(value.product_name=param_product_name){
            //             console.log(value.sub_cat_name);
            //         }
            //     })
            // }
            // for (var i=2;i<(s.length-1);i++) {
            // path+="<A HREF=\""+href.substring(0,href.indexOf("/"+s[i])+s[i].length+1)+"/\">"+(i == 2 ? "" : s[i])+"</A> / ";
            // }
            // i = s.length-1;
            // path += "<A HREF=\""+href.substring(0,href.indexOf(s[i])+s[i].length)+"\">"+s[i]+"</A>";
            // var url = path;
            // document.writeln(url);
    
       
    
    
    //mens category dynamic list display 
    
    
    
        $("#hiddenLi").hide();
    
        $("#mens_cat").mouseenter(function () {
                var lst_str = '';
                var cat_id = $(this).val();
                for(let i=0; i<subcategory_data.length;i++){
                    // console.log("getting list", subcategory_data[i]);
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
                    // console.log("getting list", subcategory_data[i]);
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
                // console.log("getting list", subcategory_data[i]);
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
    
    
    
    
    