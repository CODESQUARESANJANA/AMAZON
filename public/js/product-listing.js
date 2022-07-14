
// console.log(subcategory_data);
// sitepoint
$(document).ready(function(){

  $('#header').load('topHEader.html');
  $('#footer').load('footer.html');


const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

const param_cat_id = urlParams.get('cate_id');
const param_sub_category_id = urlParams.get('sub_cat_id');
// console.log(cat_id,
//   sub_category_id);
  // jjgjg
  // for (let i = 0; i < category_data.length; i++) {
  //   console.log("dsdsd", category_data[i]);
  //   document.getElementById("footer"
  //   ).innerHTML += `<p style="font-size:12px; color:#777777;"><b>${category_data[i].cat_id}</b  > : ${category_data[i].sub_cat_id} </p>`;
  // }

  // category_data.forEach(function(value , index){
  //   console.log(value);
  // });
 
  {
  Product_data.forEach(function(value , index){
    if(value.cate_id == param_cat_id && value.sub_cat_id == param_sub_category_id){
      console.log(value);
    }
  });
}



})


// shirt
