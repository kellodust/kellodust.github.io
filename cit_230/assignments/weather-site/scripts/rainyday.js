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
            if (i === 2) {
                continue;
            }
            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara5 = document.createElement('p');
            var myList = document.createElement('ul');
            var img = document.createElement('img');
            var link = document.createElement('a');

            myH2.textContent = cities[i].name;
            myPara1.textContent = 'Motto: ' + cities[i].motto;
            myPara2.textContent = 'Year Founded: ' + cities[i].yearFounded;
            myPara3.textContent = 'Population: ' + cities[i].currentPopulation + ' people';
            myPara5.textContent = 'Annual Rainfall: ' + cities[i].averageRainfall + ' inches';


            if (cities[i].name === 'Franklin') {
                img.src = "images/frank.jpg";
                link.href = "franklin.html";
            } else if (cities[i].name === 'Greenville') {
                img.src = "images/greenville.jpg";
                link.href = "greenville.html";
            } else {
                img.src = "images/springfield.jpg";
                link.href = "springfield.html";
            }

            myArticle.appendChild(myH2);
            myArticle.appendChild(link);
            link.appendChild(img);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara5);


            section.appendChild(myArticle);
        }
    }
