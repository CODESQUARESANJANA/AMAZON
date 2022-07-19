$(document).ready(function () {
  $("#header").load("topHEader.html");
  $("#footer").load("footer.html");

  //     let product_listing_details=[];
  // const queryString = window.location.search;
  // console.log(queryString);
  // const urlParams = new URLSearchParams(queryString);

  // console.log('urlParams',urlParams);

  // const param_cat_id = urlParams.get('cat_id');
  // const param_sub_category_id = urlParams.get('sub_cat_id');

  Product_data.forEach(function (value, index) {
    if (
      value.product_discount_percenteage <= 100 &&
      value.product_discount_percenteage >= 50
    ) {
      //   console.log('sub_cat_id-------------',value.sub_cat_id);
      //   console.log('param_cat_id-------',param_cat_id);
      // product_listing_details.push(value);
      $("#te123")
        .append(`<a style="text-decoration: none; color: black" href=""><div value = "${value.product_id}" class="card ml-4 mb-3 mr-4 product-details-page" style="width: 15rem; height: 325px ;">
        <img style="margin-left: auto;
    max-width: 155px;
    margin-right: auto;
    max-height: 150px;"
        class="card-img-top" src="${value.product_img}"
            alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">₹${value.product_price}</h5>
            <p class="card-text"><del>₹${value.product_discount_price} </del> <br> <span class="recom_pro"> ${value.product_description}</span>
                Shirt <br><i class="fa-solid fa-star" style="font-size: smaller;"></i><i
                    class="fa-solid fa-star" style="font-size: smaller;"></i>
                    <i class="fa-solid fa-star" style="font-size: smaller;"></i><i class="fa-solid fa-star"
                    style="font-size: smaller;"></i><i class="fa-regular fa-star"
                    style="font-size: smaller;"></i><br>${value.product_rating_count}</p>
        </div>
    </div></a>`);
    }
  });
});
