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


});