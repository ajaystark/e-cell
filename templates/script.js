$('#read-more-1').click(function(){
    $('#long-description-1').show();
    $('#read-more-1').hide();
    $('#read-less-1').show()
});
$('#read-less-1').click(function(){
    $('#long-description-1').hide();
    $('#read-less-1').hide();
    $('#read-more-1').show()
});

ScrollReveal().reveal('.scroll-animation',{distance:"50px",opacity:0,duration:1000});
ScrollReveal().reveal('.scroll-delay-1',{distance:"50px",opacity:0,duration:1000,delay:500});
ScrollReveal().reveal('.scroll-delay-2',{distance:"50px",opacity:0,duration:1000,delay:1000});
ScrollReveal().reveal('.scroll-delay-3',{distance:"50px",opacity:0,duration:1000,delay:1500});
ScrollReveal().reveal('.scroll-delay-4',{distance:"50px",opacity:0,duration:1000,delay:2000});
ScrollReveal().reveal('.scroll-delay-5',{distance:"50px",opacity:0,duration:1000,delay:2500});
