$(document).ready(function () {
	$('#header').load('topHeader.html');
	$('#footer').load('footer.html');
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
$('#carousel-example1').on('slide.bs.carousel', function (e) {
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
$('#carousel-example2').on('slide.bs.carousel', function (e) {

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

function myFunction3() {
	var x = document.getElementById("mysidepnav");
	if (x.className === "side-nav-aa") {
		x.className += " responsive";
	} else {
		x.className = "side-nav-aa";
	}
}










$(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    // ResCarouselSize();




    // $(window).resize(function () {
    //     ResCarouselSize();
    // });

    // //this function define the size of the items
    // function ResCarouselSize() {
    //     var incno = 0;
    //     var dataItems = ("data-items");
    //     var itemClass = ('.item');
    //     var id = 0;
    //     var btnParentSb = '';
    //     var itemsSplit = '';
    //     var sampwidth = $(itemsMainDiv).width();
    //     var bodyWidth = $('body').width();
    //     $(itemsDiv).each(function () {
    //         id = id + 1;
    //         var itemNumbers = $(this).find(itemClass).length;
    //         btnParentSb = $(this).parent().attr(dataItems);
    //         itemsSplit = btnParentSb.split(',');
    //         $(this).parent().attr("id", "MultiCarousel" + id);


    //         if (bodyWidth >= 1200) {
    //             incno = itemsSplit[3];
    //             itemWidth = sampwidth / incno;
    //         }
    //         else if (bodyWidth >= 992) {
    //             incno = itemsSplit[2];
    //             itemWidth = sampwidth / incno;
    //         }
    //         else if (bodyWidth >= 768) {
    //             incno = itemsSplit[1];
    //             itemWidth = sampwidth / incno;
    //         }
    //         else {
    //             incno = itemsSplit[0];
    //             itemWidth = sampwidth / incno;
    //         }
    //         $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
    //         $(this).find(itemClass).each(function () {
    //             $(this).outerWidth(itemWidth);
    //         });

    //         $(".leftLst").addClass("over");
    //         $(".rightLst").removeClass("over");

    //     });
    // }


    // //this function used to move the items
    // function ResCarousel(e, el, s) {
    //     var leftBtn = ('.leftLst');
    //     var rightBtn = ('.rightLst');
    //     var translateXval = '';
    //     var divStyle = $(el + ' ' + itemsDiv).css('transform');
    //     var values = divStyle.match(/-?[\d\.]+/g);
    //     var xds = Math.abs(values[4]);
    //     if (e == 0) {
    //         translateXval = parseInt(xds) - parseInt(itemWidth * s);
    //         $(el + ' ' + rightBtn).removeClass("over");

    //         if (translateXval <= itemWidth / 2) {
    //             translateXval = 0;
    //             $(el + ' ' + leftBtn).addClass("over");
    //         }
    //     }
    //     else if (e == 1) {
    //         var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
    //         translateXval = parseInt(xds) + parseInt(itemWidth * s);
    //         $(el + ' ' + leftBtn).removeClass("over");

    //         if (translateXval >= itemsCondition - itemWidth / 2) {
    //             translateXval = itemsCondition;
    //             $(el + ' ' + rightBtn).addClass("over");
    //         }
    //     }
    //     $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    // }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

});




/*......sidebar responsive...*/
// function openNav() {
// 	document.getElementById("myNav").style.display = "block";
//   }

//   function closeNav() {
// 	document.getElementById("myNav").style.display = "none";
//   }

// $(document).load($(window).bind("resize", checkPosition));

// function checkPosition() {
// 	if ($(window).width() < 850) {
// 		$("#mysidepnav").css('display', 'none');
// 		$('.pages').removeClass('col-9');
// 		$('.pages').addClass('col-12');
// 		$('#icon').css('width', 'block');

// 		$('#icon').click(function () {
// 			$('#mysidepnav').css('display', 'inline-block');
// 		})
// 	}
// 	else {
// 		$("#mysidepnav").css('display', 'block');
// 		$('.pages').removeClass('col-12');
// 		$('.pages').addClass('col-9');
// 		$('#icon').css('display', 'none');
// 	}
// }
 
$('.listValue').on('click' , function(){

	Product_data.forEach(function(value , index){
		var discount = $(this).attr('value')
		// alert(discount);
	if ((parseInt(value.product_discount_percenteage) <= parseInt(discount) || parseInt(value.product_discount_percenteage) >= (parseInt(discount) - 10)) && value.cat_id =="3")
	{
		console.log(value.product_discount_percenteage)
		// offer10Arr.push(value);
		$("#outerDiv").append(`

		<div class="item" style="width:275px;display:inline-block;">
                    <div class="pad15">
					<p class="lead"><img  style="width:100%;" src="${value.product_img}" alt=""></p>
					<p><b>${value.product_name}</b></p>                        
                        <p>${value.product_discount_percenteage}%</p>
						<p>₹ ${value.product_discount_price}</p>
						<p>${value.product_description}</p>
                    </div>
                </div>`);
	}


	})
	

});

















