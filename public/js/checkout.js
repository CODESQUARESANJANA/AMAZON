$(document).ready(function () {
  var details = localStorage.getItem('addresss')  || [] ;
  
  
      //        var otherdetails=JSON.parse(details)
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
    // console.log(quantity);
    var totalQuant= quantity[0].quantity;
    $(`#totalProducts`).html(`<b> ${totalQuant}</b>`)
    
    


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