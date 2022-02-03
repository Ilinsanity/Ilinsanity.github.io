// function textreplace(i) {
//     var text = ['Web Developer', 'Programmer', 'Raptors Fan', 'University Student'];

//     if (text.length > i) {
//         setTimeout(function() {
//             $(".middlelanding").text = text[i];
//             textreplace(++i);
//         }, 2000)

//     } else if (text.length == i) {
//         textreplace(0);
//     }
// }
// textreplace(0);

$(".name").mouseenter(function() {
    // if ($(".name").hasClass("nameanimation")) {
    //     $(".name").removeClass("nameanimation");
    //     $(".name").addClass("nameanimation2");
    // } else if ($(".name").hasClass("nameanimation2")) {
    //     $(".name").removeClass("nameanimation2");
    //     $(".name").addClass("nameanimation");
    // } else {
    //     $(".name").addClass("nameanimation");
    // }
    $(".name").removeClass("nameanimation2");
    $(".name").addClass("nameanimation");
});

$(".name").mouseleave(function() {
    // if ($(".name").hasClass("nameanimation")) {
    //     $(".name").removeClass("nameanimation");
    //     $(".name").addClass("nameanimation2");
    // } else if ($(".name").hasClass("nameanimation2")) {
    //     $(".name").removeClass("nameanimation2");
    //     $(".name").addClass("nameanimation");
    // } else {
    //     $(".name").addClass("nameanimation");
    // }
    $(".name").removeClass("nameanimation");
    $(".name").addClass("nameanimation2");
});