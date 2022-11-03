$(document).ready(function(){

    $("#header").load("/topHeader.html");
    $("#footer").load("/footer.html");

    $('#select-category-dropdown').on('change' , function(e){
        alert(1);
        var url = $('#select-category-form').attr('action');
        var selectedCategory = $('#select-category-dropdown').val();
        url = url+`&refine=cgid=${selectedCategory}&expand=images,prices`
        console.log(url);
        $.ajax({
          url: url,
          type:  $('#select-category-form').attr('method'),
          headers: {"Content-Type": "application/json"},
          success: function(data){
            console.log(data);
            if (data.count > 0) {
               data.hits.forEach(value => {
                    $('#product-result').append(`<a style="text-decoration: none; color: black" href = ""><div value = " class="card m-2 product-details-page" style="width: 15rem; margin-right:1%;">
                    <img style="max-height: 180px; max-width: 150px; margin-left: auto;margin-right: auto;" src="${value.image.link}"
                        alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">₹${value.price}</h5>
                        <p class="card-text"><del>₹${value.price_max}</del> <br> 
                        <div class="name"><b>${value.product_name}</b></div><br>
                        <div class="description"></div>
                          <br><i class="fa-solid fa-star" style="font-size: smaller;"></i><i
                                class="fa-solid fa-star" style="font-size: smaller;"></i>
                                <i class="fa-solid fa-star" style="font-size: smaller;"></i><i class="fa-solid fa-star"
                                style="font-size: smaller;"></i><i class="fa-regular fa-star"
                                style="font-size: smaller;"></i><br></p>
                    </div>
                </div></a>`);
               });
            }
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