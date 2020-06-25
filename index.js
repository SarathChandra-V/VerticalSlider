
load();

function load() {
    var request = new XMLHttpRequest();

    url = callURL();
    console.log(url)
    request.open('GET', url, true)
    request.onload = function () {
        var data = JSON.parse(this.response);
        var info = data["results"];
            respo(info)
        
    }
    request.send()
}

function callURL() {
    var url = 'https://randomuser.me/api/?results=100'
    return url
}
function respo(info){
    console.log(info)
    for(let i=0; i<20; i++){
        var l = list(info,i)
        console.log(l)
         $(l).appendTo('#vertical');
     } 
}
    

function list(info,i){
    const c = `<li>
                <div>
                <img src="${info[i].picture.medium}"></img><br/>
                <a href="/"> click here </a?
                </div>
                </li>`;
const listContent = `${c}`;
return listContent;
}


