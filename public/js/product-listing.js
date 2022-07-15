
// console.log(subcategory_data);
// sitepoint
$(document).ready(function(){

  var product_listing_details = [];

  $('#header').load('topHEader.html');
  $('#footer').load('footer.html');


const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

const param_cat_id = urlParams.get('cate_id');
const param_sub_category_id = urlParams.get('sub_cat_id');
// console.log(cat_id,
//   sub_category_id);

  // category_data.forEach(function(value , index){
  //   console.log(value);
  // });
 
  Product_data.forEach(function(value , index){
    
    if(value.cate_id == param_cat_id && value.sub_cat_id == param_sub_category_id){
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

  $('.product-details-page').on('click' , function(){
    var p_id = $(this).attr('value');
    // alert(p_id)
    window.location.href = `detailsPage.html?product_id=${p_id}`;
  })

  
  console.log(product_listing_details);

});




