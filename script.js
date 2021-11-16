$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
        }else{
            $(".navbar").removeClass("sticky");
        }
        if(this.scrollY > 500){
            $(".scroll-up-btn").addClass("show");
        }else{
            $(".scroll-up-btn").removeClass("show");
        }
    });
    //script to scroll up
    $(".scroll-up-btn").click(function(){
        $("html").animate({scrollTop:0});
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing",{
        strings: ["Developer","Blogger","Engineer","Builder"],
        typeSpeed: 100,
        backSpeed:60,
        loop:true
    });
    // second typing animation script
    var typed = new Typed(".typing-2",{
        strings: ["Electrical Engineer","Ai Developer","Data Analist","Builder"],
        typeSpeed: 100,
        backSpeed:60,
        loop:true
    });

    // owl carosel code
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items: 1,
                nav:false
            },
            600:{
                items: 2,
                nav:false
            },
            1000:{
                items: 3,
                nav:false
            }
        }
    });
});