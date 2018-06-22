    var header = document.querySelector('header');
    var section = document.querySelector('section');
    var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        var towndata = request.response;
        populateHeader(towndata);
        showData(towndata);
    }

    function populateHeader(jsonObj) {
        var myH3 = document.createElement('h3');
        myH3.textContent = jsonObj['name'];
        header.appendChild(myH3);

        
    }



    function showData(jsonObj) {
        var cities = jsonObj['towns'];

        for (var i = 0; i < cities.length; i++) {
            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myList = document.createElement('ul');

            myH2.textContent = cities[i].name;
            myPara1.textContent = 'Motto: ' + cities[i].motto;
            myPara2.textContent = 'Year Founded: ' + cities[i].yearFounded;
            myPara3.textContent = 'Population';

            
            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myList);

            section.appendChild(myArticle);
        }
    }
