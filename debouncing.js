const search = (input)=>{
    console.log("Input-->" , input);
}

function debouncing(func , delay){
    let timer;
    return function(...input){
       // clearInterval(timer);
        timer = setTimeout(()=>{
            console.log("hit")
          func(...input);
        },delay);
    }
}

const debounceSearch = debouncing(search , 300);


debounceSearch("R...")
debounceSearch("Re")

debounceSearch("Rea")
debounceSearch("React,,,,")
