$(document).ready(function(){


var taking_1 = localStorage.getItem('add_to_cart');
var parse_1 = JSON.parse(taking_1);

parse_1.forEach(function(value,index){
    $("#cart-item").append(` <input type="checkbox" name="cart-item${index}" id="cart-item${index}">
    <label for="cart-item${index}"><div class="card mb-3" style="max-width: 100%">

      <div class="row no-gutters">
        <div class="col-md-3">
          <img src="" class="card-img" alt="...">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

            <div class="dropdown">
              <button style="background-color: rgb(255, 255, 255); color:black; "
                class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" style="border-radius: 10px;">
                Qty:
              </button> <span>|</span> <span> Delete | </span><span> Save for later | </span> <span> See more like this |
              </span>
              <div style="font-size:11px" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
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
         <h4>Price</h4><span>2500</span>
        </div>
      </div>
    </div>
  </label>`)

})


})
     
