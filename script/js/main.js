function getJSON(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function (e) {
        if (xhr.readyStat === 4) {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
            } // End inner if
        } // End outer if
    }; // End onLoad Function
    xhr.onerror = function (e) {
        console.error(xhr.statusText);
    };
    xhr.send(null);
} // End getJSON
var result = getJSON('https://www.metaweather.com/api/location/search/?query=london');
console.log(result);
