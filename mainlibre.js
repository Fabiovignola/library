var app = new Vue({
    el: '#app',
    data: {
        books: [],
        search: "",
        bok: [],
        val: "",
    },
    created: function () {
        this.callAjax();

    },
    methods: {
        callAjax: function () {
            fetch("https://api.myjson.com/bins/1h3vb3", {
                method: "GET",

            }).then(function (response) {
                if (response.ok) {
                    console.log(2);

                    return response.json();
                }

            }).then(function (json) {
                app.books = json.books;
                console.log(app.books);


            }).catch(function (error) {
                console.log("Request failed:" + error.message);
            });
        },
        callInput: function () {
            this.search = document.getElementById("search")
            this.bok = document.getElementsByTagName("span")
            var oscar = document.getElementById("search").value;
            var contene = document.getElementsByClassName("container");
            for (var i = 0; i < contene.length; i++) {

                if (contene[i].innerHTML.toUpperCase().includes(oscar.toUpperCase())) {
                    contene[i].style.display = "block";
                } else {
                    contene[i].style.display = "none";
                };
                
            }
        }
    },
});