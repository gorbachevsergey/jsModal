const $ = {};
let btn = document.getElementById('btnOpenModal');
let request = new XMLHttpRequest();




btn.addEventListener("click", event => {
    myModal.open();
    request.open(
        'GET',
        'https://60d2c48c858b410017b2e2d9.mockapi.io/users',
        true,
    );

    request.responseType='json'

    request.send();

    request.onload = function() {
        baseName = []

        let basePeople = request.response.slice(0, 50);
        for ( let i = 0; i<50;i++) {
            baseName.push(basePeople[i]['name'])
        }

        baseName = baseName.map(function(name) {
            return name.charAt(0).toLowerCase() + name.slice(1)
        })

        baseName.sort();

        baseNameId = [];

        for (let i = 0; i < baseName.length; i++) {
            baseNameId.push({'id':i,'name':baseName[i]})
        }

        console.log(baseNameId)

        for (let i = 0; i < baseNameId.length; i++) {
            setTimeout(function () {
                document.getElementById('ul').innerHTML += "<li>"+baseNameId[i].name+"</li>"
            }, i*2000)
        }
    }

})