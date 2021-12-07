let dosca = document.querySelector(".dosca")


// let zmeika = document.getElementsByClassName("zmeika");
// let foods = document.getElementById("food");



for(let i = 0; i < 400; i++){
    let box = document.createElement("div");
    dosca.appendChild(box);
    box.classList.add("box")
}



let box = document.getElementsByClassName("box");
let x = 1;
let y = 20;
for( let i = 0; i < box.length; i++){
   
    if( x > 20){
        x = 1;
        y--;
    }
     box[i].setAttribute("pozX", x);
     box[i].setAttribute("pozY", y);
     x++;   
      
}

function genZmeika(){
    let pozX = 10;
    let pozY = 11;
    return [pozX, pozY]
}
let cordinat = genZmeika();

let zmeika = [document.querySelector('[pozX = "' + cordinat[0] + '"][pozY = "' + cordinat[1] + '"]'),document.querySelector('[pozX = "' + (cordinat[0] - 1) + '"][pozY = "' + cordinat[1] + '"]'), document.querySelector('[pozX = "' + (cordinat[0] - 2 )+ '"][pozY = "' + cordinat[1] + '"]') ];

for(let i = 0; i < zmeika.length; i++){
    zmeika[i].classList.add("zmeika")
}


let food ;

function creetFood(){
    function genFood(){
        let pozX = Math.round(Math.random() * (20-1) + 1);
        let pozY = Math.round(Math.random() * (20-1) + 1);
        return [pozX, pozY];
    
    }

    let cordinatfood = genFood();
    food = [document.querySelector('[pozX = "' + cordinatfood[0] + '"][pozY = "' + cordinatfood[1] + '"]')];

    // while(food.classList.contains("zmeika")){
    //     let cordinatfood = genFood();
    //     food = [document.querySelector('[pozX = "' + cordinatfood[0] + '"][pozY = "' + cordinatfood[1] + '"]')];
    // }
    console.log(food)
    food[0].classList.add("foods")
}

creetFood();



function move(){
    let cordinat = [ zmeika[0] ? zmeika[0].getAttribute("pozX"):"" ,  zmeika[0] ? zmeika[0].getAttribute("pozY") : "",];
    
    if( zmeika[zmeika.length - 1]){
        zmeika[zmeika.length - 1].classList.remove("zmeika");
        zmeika.pop();
    } 
    
    
    
   
    
    zmeika.unshift(document.querySelector('[pozX = "' + (cordinat[0] - 1) + '"][pozY = "' + cordinat[1] + '"]'));

    
    for(let i = 0; i < zmeika.length; i++){
        if(zmeika[i]){
            zmeika[i].classList.add("zmeika");
        }
       
       
    
}
}
setInterval(move, 100);










