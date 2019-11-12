document.addEventListener("DOMContentLoaded", () => {

    const drawMain = () => {
        let main = document.querySelector("main")
        if(main) return; 
         main = document.createElement("main");
        let h1 = document.createElement("h1");
        h1.innerText = "Music"
        main.appendChild(h1)
        
        let h3 = document.createElement("h3");
        h3.innerText = "Music is awesome!"
        main.appendChild(h3)
        let instruments = ["guitar", "piano", "spoons"];
        let ul = document.createElement("ul")
        for(let instrument of instruments) {
            let li = document.createElement("li")
            li.innerText = instrument;
            ul.appendChild(li)
        }
        main.appendChild(ul);
        document.body.prepend(main)
    }
    drawMain();
    let footer = document.createElement("footer");
    let clear = document.createElement("button")
    clear.innerText = "Clear Screen"
    let draw = document.createElement("button")
    draw.innerText = "Draw Screen";
    footer.appendChild(clear)
    footer.appendChild(draw)
    draw.addEventListener("click", drawMain);
    
    clear.addEventListener("click", () => {
        let main = document.querySelector("main")
        document.body.removeChild(main)
    })

    document.body.appendChild(footer)
})