

jQuery('.mobile_menu').slicknav({
    label: '',
    prependTo: 'header .container',
    closedSymbol: '+',
    openedSymbol: '-',
    
});




jQuery('#testimonials').owlCarousel({
    loop:true,
    margin:60,
    nav:false,
	dots:true,
    autoplay:true,
	
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});

jQuery('#experts').owlCarousel({
    loop:true,
    margin:60,
    nav:false,
	dots:true,
    autoplay:true,
	
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});


jQuery('.counter').counterUp({
    delay: 10,
    time: 1000
});

// Add minus icon for collapse element which is open by default
jQuery(".collapse.show").each(function(){
    jQuery(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
  });
  
  // Toggle plus minus icon on show hide of collapse element
  jQuery(".collapse").on('show.bs.collapse', function(){
    jQuery(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
  }).on('hide.bs.collapse', function(){
    jQuery(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
  });


  jQuery(".card .card-header:first").addClass("active").show(); //Activate first tab

  jQuery(".card-header").on('click', '.card-header', function(){    
    if (jQuery(this).find('.accordion-toggle').hasClass('active')) {        
    }
    

 })












