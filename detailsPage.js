$(document).ready(function(){
        $('#header').load('topHEader.html');
        $('#footer').load('footer.html');

        // $('#productRoute').text(`${cat_name} > ${sub_cat_name} `);
        $('#productRoute').text("Clothing > Men > T-shirts");

        // $('#productName').text(product_name);
        $('#productName').text("Amazon Brand - Myx Women's Cotton Kurti");
        
        // $('#rating').mdbRate();
        
        
        var product_discount_percentage = '44%';
         $('#discount').html(`-${product_discount_percentage} &nbsp `);
         
        //var product_discount_price = product_discount_price;
        var product_discount_price = '499';
        $('#price').html(`<span id="currency" >&#8377</span>${product_discount_price}`);

        //var product_price = product_price;
        var product_price = '899.00';
        $('#mrp').html(`M.R.P.: <s>&#8377 ${product_price}</s>`);

       
})

    

    

   