$(function(){
        $('#header').load('topHeader.html');
        $('#footer').load('footer.html');
})

$(document).ready(function(){
        var product_details = '';
        var queryString = window.location.search;
        const product_detail_param = new URLSearchParams(queryString);
        console.log('product_detail_param---------',product_detail_param)
        var product_id = product_detail_param.get('product_id');
        console.log('product_id-------',product_id);

        Product_data.forEach(function(value , index){
                if(value.product_id == product_id)
                {
                       var product_details =  value;
                }

        })



         $('#productRoute').text(`${product_details.cat_name} > ${product_details.sub_cat_name} `);
        //$('#productRoute').text("Clothing > Men > T-shirts");

        // $('#productName').text(product_name);
        $('#productName').text("Amazon Brand - Myx Women's Cotton Kurti");
        
        // $('#rating').mdbRate();
        $('#discount').html(`-50% &nbsp `);
        // $('#discount').html(`-${product_discount_percenteage}% &nbsp `);
         
        $('.price').html(`<span id="currency">&#8377</span><span id="product_price">499.00</span>`);
        // $('.price').html(`<span id="currency" >&#8377</span>${product_discount_price}`);

        $('#mrp').html(`M.R.P.: <s>&#8377 899.00</s>`);
        // $('#mrp').html(`M.R.P.: <s>&#8377 ${product_price}</s>`);

        $('#color-name').html(`<strong>Color Name </strong>: Yellow`);
        // $('#color-name').html(`Color Name :  ${product_color}`);

        $('#product_description').html(`<strong>Description</strong> : <br> The outsoles are made by an air cushion, doubling the effect of shock absorption. Besides, these shoes perform excellent in durability and are also slip resistant. It provides push cushioning comfort for foot pain relief and helps relieve pressure while conforming to your every step`);
        // $('#product_description').html(`Description :  ${product_description}`);

//         $('#productDetailsSectionList').html(`<li> 
//         <span  class="big-bold-fonts">
//           Product Name :
//         </span>
//         ${product_name}
//       </li>
//       <li> 
//         <span  class="big-bold-fonts">
//           Rating :
//         </span>
//         ${product_rating}
//       </li>
//       <li> 
//         <span  class="big-bold-fonts">
//           Discount :
//         </span>
//         ${product_discount_percenteage}%
//       </li>
//       <li> 
//         <span  class="big-bold-fonts">
//           Color :
//         </span>
//         ${product_color}
//       </li>
//       <li> 
//         <span  class="big-bold-fonts">
//           Size :
//         </span>
//         ${product_size}
//       </li>`)

$('#productDetailsSectionList').html(`<li> 
        <span  class="big-bold-fonts">
          Product Name :
        </span>
        Amazon Brand - Myx Women's Cotton Kurti
      </li>
      <li> 
        <span  class="big-bold-fonts">
          Rating :
        </span>
        3.8
      </li>
      <li> 
        <span  class="big-bold-fonts">
          Discount :
        </span>
        55%
      </li>
      <li> 
        <span  class="big-bold-fonts">
          Color :
        </span>
       Yellow
      </li>
      <li> 
        <span  class="big-bold-fonts">
          Size :
        </span>
        Free-size
      </li>`)

       // $('#product-description-section').html(`${product_description}`);
      $('#product-description-section').html(`Explore the collection of beautifully designed Saree from Sidhidata on Amazon. Each piece is elegantly crafted and will surely add to your wardrobe. Pair this piece with heels or flats for a graceful look.`);

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

    

    

   