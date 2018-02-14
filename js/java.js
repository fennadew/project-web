/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
// Het script mag pas uitgevoerd worden wanneer de pagina geladen is.
document.addEventListener("DOMContentLoaded", function (event) {
    var buttonFilter = document.querySelector("#btn"); // variabel aangemaakt voor de filter/sorteren button
    var content = document.querySelector("#content"); // variabel aangemaakt voor de filters die verborgen of laten zien worden
    var input = document.getElementById("myInput"); // variabel aangemaakt voor de input van het zoekveld
    var likeImg = document.querySelectorAll("button img"); // variabel aangemaakt voor het image van de like button
    var buttonLike = document.querySelectorAll("button"); // variabel aangemaakt voor de like button zelf
    var likeTotaal = document.querySelector("li a div p"); // variabel aangemaakt voor de DOM manipulatie om het aantal likes in te zetten
    var aantalLikes = 1; // variabel aangemaakt voor het aantal likes 



    function startSearching() {
        var articlesHeadingAll; // variabel aangemaakt om de h3's van de articles op te halen
        var articlesNumbersAll; // variabel aangemaakt om de h4's van de articles op te halen
        var i; // variabel aangemaakt voor de loop om alle artikelen te selecteren
        var filter = input.value.toLowerCase(); //alles wat getypt wordt in het input veld wordt omgezet naar lowercase zodat het later vergeleken kan worden 
        var articles = document.querySelectorAll("article"); //Alle articles worden opgehaald
        for (i = 0; i < articles.length; i++) { // De loop zorgt ervoor dat de functie bij alle articles gaat kijken of de getypte input overeenkomt met de h3 en h4's van de articles 
            articlesHeadingAll = articles[i].getElementsByTagName("h3")[0];
            articlesNumbersAll = articles[i].getElementsByTagName("h4")[0];
            if (articlesHeadingAll.innerHTML.toLowerCase().indexOf(filter) > -1) { // Ook de h3 van de articles worden omgezet naar lowerCase en vergeleken
                articles[i].style.display = ""; // Als de input met de h3 overeenkomt zullen de articles blijven staan
            } else if (articlesNumbersAll.innerHTML.toLowerCase().indexOf(filter) > -1) { // Of als de input met de h4 overeenkomt zullen de articles blijven staan 
                articles[i].style.display = "";
            } else {
                articles[i].style.display = "none"; //Als ze input niet overeenkomt zullen ze niet weergeven worden

            }
        }

    }


    // for (i = 0; i < buttonLike.length; i++) {
    buttonLike[0].addEventListener("click", function () { // Wanneer er op de button geklikt wordt begint de functie
        if (likeImg[0].src.match("focus")) { //Als het woord 'focus' in de src van de img voorkomt 
            likeImg[0].src = "img/hartjeroze.png"; // Dan moet de src verandert worden
            likeTotaal.innerHTML = aantalLikes++; // Het aantal likes moet veranderen
        } else {
            likeImg[0].src = "img/hartjerozefocus.png"; // Wanneer de src geen 'focus' in zijn bestand heeft moet de image veranderen
            likeTotaal.innerHTML = aantalLikes--; // Ook het aantal likes veranderd hier weer bij
        }
    });
    // };


    input.addEventListener("keyup", startSearching); // De functio begint wanneer de gebruiker op een toets druk in het input veld
    content.classList.add("hidden"); //Pas in javascript wordt de content van de filter verborgen. Als javascript niet werkt is het dus gewoon te zien.
    buttonFilter.addEventListener("click", function () { // Wanneer er op de button van fiteren/sorteren geklikt word start een een functie die toggled tussen verbergen en laten zien.
        content.classList.toggle('hidden');
    });


});