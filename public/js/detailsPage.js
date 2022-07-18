$(function () {
  $("#header").load("topHeader.html");
  $("#footer").load("footer.html");
});

$(document).ready(function () {
  var details = [];
  var related_products =[];
  var queryString = window.location.search;
  console.log("queryString---", queryString);
  const product_detail_param = new URLSearchParams(queryString);
  console.log("product_detail_param---------", product_detail_param);

  var para_product_id = product_detail_param.get("product_id");
  console.log("para_product_id-------", para_product_id);
  Product_data.forEach(function (value, index) {
    if (value.product_id == para_product_id) {
      details.push(value);
      
    }
  });
  console.log(details)
  var para_sub_cat_id = details[0].sub_cat_id;
  console.log('para_sub_cat_id',para_sub_cat_id);
    Product_data.forEach(function (value, index) {
      if(value.sub_cat_id == para_sub_cat_id){
        related_products.push(value);
        $('.related_products_carousel').append(
          `<div class="swiper-slide">
      <div class="container">
        <div class="card" style="max-width: fit-content;">
          <img class="card-img-top" src="${value.product_img}" alt="Card image" style="width:100%">
          <div class="card-body">
            <p class="card-text" name="card-product-name">${value.product_name}</p>
            <p class="card-text" name="card-product-price">${value.product_name}</p>
          </div>
        </div>
      </div>
    </div>`
        )
    
      }
   
  });
  
   console.log("related_products--------", related_products);

  console.log("product_details--------", details);


  // $('#productRoute').text(``);

  $("#Product-image-main").attr("src", `${details[0].product_img}`);

  $(".img-set").attr("src", `${details[0].product_img}`);

  $("#productName").text(`${details[0].product_name}`);

  $("#product_rating_count").html(`${details[0].product_rating_count} ratings`);

  $("#discount").html(`-${details[0].product_discount_percenteage}% &nbsp `);

  $(".price").html(
    `<span id="currency" >&#8377</span>${details[0].product_discount_price}`
  );

  $("#mrp").html(`M.R.P.: <s>&#8377 ${details[0].product_price}</s>`);

  $("#color-name").html(`Color Name :  ${details[0].product_color}`);

  $("#product_description").html(
    `Description : <br>  ${details[0].product_description}`
  );

  $("#productDetailsSectionList").html(`<li> 
        <span  class="big-bold-fonts">
          Product Name :
        </span>
        ${details[0].product_name}
      </li>
      <li> 
        <span  class="big-bold-fonts">
          Rating :
        </span>
        ${details[0].product_rating}
      </li>
      <li> 
        <span  class="big-bold-fonts">
          Discount :
        </span>
        ${details[0].product_discount_percentage}%
      </li>
      <li> 
        <span  class="big-bold-fonts">
          Color :
        </span>
        ${details[0].product_color}
      </li>
      <li> 
        <span  class="big-bold-fonts">
          Size :
        </span>
        ${details[0].product_size}
      </li>`);

  $("#product-description-section").html(`${details[0].product_description}`);

  //   Product_data.forEach(function (value, index) {
  //     if (value.trending_product == false) {
  //         trending_productArr.push(value);
  //         $("#recently-view-items").append(`
  //         <div class="swiper-slide" value="${value.product_id}">
  //         <div class="container">
  //           <div class="card" style="width: 100%;">
  //           <a href=""> <img class="card-img-top" src="${value.product_img}"
  //           alt="Card image" style="width:100%; height:auto ;"></a>
  //             <div class="card-body ">
  //             <h5 class="card-title">${value.product_name} </h5>
  //             <p class="card-text"  id="text-edit"><del>₹${value.product_discount_price} </del> <br> ${value.product_description }
  //             Shirt <br><i class="fa-solid fa-star" style="font-size: smaller;"></i>
  //             <i class="fa-solid fa-star" style="font-size: smaller;"></i>
  //          <i class="fa-solid fa-star" style="font-size: smaller;"></i><i class="fa-solid fa-star"
  //                 style="font-size: smaller;"></i><i class="fa-regular fa-star"
  //                 style="font-size: smaller;"></i><br>${value.product_rating_count}</p>

  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //         `)

  //     }
  // })



var _cat_name = '';
var _sub_cat_name = '';
category_data.forEach(function(v , i){
  if(details[0].cat_id == v.cat_id )
  {
    _cat_name = v.cat_name;
  }

})  

subcategory_data.forEach(function(v , i){
  if(details[0].sub_cat_id == v.sub_cat_id )
  {
    _sub_cat_name = v.sub_cat_name;
  }

})  

$("#productRoute").html(`<span class="_brod"><a href="product-listing.html?cat_id=${details[0].cat_id}"><b>${_cat_name} ></b> </a> </span> <span class="_brod"><a href="product-listing.html?cat_id=${details[0].cat_id}&sub_cat_id=${details[0].sub_cat_id}"><b>${_sub_cat_name} </b></a> </span>`);












});
