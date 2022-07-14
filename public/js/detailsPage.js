$(function(){
        $('#header').load('topHeader.html');
        $('#footer').load('footer.html');
})

$(document).ready(function(){
        var details = [];
        var queryString = window.location.search;
        console.log('queryString---',queryString);
        const product_detail_param = new URLSearchParams(queryString);
        console.log('product_detail_param---------',product_detail_param)
        var product_id = product_detail_param.get('product_id');
        console.log('product_id-------',product_id);

        Product_data.forEach(function(value , index){
                if(value.product_id == product_id)
                {
                      details.push(value);
                }
        })

console.log('product_details--------',details);

        $('#productRoute').text("Clothing > Men > T-shirts");

        $('#Product-image-main').attr('src',`${details[0].product_img}`);

        $('.img-set').attr('src',`${details[0].product_img}`);

         $('#productName').text(`${details[0].product_name}`);
       
         $('#discount').html(`-${details[0].product_discount_percentage}% &nbsp `);
         
         $('.price').html(`<span id="currency" >&#8377</span>${details[0].product_discount_price}`);

         $('#mrp').html(`M.R.P.: <s>&#8377 ${details[0].product_price}</s>`);

        $('#color-name').html(`Color Name :  ${details[0].product_color}`);

        $('#product_description').html(`Description : <br>  ${details[0].product_description}`);

        $('#productDetailsSectionList').html(`<li> 
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
      </li>`)

        $('#product-description-section').html(`${details[0].product_description}`);

//       var card_product_name = $('[name="card_product_name"]');
//       console.log('card_product_name-------------',card_product_name);
//       var card_product_name = document.getElementsByName('userAnswer' + ansIdCount);
//       document.getElementsByName('answerDisplay').innerHTML = '';
//       for (var userAnswer of userAnswer) {
//           if (userAnswer.checked) {
//               userAnswer_arr.push(userAnswer.value);
//               console.log('userAnswer.value----------', userAnswer.value);
//           }
//       }
})

    

    

   