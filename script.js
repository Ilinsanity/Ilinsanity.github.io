function textreplace(i) {
    var text = ['Web Developer', 'Programmer', 'Raptors Fan'];

    if (text.length > i) {
        setTimeout(function() {
            document.getElementById("middlelanding").innerHTML = text[i];
            textreplace(++i);
        }, 2000)

    } else if (text.length == i) {
        textreplace(0);
    }
}

textreplace(0);