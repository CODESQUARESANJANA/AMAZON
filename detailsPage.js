$(document).ready(function(){
        $('#header').load('topHEader.html');
        $('#footer').load('footer.html');

        // $('#productRoute').text(`${cat_name} > ${sub_cat_name} `);
        $('#productRoute').text("Clothing > Men > T-shirts");

        // $('#productName').text(product_name);
        $('#productName').text("Amazon Brand - Myx Women's Cotton Kurti");
        
        // $('#rating').mdbRate();
        $('#discount').html(`-50% &nbsp `);
        // $('#discount').html(`-${product_discount_percentage}% &nbsp `);
         
        $('#price').html(`<span id="currency">&#8377</span><span id="product_price">499.00</span>`);
        // $('#price').html(`<span id="currency" >&#8377</span>${product_discount_price}`);

        $('#mrp').html(`M.R.P.: <s>&#8377 899.00</s>`);
        // $('#mrp').html(`M.R.P.: <s>&#8377 ${product_price}</s>`);


})

    

    

   