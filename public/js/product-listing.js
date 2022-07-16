
// console.log(subcategory_data);
// sitepoint
$(document).ready(function(){

  var product_listing_details = [];

  $('#header').load('topHEader.html');
  $('#footer').load('footer.html');


const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

const param_cat_id = urlParams.get('cat_id');
const param_sub_category_id = urlParams.get('sub_cat_id');
// console.log(cat_id,
//   sub_category_id);

  // category_data.forEach(function(value , index){
  //   console.log(value);
  // });
 
  Product_data.forEach(function(value , index){
    
    if(value.cat_id == param_cat_id && value.sub_cat_id == param_sub_category_id){
      console.log(value.sub_cat_id);
        product_listing_details.push(value);
        $('#listing').append(`<div value = "${value.product_id}" class="card m-2 product-details-page" style="width: 15rem; margin-right:1%;">
        <img class="card-img-top" src="${value.product_img}"
            alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">₹${value.product_price}</h5>
            <p class="card-text"><del>₹${value.product_discount_price} </del> <br> ${value.product_description}
                Shirt <br><i class="fa-solid fa-star" style="font-size: smaller;"></i><i
                    class="fa-solid fa-star" style="font-size: smaller;"></i>
                    <i class="fa-solid fa-star" style="font-size: smaller;"></i><i class="fa-solid fa-star"
                    style="font-size: smaller;"></i><i class="fa-regular fa-star"
                    style="font-size: smaller;"></i><br>${value.product_rating_count}</p>
        </div>
    </div>`)
    }
    
  });

  // for directing to the detail page
  $('.product-details-page').on('click' , function(){
    var p_id = $(this).attr('value');
    // alert(p_id)
    window.location.href = `detailsPage.html?product_id=${p_id}`;
  })

  
 
      // for showing all category
      for(let i=0; i<subcategory_data.length;i++){
        console.log(subcategory_data[i])
          // console.log("getting list", subcategory_data[i]);
          if(subcategory_data[i].cat_id == param_cat_id ){
            if(param_cat_id == 2){
              $('#cat_type').text('Women');
            }
            else if(param_cat_id == 3){
              $('#cat_type').text('kid');
            }
            else{
              $('#cat_type').text('Men');
            }
            
          $('#list2').append(`<li><a href="product-listing.html?cat_id=${param_cat_id}&sub_cat_id=${subcategory_data[i].sub_cat_id}">${subcategory_data[i].sub_cat_name}*</a> </li>`)
          $('#women').append(`<li><a href="product-listing.html?cat_id=${param_cat_id}&sub_cat_id=${subcategory_data[i].sub_cat_id}">${subcategory_data[i].sub_cat_name}*</a> </li>`)
            
              
          }
        
      }

});

// $('#list2').append(`<a href='product-listing.html?cat_id=${value.cate_id}&sub_cat_id=${value.sub_cat_id}`)

//  for women page
// for(let i=0; i<subcategory_data.length;i++){
//   if(subcategory_data[i].cat_id == param_cat_id ){
//     $('#women').append(`<li><a href="product-listing.html?cat_id=${param_cat_id}&sub_cat_id=${subcategory_data[i].sub_cat_id}">${subcategory_data[i].sub_cat_name}*</a> </li>`)
              
//   }
// }
     