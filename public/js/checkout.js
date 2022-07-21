$(document).ready(function () {
  // var details = localStorage.getItem('addresss')  || [] ;




          // var otherdetails=JSON.parse(details)
      // console.log(otherdetails);
  
      // otherdetails.forEach(function(value,index) {
  //       $('#recentAddress').append(`
        
  //       <div class="card d-flex" style="">
  
  //   <div class="card-body">
  //     <h5 class="card-title"><label>Name</label>${value.fullname}</h5>
  //     <h6> <label>Country</label>${value.country}</h6>
  //     <h6> <label>PIN</label>${value.pincode}</h6>
  
    
  
  //   </div>
  // </div>
  
  //       `)
    
// })
 
  
   
  
  // if(details != ''){
  //       details = JSON.parse(details);
  //   }
  //   var count1=0;
  //    $("#submission").click(()=>{
    
  //       var myForms={
  //       "country": $('#country').val(),
  //       "fullname":$('#fullname').val(),
  //       "mobile":$('#mobile').val(),
  //       "pincode":$('#pincode').val(),
  //       "flat":$('#flat').val(),
  //       "warea":$('#warea').val(),
  //       "landmark":$('#landmark').val(),
  //       "town":$('#town').val(),
  //       "state":$('#state').val(),
  //       "my":$('#my').val(),
  //       "addType":$('addType').val()
  //       }

  //       details.push(myForms);
  //       count1++
  //       localStorage.setItem('addresss',JSON.stringify(details)) 
  //       })


    var checkProducts = localStorage.getItem('checkout');
    checkProducts = JSON.parse(checkProducts);

    var cartadded= localStorage.getItem('add_to_cart');
    cartadded= JSON.parse(cartadded);

    console.log(cartadded);
    console.log(checkProducts);

    // var totalQuant= cartadded[0].quantity;

  
    // $(`#totalProducts`).html(`<b> ${totalQuant}</b>`)
    var totalPrice =0;
    
       checkProducts.forEach(function(value, index){

          var cart_index = value.checkout_index;
          
            
              $('#fdetails').prepend(`<div class="card  ml-4 p-2" style="">
                 <span> <b>Product name:  </b>
                    ${cartadded[cart_index].product_name}</span>
                <span> <b>Quantity:</b>   ${cartadded[cart_index].quantity}</span>
                <span> <b>Description:</b>  ${cartadded[cart_index].product_description}</span>
                <b> Price: ₹${cartadded[cart_index].product_price}</b>
              </div>`)

          totalPrice += parseInt(cartadded[cart_index].product_price) * parseInt(cartadded[cart_index].quantity);

       })

       $('#totalPay').html(`<b style="font-size:large ; border: 0.2px solid" class="ml-5 p-1">Total sum of money you need to pay  :₹${totalPrice}  for  ${checkProducts.length}   number of products</b>`)
       console.log(totalPrice);
        
        // $('#totalPrice').html(`<b>₹ ${final_price}</b>`);
        // console.log(final_price);


    //to show products details in checkout page
    




    // var cartDetails= localStorage.getItem('add_to_cart');
    //     cartDetails1 = JSON.parse(cartDetails)
    //     var pdesp= add_to_cart[0].cartDetails1;
    //     var pname= add_to_cart[3].cartDetails1;
    //     var pprice= add_to_cart[4].cartDetails1;

    //     cartDetails1.forEach(function(value,index){
    //        $('#desp').append(`<div class="card">
    //   <label>Product Description:${value.pdesp}</label>
    //   <label>Product name:${value.pname}</label>
    //   <label>Product price:${value.pprice}</label>
      
    //     </div>`)
    //     })

   
   
        

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