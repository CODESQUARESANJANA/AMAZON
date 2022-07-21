
$(document).ready(function () {

  $('#header').load('topHEader.html');
  $('#footer').load('footer.html');

  var product_listing_details = [];
  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);

  const param_cat_id = urlParams.get('cat_id');
  const param_sub_category_id = urlParams.get('sub_cat_id');
  // const param_cat_rating = url.get('product_rating');

  // category_data.forEach(function(value , index){
  //   console.log(value);
  // });

  Product_data.forEach(function (value, index) {
    if (value.cat_id == param_cat_id && value.sub_cat_id == param_sub_category_id) {
      console.log(value.sub_cat_id);
      product_listing_details.push(value);
      $('#listing').append(`<a style="text-decoration: none; color: black" href = "detailsPage.html?productname=${value.product_name.split(" ").join("").trim()}&des=${value.product_description.split(" ").join("").trim()}&product_id=${value.product_id}"><div value = "${value.product_id}" class="card m-2 product-details-page" style="width: 15rem; margin-right:1%;">
        <img style="max-height: 180px; max-width: 150px; margin-left: auto;margin-right: auto;" src="${value.product_img}"
            alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">₹${value.product_price}</h5>
            <p class="card-text"><del>₹${value.product_discount_price} </del> <br> 
            <div class="name"><b>${value.product_name}</b></div><br>
            <div class="description">${value.product_description}</div>
              <br><i class="fa-solid fa-star" style="font-size: smaller;"></i><i
                    class="fa-solid fa-star" style="font-size: smaller;"></i>
                    <i class="fa-solid fa-star" style="font-size: smaller;"></i><i class="fa-solid fa-star"
                    style="font-size: smaller;"></i><i class="fa-regular fa-star"
                    style="font-size: smaller;"></i><br>${value.product_rating_count}</p>
        </div>
    </div></a>`)
    }

  });






  // for showing all category
  for (let i = 0; i < subcategory_data.length; i++) {
    console.log(subcategory_data[i])
    // console.log("getting list", subcategory_data[i]);
    if (subcategory_data[i].cat_id == param_cat_id) {
      if (param_cat_id == 2) {
        $('#cat_type').text('Women');
      }
      else if (param_cat_id == 3) {
        $('#cat_type').text('kid');
      }
      else {
        $('#cat_type').text('Men');
      }

      $('#list2').append(`<li><a href="product-listing.html?cat_id=${param_cat_id}&sub_cat_id=${subcategory_data[i].sub_cat_id}">${subcategory_data[i].sub_cat_name}*</a> </li>`)
      $('#women').append(`<li><a href="product-listing.html?cat_id=${param_cat_id}&sub_cat_id=${subcategory_data[i].sub_cat_id}">${subcategory_data[i].sub_cat_name}*</a> </li>`)
    }

  }
  console.log(product_listing_details);
  //  for filtering
  var tosort = [];
  var maxim = '';
  product_listing_details.forEach(function (value, index) {
    tosort.push(parseInt(value.product_price));
  });
  
  tosort.sort(function(a, b){return a - b});
  console.log(tosort);
  $(function () {
    $("#slider-range").slider({
      range: true,
      min:tosort[0],
      max: tosort[tosort.length-1],
      values: [tosort[0], tosort[tosort.length-1]],
      slide: function (event, ui) {
        $(".amount").val( ui.values[0] + " - " + ui.values[1]);
        console.log(ui.values[0], ui.values[1])
        $('#listing').empty()
        product_listing_details.forEach(function (value, index) {
          if (value.product_price <= ui.values[1] && value.product_price >= ui.values[0]) {

            $('#listing').append(`<a style="text-decoration: none; color: black" href = "detailsPage.html?productname=${value.product_name.split(" ").join("").trim()}&des=${value.product_description.split(" ").join("").trim()}&product_id=${value.product_id}"><div value = "${value.product_id}" class="card m-2 product-details-page" style="width: 15rem; margin-right:1%;">
                    <img style="max-height: 180px; max-width: 150px; margin-left: auto;margin-right: auto;" src="${value.product_img}"
                        alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">₹${value.product_price}</h5>
                        <p class="card-text"><del>₹${value.product_discount_price} </del> <br> 
                        <div class="description">${value.product_description}</div>
                          <br><i class="fa-solid fa-star" style="font-size: smaller;"></i><i
                                class="fa-solid fa-star" style="font-size: smaller;"></i>
                                <i class="fa-solid fa-star" style="font-size: smaller;"></i><i class="fa-solid fa-star"
                                style="font-size: smaller;"></i><i class="fa-regular fa-star"
                                style="font-size: smaller;"></i><br>${value.product_rating_count}</p>
                    </div>
                </div></a>`)
          }

        }
        )

      }
    });
    $(".amount").val($("#slider-range").slider("values", 0) +
      " - " + $("#slider-range").slider("values", 1));
  });


  $(".s1").click(function(){
      var rating_cnt = $(this).attr('value')
      $('#listing').empty()
      product_listing_details.forEach(function (value, index) {
      if (parseInt(value.product_rating) == rating_cnt ) {
      $('#listing').append(`<a style="text-decoration: none; color: black" href = "detailsPage.html?productname=${value.product_name.split(" ").join("").trim()}&des=${value.product_description.split(" ").join("").trim()}&product_id=${value.product_id}"><div value = "${value.product_id}" class="card m-2 product-details-page" style="width: 15rem; margin-right:1%;">
                    <img style="max-height: 180px; max-width: 150px; margin-left: auto;margin-right: auto;" src="${value.product_img}"
                        alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">₹${value.product_price}</h5>
                        <p class="card-text"><del>₹${value.product_discount_price} </del> <br> 
                        <div class="description">${value.product_description}</div>
                          <br><i class="fa-solid fa-star" style="font-size: smaller;"></i><i
                                class="fa-solid fa-star" style="font-size: smaller;"></i>
                                <i class="fa-solid fa-star" style="font-size: smaller;"></i><i class="fa-solid fa-star"
                                style="font-size: smaller;"></i><i class="fa-regular fa-star"
                                style="font-size: smaller;"></i>(${value.product_rating})</p>
                    </div>
                </div></a>`)

    }
  })
  if (document.getElementById('listing').innerHTML == '')
  {
    
    swal("Sorry!", "for this rating product is not available!");

  }


  });
    // for directing to the detail page
    // $(document).on('click', '.product-details-page' ,function () {
    //   var p_id = $(this).attr('value');
    //   window.location.href = `detailsPage.html?product_id=${p_id}`;
    // })

    $('.getColor').click(function(){
      var p_color = $(this).attr('value');
      $('#listing').empty()
      product_listing_details.forEach(function (value, index) {
        if ((value.product_color) == p_color ) {
          $('#listing').append(`<a style="text-decoration: none; color: black" href = "detailsPage.html?productname=${value.product_name.split(" ").join("").trim()}&des=${value.product_description.split(" ").join("").trim()}&product_id=${value.product_id}"><div value = "${value.product_id}" class="card m-2 product-details-page" style="width: 15rem; margin-right:1%;">
                        <img style="max-height: 180px; max-width: 150px; margin-left: auto;margin-right: auto;" src="${value.product_img}"
                            alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">₹${value.product_price}</h5>
                            <p class="card-text"><del>₹${value.product_discount_price} </del> <br> 
                            <div class="name">${value.product_name}</div><br>
                            <div class="description">${value.product_description}</div>
                              <br><i class="fa-solid fa-star" style="font-size: smaller;"></i><i
                                    class="fa-solid fa-star" style="font-size: smaller;"></i>
                                    <i class="fa-solid fa-star" style="font-size: smaller;"></i><i class="fa-solid fa-star"
                                    style="font-size: smaller;"></i><i class="fa-regular fa-star"
                                    style="font-size: smaller;"></i>(${value.product_rating})</p>
                        </div>
                    </div></a>`)
    
        }

      })
      if (document.getElementById('listing').innerHTML == '')
  {
    
    swal("Sorry!", "for this color product is not available!");

  }
    })






});
