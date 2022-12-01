//event pada link di klik
$('.page-scroll').on('click',function(e){

    ///ambil isi link
    var ref = $(this).attr('href');
    
    //tangkap element 
    var eleref = $(ref);

    //Pindah Element
    $('html, body').animate({
        scrollTop: eleref.offset().top - 50
    }, 1000, 'easeInSine');

    e.preventDefault();

});