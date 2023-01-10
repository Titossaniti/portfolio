$(document).ready(function() {
//get the actual year
    let date = new Date().getFullYear();
    document.getElementById("date").innerHTML = date;
//Stop load anim when the anim is finished    
    setTimeout(function() {
      $('.project').removeClass('tilt-in-fwd-br');
      $('.project').removeClass('tilt-in-fwd-tl');
    },1300);
//Add the :hover anim when the load anim is finished (pb is that :hover reset other anim)
    setTimeout(function() {
        $('.project').addClass('scale-down-center');
    }, 1310);
//Form focus anim
$('input , textarea').focusin(function(){
    $(this).addClass('formfocus')
});
$('input , textarea').focusout(function(){
    $(this).removeClass('formfocus')
});
//Alert on form submit successfull
$('form').submit(function(){
    alert('Votre message a bien été envoyé !')
});

});
