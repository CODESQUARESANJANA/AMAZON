$(document).ready(function(){
    $('#header').load('topHeader.html');
    $('#footer').load('footer.html');
})


let span = document.getElementsByTagName('span');
	let product = document.getElementsByClassName('product')
	let product_page = Math.ceil(product.length/4);
	let l = 0;
	let movePer = 25.34;
	let maxMove = 203;
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 50.36;
	 	maxMove = 504;
	 }

	let right_mover = ()=>{
		l = l + movePer;
		if (product == 1){l = 0; }
		for(const i of product)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of product){
			if (product_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	span[1].onclick = ()=>{right_mover();}
	span[0].onclick = ()=>{left_mover();}



	$('#carousel-example').on('slide.bs.carousel', function (e) {
		/*
			CC 2.0 License Iatek LLC 2018 - Attribution required
		*/
		var $e = $(e.relatedTarget);
		var idx = $e.index();
		var itemsPerSlide = 6;
		var totalItems = $('.carousel-item').length;
	 
		if (idx >= totalItems-(itemsPerSlide-1)) {
			var it = itemsPerSlide - (totalItems - idx);
			for (var i=0; i<it; i++) {
				// append slides to end
				if (e.direction=="left") {
					$('.carousel-item').eq(i).appendTo('.carousel-inner');
				}
				else {
					$('.carousel-item').eq(0).appendTo('.carousel-inner');
				}
			}
		}
	});
	$('#carousel-example1').on('slide.bs.carousel', function (e) {
		/*
			CC 2.0 License Iatek LLC 2018 - Attribution required
		*/
		var $e = $(e.relatedTarget);
		var idx = $e.index();
		var itemsPerSlide = 6;
		var totalItems = $('.carousel-item').length;
	 
		if (idx >= totalItems-(itemsPerSlide-1)) {
			var it = itemsPerSlide - (totalItems - idx);
			for (var i=0; i<it; i++) {
				// append slides to end
				if (e.direction=="left") {
					$('.carousel-item').eq(i).appendTo('.carousel-inner');
				}
				else {
					$('.carousel-item').eq(0).appendTo('.carousel-inner');
				}
			}
		}
	});
	$('#carousel-example2').on('slide.bs.carousel', function (e) {
		
		var $e = $(e.relatedTarget);
		var idx = $e.index();
		var itemsPerSlide = 6;
		var totalItems = $('.carousel-item').length;
	 
		if (idx >= totalItems-(itemsPerSlide-1)) {
			var it = itemsPerSlide - (totalItems - idx);
			for (var i=0; i<it; i++) {
				// append slides to end
				if (e.direction=="left") {
					$('.carousel-item').eq(i).appendTo('.carousel-inner');
				}
				else {
					$('.carousel-item').eq(0).appendTo('.carousel-inner');
				}
			}
		}
	});