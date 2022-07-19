$(document).ready(function(){


var taking_1 = localStorage.getItem('add_to_cart');
var parse_1 = JSON.parse(taking_1);
var total_price = 0;
parse_1.forEach(function(value,index){
    $("#cart-item").append(` <input type="checkbox" name="cart-item${index}" id="cart-item${index}">
    <label for="cart-item${index}"><div class="card mb-3" style="max-width: 100%;box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
    border-radius: 23px;">

      <div class="row no-gutters">
        <div class="col-md-3">
          <img src="${value.product_img}" class="card-img" alt="...">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h5 class="card-title" style="font-family: arial, sans serif;">"${value.product_name}"</h5>
            <span class="card-text" style="font-size: 12px;
            padding: 3px;font-weight: 500;
            color: #469e46;">In stock</span>
            <p class="card-text" style="font-size:13px; margin-top:10px;">"${value.product_description}"</p>
            <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"style="width: 69px;
            margin-bottom: 19px">

            <div class="dropdown">
              <button style="background-color:white; color:black;box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
              border-radius: 20px; "
                class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" style="border-radius: 10px;">
                Qty:
              </button> <span style="font-size:12px;"> Delete |  Save for later | See more like this
              </span>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">1</a>
                <a class="dropdown-item" href="#">2</a>
                <a class="dropdown-item" href="#">3</a>
                <a class="dropdown-item" href="#">4</a>
                <a class="dropdown-item" href="#">5</a>
                <a class="dropdown-item" href="#">6</a>
                <a class="dropdown-item" href="#">7</a>
                <a class="dropdown-item" href="#">8</a>
                <a class="dropdown-item" href="#">9</a>
                <a class="dropdown-item" href="#">10</a>
                <a class="dropdown-item" href="#">10+</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
         <h4>Price</h4><span>"${value.product_price}"</span>
        </div>
      </div>
    </div>
  </label>`)

  total_price += value.price;
})


$('#price').html(`<b>Subtotal</b> (1 item): 499.00`)
})
     
