$(document).ready(function () {
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
const queryString = window.location.search;
console.log(queryString);
const UrlParams = new URLSearchParams(queryString);

console.log(Product_data);

const para_trending_product = UrlParams.get('trending_product')

const para_product_id = UrlParams.get('product_id');

Product_data.forEach(function (value, index) {
    if (value.trending_product == false) {
        trending_productArr.push(value);
        $("#recently-view-items").append(`
        <div class="swiper-slide" value="${value.product_id}"> 
        <div class="container">
          <div class="card" style="width: 100%;">
          <a href="detailsPage.html?product_id=${value.product_id}"> <img class="card-img-top" src="${value.product_img}"
          alt="Card image" style="width:100%; height:auto ;"></a>     
            <div class="card-body ">
            <h5 class="card-title">${value.product_name} </h5>
            <p class="card-text"  id="text-edit"><del>₹${value.product_discount_price} </del> <br> ${value.product_description }
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

});





