

$(".name").mouseenter(function() {
  
    $(".name").removeClass("nameanimation2");
    $(".name").addClass("nameanimation");
});

$(".name").mouseleave(function() {
   
    $(".name").removeClass("nameanimation");
    $(".name").addClass("nameanimation2");
});
setTimeout(() => {
    document.getElementById("namea").style.visibility = "visible";
var text = document.getElementById('namea');

var typewriter = new Typewriter(text, {
    loop: true
});

typewriter.typeString('Issac Lin')
    .pauseFor(1500)
    .deleteAll()
    .typeString('A Student')
    .pauseFor(1500)
    .deleteAll()
    .typeString('A Web Developer')
    .pauseFor(1500)
    .deleteAll()
    .typeString('A Raptors Fan')
    .pauseFor(1500)
    .start();
}, 2700);

