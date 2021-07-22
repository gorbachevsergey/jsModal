let btn = document.getElementById('btnOpenModal');
let request = new XMLHttpRequest();
let modalOn = document.getElementById('modal');
let btnClose = document.getElementById('btnClose');
let list = document.getElementById('ul');

btnClose.addEventListener('click', event => {
    modalOn.classList.remove('meinModalOn');
})

btn.addEventListener("click", event => {
    request.open(
        'GET',
        'https://60d2c48c858b410017b2e2d9.mockapi.io/users',
        true,
    );

    request.responseType='json'

    request.send();

    request.onload = function() {
        let baseName = []

        let basePeople = request.response.slice(0, 50);
        for ( let i = 0; i<50; i++) {
            baseName.push(basePeople[i]['name'])
        }

        baseName = baseName.map(function(name) {
            return name.charAt(0).toLowerCase() + name.slice(1)
        })

        baseName.sort();

        let baseNameId = baseName.reduce(function(prev,item,index) {
            prev.push({'id' : index, 'name': item})
            return prev
        },[])

        modalOn.classList.add('meinModalOn');

        document.getElementById('ul').innerHTML = '';
        let i = 0;
        let id = setInterval(function() {
            if (i == baseName.length-1 ) {
                clearInterval(id);
            } else{
                document.getElementById('ul').innerHTML += "<li>"+baseNameId[i].name+"</li>"
                i++;
            };

        }, 100);
        }
    }
)