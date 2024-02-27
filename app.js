h1=document.querySelector("h1")

function changecolor(colour,delay ,nextcolour){
    setTimeout( ()=>{
        h1.style.color=colour;
       if(nextcolour){
        nextcolour();
       }
    }, delay)
}

changecolor("red",1000,()=>{
    changecolor("blue",1000,()=>{
        changecolor("pink",1000,()=>{
            changecolor("orange",1000,()=>{
                changecolor("white",1000,()=>{
                    changecolor("cyan",1000);
                })
            })
        })
    })
})
