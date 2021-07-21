$(".demoButton").append("eli")

$("#liste").append(`<li>liste1</li>`)



//1-schreibweise:
/*
$('.demoButton').click(hintergrundjQuery)


function hintergrundjQuery (){
    if($('.demoButton').hasClass('blau')){
        $('.demoButton').removeClass('blau')
    } else {
        $('.demoButton').addClass('blau')
    }
    //  $('.demoButton').toggleClass('blau')
}
*/
//oder zweite schreibweise:
$('.demoButton').click(hintergrundjQuery)
function hintergrundjQuery (){
$('.demoButton').toggleClass('blau')
}

//*******************************************/

$(".buttonImForm").click(nichtNeueLaden)
function nichtNeueLaden(event){
    event.preventDefault();
}


//-----------------------------------------
$('#eingabe').blur(inputblur);

function inputblur (event){
    let input=event.target.value;
    console.log(input);
    $('#liste').append(input);
}
