
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
    
    // for(let i=0; i<5; i++){
    //    var l = list(i)
    //     $(l).attr('class','slide').appendTo('#vertical');
    // }

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


//  function controlButtons(){
//     const containerheight = $('.vertical-slider').height();
//      const b = `<div class="control-buttons">
//                     <button id="up" > < </button>
//                     <button id="down"> > </button>         
//                 </div>`;
//     const Button = `${b}`;
//     return(Button);
//  }      

//  const containerheight = $('.vertical-slider').height();
//  const scrollHeight = containerheight/3;
 
//  $("#up").click(function prev(){
//      console.log(-containerheight)
//    var matrix = parseInt($('#slides').css('transform').split(',')[5]);
//    console.log(matrix)
//    if(matrix === 0){
//    $('#slides').css("transform",`translate3d(0px,${-scrollHeight}px,0px)`);
//    }
//    if(matrix !== 0){
//    $('#slides').css("transform",`translate3d(0px,${matrix-scrollHeight}px,0px)`)
//    }
//    if(matrix < -containerheight){
//     $('#slides').css("transform",`translate3d(0px,${matrix}px,0px)`)
//     }
//  });

//  $("#down").click(function next(){
//     console.log(containerheight)
//   var matrix = parseInt($('#slides').css('transform').split(',')[5]);
//   console.log(matrix)
//   if(matrix === 0){
//   $('#slides').css("transform",`translate3d(0px,0px,0px)`);
//   }
//   if(-matrix !== 0){
//   $('#slides').css("transform",`translate3d(0px,${matrix+scrollHeight}px,0px)`)
//   }
//   if(matrix > containerheight){
//     $('#slides').css("transform",`translate3d(0px,0px,0px)`);
//    }
// });
