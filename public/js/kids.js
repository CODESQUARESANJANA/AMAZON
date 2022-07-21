$(document).ready(function () {
	$('#header').load('topHeader.html');
	$('#footer').load('footer.html');
	let percentageArr = [];
	// Product_data.forEach(function (value, index){

	// 	if(value.cat_id==3){
	// 		if(value.product_discount_percenteage>=10 && value.product_discount_percenteage<=25){
	// 			console.log('value.product_id',value.product_id,value.product_discount_percenteage);
	// 			percentageArr.push(value.product_id);
	// 	// 		$('#percentageFilter').append(`
	// 	// <li><a class="listValue" href="detailsPage.html?product_id=${value.product_id}">${value.product_discount_percenteage}</a></li>`)
	// 		}
	// 		else if(value.product_discount_percenteage>10 && value.product_discount_percenteage<25){
	// 			console.log('value.product_id',value.product_id,value.product_discount_percenteage);
	// 			percentageArr.push(value.product_id);
	// 	// 		$('#percentageFilter').append(`
	// 	// <li><a class="listValue" href="detailsPage.html?product_id=${value.product_id}">${value.product_discount_percenteage}</a></li>`)
	// 		}
	// 	}




	// })
})


let span = document.getElementsByTagName('span');
let product = document.getElementsByClassName('product')
let product_page = Math.ceil(product.length / 4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;
// mobile_view	
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
	movePer = 50.36;
	maxMove = 504;
}

let right_mover = () => {
	l = l + movePer;
	if (product == 1) { l = 0; }
	for (const i of product) {
		if (l > maxMove) { l = l - movePer; }
		i.style.left = '-' + l + '%';
	}

}
let left_mover = () => {
	l = l - movePer;
	if (l <= 0) { l = 0; }
	for (const i of product) {
		if (product_page > 1) {
			i.style.left = '-' + l + '%';
		}
	}
}
span[1].onclick = () => { right_mover(); }
span[0].onclick = () => { left_mover(); }



$('#carousel-example').on('slide.bs.carousel', function (e) {
	/*
		CC 2.0 License Iatek LLC 2018 - Attribution required
	*/
	var e = $(e.relatedTarget);
	var idx = e.index();
	var itemsPerSlide = 6;
	var totalItems = $('.carousel-item').length;

	if (idx >= totalItems - (itemsPerSlide - 1)) {
		var it = itemsPerSlide - (totalItems - idx);
		for (var i = 0; i < it; i++) {
			// append slides to end
			if (e.direction == "left") {
				$('.carousel-item').eq(i).appendTo('.carousel-inner');
			}
			else {
				$('.carousel-item').eq(0).appendTo('.carousel-inner');
			}
		}
	}
});
// $('#carousel-example1').on('slide.bs.carousel', function (e) {
// 	/*
// 		CC 2.0 License Iatek LLC 2018 - Attribution required
// 	*/
// 	var e = $(e.relatedTarget);
// 	var idx = e.index();
// 	var itemsPerSlide = 6;
// 	var totalItems = $('.carousel-item').length;

// 	if (idx >= totalItems - (itemsPerSlide - 1)) {
// 		var it = itemsPerSlide - (totalItems - idx);
// 		for (var i = 0; i < it; i++) {
// 			// append slides to end
// 			if (e.direction == "left") {
// 				$('.carousel-item').eq(i).appendTo('.carousel-inner');
// 			}
// 			else {
// 				$('.carousel-item').eq(0).appendTo('.carousel-inner');
// 			}
// 		}
// 	}
// });
// $('#carousel-example2').on('slide.bs.carousel', function (e) {

// 	var e = $(e.relatedTarget);
// 	var idx = e.index();
// 	var itemsPerSlide = 6;
// 	var totalItems = $('.carousel-item').length;

// 	if (idx >= totalItems - (itemsPerSlide - 1)) {
// 		var it = itemsPerSlide - (totalItems - idx);
// 		for (var i = 0; i < it; i++) {
// 			// append slides to end
// 			if (e.direction == "left") {
// 				$('.carousel-item').eq(i).appendTo('.carousel-inner');
// 			}
// 			else {
// 				$('.carousel-item').eq(0).appendTo('.carousel-inner');
// 			}
// 		}
// 	}
// });

