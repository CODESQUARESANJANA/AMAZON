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
            <h5 class="card-title" id="pd_name">${value.product_} </h5>
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
                        href="https://www.amazon.in/b?node=26297682031&amp;pf_rd_r=QXW90W3PYDPSZ2XCEGCX&amp;pf_rd_p=1eadb2e5-0143-4c80-b547-96ad6cd545bc&amp;pd_rd_r=62586866-9bdb-4937-9937-bf313e5becf7&amp;pd_rd_w=ViafS&amp;pd_rd_wg=rEKff&amp;ref_=pd_gw_unk">
                        <div class="a-section a-spacing-none fluid-image-container"><img
                            alt="Up to 70% off | Electronics clearance store"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
                            class="landscape-image"
                            data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_2x._SY608_CB628315133_.jpg">
                        </div>
                      </a></div>
                    <div class="a-cardui-footer"><a class="a-link-normal see-more truncate-1line" href="/b?node=26297682031">See
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

});




