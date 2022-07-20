$(document).ready(function () {


    var taking_1 = localStorage.getItem('add_to_cart');
    var parse_1 = JSON.parse(taking_1);
    var total_price = 0;
    var checkout_price = 0;
    var count = 0;


    console.log(parse_1);
    parse_1.forEach(function (value, index) {
        $("#cart-item").append(` <input class="item-checked" type="checkbox" value = "${index}" name="cart-item-check" id="cart-item${index}" checked>
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
             <span style="font-size:12px;"> Delete |  Save for later | See more like this
              </span>
              <div> 
                <label class="text-primary">Quantity : </label>
                <span>${value.quantity}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
         <h4 class = "mt-3">Price</h4><span>${value.product_price}</span>
        </div>
      </div>
    </div>
  </label>`)

        checkout_price += parseInt(value.product_price) * parseInt(value.quantity);
    })

    console.log(total_price)

    $('#price').html(`<b>Subtotal</b> (${parse_1.length} item): ${checkout_price} (without select)`);


    $('.item-checked').on('change', function () {
        // From the other examples
        if (!this.checked) {
            var sure = confirm("Do you really want to remove this");
            this.checked = !sure;
            count--;
            checkout_price -= parseInt(parse_1[this.value].product_price) * parseInt(parse_1[this.value].quantity);
            $('#price').html(`<b>Subtotal</b> (${count} item): ${checkout_price}`);
        }
        else {
            var checked_item = document.getElementsByName('cart-item-check');
            checkout_price = 0;
            count = 0;
            for (checked_item of checked_item) {
                if (checked_item.checked) {
                    count++;
                    console.log(checked_item.value);
                    checkout_price += parseInt(parse_1[checked_item.value].product_price) * parseInt(parse_1[checked_item.value].quantity);

                }

            }
            $('#price').html(`<b>Subtotal</b> (${count} item): ${checkout_price}`);
        }
        console.log(checkout_price);
    });

    $('#checkout-btn').on('click', function () {
        if (checkout_price != 0) {
            var checkout_product = localStorage.getItem('checkout') || [];
            if (checkout_product != '') {
                checkout_product = JSON.parse(checkout_product);
            }
            
            var data = [];


            var checked_item = document.getElementsByName('cart-item-check');
            for (checked_item of checked_item) {
                if (checked_item.checked) {

                    data.push({'checkout_index' : checked_item.value})
                }
            }

            checkout_product.push(data);

            localStorage.setItem('checkout', JSON.stringify(checkout_product));
            window.location.href = "checkout.html";



        }
        else {
            alert("Please select atleast one product to checkout")
        }
    });
});

