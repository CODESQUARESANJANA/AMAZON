$(document).ready(function(){
        $('#header').load('topHEader.html');
        $('#footer').load('footer.html');
        // var category = $('#category').html;
    // var products = $('#products').html;
    // var productName = $('#productName').html;
        var category = 'Clothing';
        var products = 'Men';
        var productName = 'T-shirts';

        // $('#productRoute').text(`${category} > ${products} > ${productName}`);
        $('#productRoute').text("Clothing > Men > T-shirts");
        $('#productName').text("Amazon Brand - Myx Women's Cotton Kurti");
        $('#price').html(`&#8377 299.00 - &#8377 1,007.00`);
        // $('#rating').mdbRate();
        
        //var product_discount_percenteage = product_discount_percenteage;
        var product_discount_percenteage = '44%';
         $('#discount').html(`-${product_discount_percenteage} &nbsp `);
         
        //var product_discount_price = product_discount_price;
        var product_discount_price = '499';
        $('#price').html(`<span id="currency" >&#8377</span>${product_discount_price}`);

        //var product_price = product_price;
        var product_price = '899.00';
        $('#mrp').html(`M.R.P.: <s>&#8377 ${product_price}</s>`);

       
})

    

    

   