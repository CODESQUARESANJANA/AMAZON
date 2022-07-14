
// console.log(subcategory_data);
// sitepoint
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
// const cat_id = urlParams.get('cate_id');
// const sub_category_id = urlParams.get('sub_cat_id');
// console.log(cat_id,
//   sub_category_id);
  // jjgjg
  // for (let i = 0; i < category_data.length; i++) {
  //   console.log("dsdsd", category_data[i]);
  //   document.getElementById("footer"
  //   ).innerHTML += `<p style="font-size:12px; color:#777777;"><b>${category_data[i].cat_id}</b  > : ${category_data[i].sub_cat_id} </p>`;
  // }

  category_data.forEach(function(value , index){
    console.log(value);
  });
  subcategory_data.forEach(function(value , index){
    console.log(value);
  });
// shirt


