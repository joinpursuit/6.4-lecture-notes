let ul = document.querySelector("ul");

const getAllCars = async () => {
    try {
        let res = await axios.get("http://localhost:3000/cars");
        debugger
    } catch (err) {
        debugger
    }
}

getAllCars();