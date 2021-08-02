$(document).ready(function(){
    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadius: 10
    });

    const bars = document.querySelectorAll('.progress_bar');
   
    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        console.log(percentage);
        let tooltip = bar.children;
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
    })



        //image filter

        var $wrapper = $('.portfolio');

        // // Initialize iostope
    
        // $wrapper.isotope({
        //     filter : ".Certificate",
        //     layoutMode: 'masonry',
        //     animationOptions: {
        //         duration: 750,
        //         easing: 'Linear',
        //     }
        // }); 
    
        let links = document.querySelectorAll('.tabs a');
        links.forEach(Link =>{
            Link.addEventListener('click',function(e){
                e.preventDefault();
            });
        })



        //Magnify popup
        
        $('.magnify').magnificPopoup({
            type: 'image',
            gallery:{
                enabled : true
            },
            zoom : {
                enabled : true
            }
        });


        // SLider

});

$('.slider').slick({
    arrows: false,
    autoplay: true,
});

