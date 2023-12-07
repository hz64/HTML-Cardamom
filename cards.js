var codes;

function loadCodes(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            codes = xhr.responseText.split("\n");
            callback();
        }
    };
    xhr.open("GET", "cards.txt", true);
    xhr.send();
}

function validateCode(input, codes) {
    if (codes.includes(input)) {
        return true;
    } else {
        return false;
    }
}

loadCodes(function() {
    // 什么都不需要在这里写
});