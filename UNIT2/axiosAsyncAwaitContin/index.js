// Using the https://swapi.co/ API
// create a page that has a select tab. 
// The first option should say to pick a Character. 
// The user should Not be able to select the first option. 
// The rest of the option tags should be the characters names. 
// When a character is selected we should learn about 
// the characters homeWorld. 
document.addEventListener("DOMContentLoaded", () => {
    let select = document.querySelector("select");
    const getCharacters = async () => {
        try {
            let res = await axios.get("https://swapi.co/api/people");
            let characters = res.data.results;
            characters.forEach(character => {
                let option = document.createElement("option");
                option.innerText = character.name; 
                option.value = character.homeworld;
                select.appendChild(option)
            })
        } catch(err) {
            console.log(err);
            debugger
            
        }
    }

    const getHomeWorld = async (url) => {
        try {
            let res = await axios.get(url);
            let planet = res.data;
            let section = document.querySelector("section");
            if(section) {
                section.parentNode.removeChild(section);
            }
            section = document.createElement("section");
            let h1 = document.createElement("h1");
            h1.innerText = planet.name; 
            let h3 = document.createElement("h3");
            h3.innerText = "Climate: " + planet["climate"];
            document.body.appendChild(section)
            section.appendChild(h1)
            section.appendChild(h3)
        } catch(err) {
            console.log(err)
        }
    }

    getCharacters()

    select.addEventListener("change", (event) => {
        getHomeWorld(event.target.value)
    })
} )

