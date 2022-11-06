$(document).ready(function(){

    $("#header").load("/topHeader.html");
    $("#footer").load("/footer.html");

    $('#select-category-dropdown').on('change' , function(e){

        var url = $('#select-category-form').attr('action');
        var selectedCategory = $('#select-category-dropdown').val();
        url = url+`&refine=cgid=${selectedCategory}&expand=images,prices`
        $.ajax({
          url: url,
          type:  $('#select-category-form').attr('method'),
          headers: {"Content-Type": "application/json"},
          success: function(data){
            $('#product-result').empty()
            if (data.count > 0) {
               data.hits.forEach(value => {
                    $('#product-result').append(`<div class="product-div" style="text-decoration: none; color: black" data-href = "${value.link}"><div value = " class="card m-2 product-details-page" style="width: 15rem; margin-right:1%;">
                    <img style="max-height: 180px; max-width: 150px; margin-left: auto;margin-right: auto;" src="${value.image.link}"
                        alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">₹${value.price}</h5>
                        <div class="name"><b>${value.product_name}</b></div><br>
                        <div class="description"></div>
                    </div>
                </div></div>`);
               });
            }
          },
          error: function(jqXHR, textStatus, errorThrown){
            console.log(jqXHR, textStatus, errorThrown);
          }
        });
    });


    $(document).on('click' ,'.product-div'  ,  function(e){

      var url = $(this).attr('data-href');
      url = url+`&expand=images,prices`
      $.ajax({
        url: url,
        type: "GET",
        headers: {"Content-Type": "application/json"},
        success: function(data){
          $('#product-result').empty()
            $('#product-result').append(`<div className="container">
            <div class="d-flex flex-column align-items-center justify-content-center">
              <h1 class="pt-5">${data.page_title}</h1>
              <h1 class="pt-2 text-info">${data.name}</h1>
              <div class="row pt-4">
                <div class="col-4">
                  <img src=${data.image_groups[0].images[0].dis_base_link} height="40%" />
                </div>
                <div class="col-8">
                  <hr />
                  <div class="d-flex flex-row justify-content-between">
                      <div class="product-number pull-left">
                        Item No.
                        <span class="product-id">73910532-1M</span>
                      </div>
      
                      <div class="ratings pull-right">
                        <span class="sr-only">3.6 out of 5 Customer Rating</span>
                      </div>
                  </div>
                  <hr />
                  <div>
                    <h3>Description </h3>
                    ${data.page_description}
                  </div>
                  <div>
                    <h3>Details </h3>
                    ${data.short_description}
                  </div>
      
                  <div class="d-flex align-items-center mt-4">
                    <h2>Price :</h2>
                    <h1 class="text-danger">${data.price} ${data.currency}</h1>
                  </div>
                  <div class="d-flex flex-row align-items-center mt-3 ml-4">
                    <h4>Quantity : </h4>
                    <select
                      class="quantity-select custom-select form-control  w-25 ml-4"
                      id="quantity-1"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7 </option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  <div class="d-flex align-items-center mt-4">
                   
                  </div>
                  <button class="add-to-cart btn btn-primary mt-4">
                    <i class="fa fa-shopping-bag"></i>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>`);
        },
        beforeSend: function(request) {
          request.setRequestHeader("User-Agent","PostmanRuntime/7.29.2");
        },
        error: function(jqXHR, textStatus, errorThrown){
          console.log(jqXHR, textStatus, errorThrown);
        }
      });
  })

})