let request = new XMLHttpRequest();

request.open(
    'GET',
    'https://60d2c48c858b410017b2e2d9.mockapi.io/users',
    true,
    );

request.responseType='json'

request.send();
request.onload = function() {
    baseName=[]
    let basePeople = request.response.slice(0, 50);
    for ( let i = 0; i<50;i++) {
        baseName.push(basePeople[i]['name'])
        baseName[i][0].toLowerCase()
    }

    baseName = baseName.map(function(name) {
        return name.charAt(0).toLowerCase() + name.slice(1)
    })
    
    baseName.sort();
    
    console.log(baseName)
}

