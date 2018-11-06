// function cambiar () {
//  document.getElementById('matrix').src = "AA.jpg";
// }
// 
// function volver () {
//  document.getElementById('matrix').src = "descarga.jpg";
// }

callJson()

function callJson() {
    fetch("https://api.myjson.com/bins/1h3vb3", {
        method: "GET",

    }).then(function (response) {
        if (response.ok) {
            console.log(2);

            return response.json();
        }

    }).then(function (json) {
        data = json;
        console.log(data);
        url = books.results[0].members;
        //
        //    tablas();

    }).catch(function (error) {
        console.log("Request failed:" + error.message);
    });
}
var search = document.getElementById("search"),
    food = document.getElementsByTagName("span"),
    forEach = Array.prototype.forEach;

search.addEventListener("keyup", function (e) {
    var choice = this.value;

    forEach.call(food, function (f) {
        if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
            f.parentNode.style.display = "none";
        else
            f.parentNode.style.display = "block";
    });
}, false);

function callUrl() {

}