function myFunction3() {
	var x = document.getElementById("mysidepnav");
	if (x.className === "side-nav-aa") {
		x.className += " responsive";
	} else {
		x.className = "side-nav-aa";
	}
}


// let offer10Arr = [];
// Product_data.forEach(function (value, index)
//  {





//  else if ((value.product_discount_percenteage <= 25 && value.product_discount_percenteage >10) && value.cat_id == "3")
// 	{
// 		offer10Arr.push(value);
// 		$("#outerDiv1").append(`
// 		<div class="item" style="width:275px;display:inline-block;overflow:visible;cursor:pointer">
//                     <div class="pad15">
// 					<p class="lead"><img  style="width:100%;" src="${value.product_img}" alt=""></p>
// 					<p><b>${value.product_name}</b></p>                        
//                         <p>${value.product_discount_percenteage}%</p>
// 						<p>₹ ${value.product_discount_price}</p>
// 						<p>${value.product_description}</p>
//                     </div>
//                 </div>

// 	`)



// 	} else if
// 		((value.product_discount_percenteage <=50  && value.product_discount_percenteage >25) && value.cat_id == "3")
// 	{
// 		offer10Arr.push(value);
// 		$("#outerDiv2").append(`
// 		<div class="item" style="width:275px;display:inline-block;overflow:visible;cursor:pointer">
//                     <div class="pad15">
// 					<p class="lead"><img  style="width:100%;" src="${value.product_img}" alt=""></p>
// 					<p><b>${value.product_name}</b></p>                        
//                         <p>${value.product_discount_percenteage}%</p>
// 						<p>₹ ${value.product_discount_price}</p>
// 						<p>${value.product_description}</p>
//                     </div>
//                 </div>

// 	`)
// 	}else if((value.product_discount_percenteage <=70  && value.product_discount_percenteage >50) && value.cat_id == "3")
// 	{
// 		offer10Arr.push(value);
// 		$("#outerDiv3").append(`
// 		<div class="item" style="width:275px;display:inline-block;overflow:visible;cursor:pointer">
//                     <div class="pad15">
// 					<p class="lead"><img  style="width:100%;" src="${value.product_img}" alt=""></p>
// 					<p><b>${value.product_name}</b></p>                        
//                         <p>${value.product_discount_percenteage}%</p>
// 						<p>₹ ${value.product_discount_price}</p>
// 						<p>${value.product_description}</p>
//                     </div>
//                 </div>

// 	`)
// 	}else if((value.product_discount_percenteage >70) && value.cat_id == "3")
// 	{
// 		offer10Arr.push(value);


// 	`)
// // 	}
// // });



let offer = [];

$(document).on('click' , '.listValue' , function(){
	const dataOffer = $(this).attr('DataItem');
	$('#outerDiv').empty();
	$("#outerDiv").append(`<h1>off under ${(parseInt(dataOffer)-10)}% to ${dataOffer}% </h1>`)
	Product_data.forEach(function (value, index) {
		
		
			if ((parseInt(value.product_discount_percenteage) <= parseInt(dataOffer) && parseInt(value.product_discount_percenteage) >=
				 (parseInt(dataOffer)-10)) && value.cat_id == "3") {
				console.log(value.product_discount_percenteage);
					
				$("#outerDiv").append(`

		<a style="text-decoration: none; color: black;" href = "detailsPage.html?productname=${value.product_name.split(" ").join("").trim()}&des=${value.product_description.split(" ").join("").trim()}&product_id=${value.product_id}"><div class="item" style="width:275px;display:inline-block;cursor:pointer;">
                    <div class="pad15">
					<p class="lead"><img  style="width:100%;" src="${value.product_img}" alt=""></p>
					<p><b>${value.product_name}</b></p>                        
                        <p>${value.product_discount_percenteage}% off</p>
						<p>₹ ${value.product_discount_price}</p>
						<p>${value.product_description}</p>
                    </div></a>
	`)


			


		}
	})


})
		