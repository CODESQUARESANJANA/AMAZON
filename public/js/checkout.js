$(document).ready(function () {
    var details = localStorage.getItem('addresss')  || [] ;

    if(details != ''){
        details = JSON.parse(details);
    }
    var count1=0;
     $("#submission").click(()=>{
    
        var myForms={
        "country": $('#country').val(),
        "fullname":$('#fullname').val(),
        "mobile":$('#mobile').val(),
        "pincode":$('#pincode').val(),
        "flat":$('#flat').val(),
        "warea":$('#warea').val(),
        "landmark":$('#landmark').val(),
        "town":$('#town').val(),
        "state":$('#state').val(),
        "my":$('#my').val(),
        "addType":$('addType').val()
        }

        details.push(myForms);
        count1++
        localStorage.setItem('addresss',JSON.stringify(details)) 
        })

    var checkout_price = localStorage.getItem('checkout');
    checkout_price = JSON.parse(checkout_price);

    var final_price =  checkout_price[0].checkout_price;
    $('#totalPrice').html(`<b>₹ ${final_price}</b>`);

    var quantity= localStorage.getItem('add_to_cart');
    quantity= JSON.parse(quantity);
    console.log(quantity);
    var totalQuant= quantity[0].quantity;
    $(`#totalProducts`).html(`<b> ${totalQuant}</b>`)


        $('#placeOrder').click(()=>{
            
          swal("Your order has been placed successfully");
           
            localStorage.removeItem('checkout');
            // localStorage.removeItem('addresss');
            localStorage.removeItem('add_to_cart');
            
            setTimeout(function(){

              window.location.href='index.html'
            } , 3000)
          
           
        })

});