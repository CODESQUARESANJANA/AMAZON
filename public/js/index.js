$(document).ready(function () {
  var url = 'https://bjxc-002.sandbox.us01.dx.commercecloud.salesforce.com/s/RefArch-aashutosh/dw/shop/v22_10/product_search?client_id=88186553-367a-4c61-8161-992902296e76&refine=cgid=mens&expand=images,prices'
  console.log(url);
  $.ajax({
    url: url,
    type: 'GET',
    headers: {"Content-Type": "application/json"},
    success: function(data){
      console.log(data);
    },
    beforeSend: function(request) {
      request.setRequestHeader("User-Agent","PostmanRuntime/7.29.2");
    },
    error: function(jqXHR, textStatus, errorThrown){
      console.log(jqXHR, textStatus, errorThrown);
    }
  })

  getAccessToken('https://bjxc-002.sandbox.us01.dx.commercecloud.salesforce.com', '88186553-367a-4c61-8161-992902296e76' , 'Basic YWFzaHV0b3NoLm5hbWRlb0Bjb2Rlc3F1YXJldGVjaC5jb206QWFzaHVAY29kZXNxdWFyZTEyMzpjb2Rlc3F1YXJlMjAyMg==')
    $('#topHeader').load('topHeader.html');
    $('#footer').load('footer.html');
    $('#my-carousel-header').load('responsive.html');
    $('#carousel-example').on('slide.bs.carousel', function (e) {
        /*
            CC 2.0 License Iatek LLC 2018 - Attribution required
        */
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 5;
        var totalItems = $('.carousel-item').length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i < it; i++) {
                // append slides to end
                if (e.direction == "left") {
                    $('.carousel-item').eq(i).appendTo('.carousel-inner');
                }
                else {
                    $('.carousel-item').eq(0).appendTo('.carousel-inner');
                }
            }
        }
    });



    const trending_productArr = []



    Product_data.forEach(function (value, index) {
        if (value.trending_product == false) {
            trending_productArr.push(value);
            $("#recently-view-items").append(`
        <div class="swiper-slide" value="${value.product_id}"> 
        <div class="container" style="max-height:347px">
          <div class="card" style="width: 100%;">
          <a href="detailsPage.html?product_id=${value.product_id}"> <img class="card-img-top" src="${value.product_img}"
          alt="Card image" style="width:100%; height:auto ;"></a>     
            <div class="card-body ">
            <h5 class="card-title" id="pd_name">${value.product_name
            } </h5>
            <p class="card-text"  id="text-edit"><del>₹${value.product_discount_price} </del> <br> ${value.product_description}
            Shirt <br><i class="fa-solid fa-star" style="font-size: smaller;"></i>
            <i class="fa-solid fa-star" style="font-size: smaller;"></i>
         <i class="fa-solid fa-star" style="font-size: smaller;"></i><i class="fa-solid fa-star"
                style="font-size: smaller;"></i><i class="fa-regular fa-star"
                style="font-size: smaller;"></i><br>${value.product_rating_count}</p>

            </div>
          </div>
        </div>
      </div>
        `)

        }
    })
    const discount_percentageArr = [];
    var a = 0;
    for (let i = 0; i < Product_data.length; i++) {
        // console.log(Product_data[i].product_discount_price)
        // if (a<=4) {
        if (Product_data[i].product_discount_percenteage != "") {
            $('#card-tile').append(` <div class="card card_style">
                <div class="card-body text-center">
                  <div id="Vjv-2-ZSKWVYCI6VF5m6JA" class="a-cardui fluid-fat-image-link fluid-card fluid-fat-image-link"
                    data-a-card-type="basic">
                    <div class="a-cardui-header">
                      <h2 class="a-color-base headline truncate-2line">UP to ${Product_data[i].product_discount_percenteage}% On This Product</h2>
                    </div>
                    <div class="a-cardui-body"><a class="a-link-normal center-image aok-block image-window"
                        href="detailsPage.html?product_id=${Product_data[i].product_id}">
                        <div class="a-section a-spacing-none fluid-image-container"><img
                            alt="Up to 70% off | Electronics clearance store"
                            src="${Product_data[i].product_img}"
                            class="landscape-image"
                            data-a-hires="#">
                        </div>
                      </a></div>
                    <div class="a-cardui-footer"><a class="a-link-normal see-more truncate-1line" href="detailsPage.html?product_id=${Product_data[i].product_id}">See
                        more</a></div>
                  </div>
                </div>
              </div>`);

            a++;
            if (a == 4) {
                break
            }
            // }

        }

        discount_percentageArr.push()
        // const element = array[i];


    }


    const trending_view = [];
    var a = 0;
    for (let i = 0; i < Product_data.length; i++) {
        // console.log(Product_data[i].product_discount_price)
        // if (a<=4) {
        if (Product_data[i].trending_product == false) {
            trending_view.push(Product_data[i]);
            $('#card-tile-2').append(` <div class="card card_style">
                <div class="card-body text-center">
                  <div id="Vjv-2-ZSKWVYCI6VF5m6JA" class="a-cardui fluid-fat-image-link fluid-card fluid-fat-image-link"
                    data-a-card-type="basic">
                    <div class="a-cardui-header">
                      <h2 class="a-color-base headline truncate-2line">Best Rating ${Product_data[i].product_rating} | On This Product</h2>
                    </div>
                    <div class="a-cardui-body"><a class="a-link-normal center-image aok-block image-window"
                        href="detailsPage.html?product_id=${Product_data[i].product_id}">
                        <div class="a-section a-spacing-none fluid-image-container"><img
                            alt="Up to 70% off | Electronics clearance store"
                            src="${Product_data[i].product_img}"
                            class="landscape-image"
                            data-a-hires="">
                        </div>
                      </a></div>
                    <div class="a-cardui-footer"><a class="a-link-normal see-more truncate-1line" href="detailsPage.html?product_id=${Product_data[i].product_id}">See
                        more</a></div>
                  </div>
                </div>
              </div>`);

            a++;
            if (a == 4) {
                break
            }
            // }

        }

        discount_percentageArr.push()
        // const element = array[i];


    }

    const image_url = [];
    // var img =0;
    for (let i = 0; i <carousel_data.length; i++) {
      // console.log("carousel-data", carousel_data)
      // const element = array[i];'
      // image_url.push(carousel_data[i]);
      $('#crousel-img').append(`<div class="carousel-item ${carousel_data[i]===carousel_data[0] ?"active":""}" >
      <div class="d-block w-100 " style=" background-image:
      linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(235, 235, 235, 0.05)),
      url('${carousel_data[i].image_url}');
  width: 100%;
  height: 100vh;
  background-size: cover;
  color: white;
  padding: 20px;">
  </div>
    </div>`);
    }
});



function getAccessToken(baseUrl , clientId , basicToken){
  var url = baseUrl+'/dw/oauth2/access_token?client_id='+clientId+'&grant_type=urn:demandware:params:oauth:grant-type:client-id:dwsid:dwsecuretoken';
  console.log(url);
  $.ajax({
    url: url,
    type: 'POST',
    crossDomain: true,
    headers: {'Authorization': basicToken , 'Content-Type': 'application/x-www-form-urlencoded' , 'HOST': 'https://codesquareamazonclone.netlify.app' },
    beforeSend: function(xhr){
      xhr.withCredentials = true;
    },
    success: function(data){
      console.log(data);
    },
    error: function(e){
      console.log(e);
    }
  })
}






