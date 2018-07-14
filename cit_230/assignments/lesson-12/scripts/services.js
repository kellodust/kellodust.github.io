   var requestURL = 'data/service.json';

    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        var service = request.response;
        
        console.log(response);
       
        $.each(response.services, function(i, item){
            var tr = $('<tr>').append(
            $('<td>').text(item.name),
            $('<td>').text('$' + item.price.toFixed(2))
                );
            $("table").append(tr);
            
        });
        
        
        
    }
