document.addEventListener("DOMContentLoaded", () => {
  const fetchData = (url, callback) => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then(res => {
        callback(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const populateSelect = data => {
    let output = [];
    let dogs = data.message;
    for (let key in dogs) {
      if (dogs[key].length) {
        dogs[key].forEach(dog => {
          output.push(`${dog} ${key}`);
        });
      } else {
        output.push(key);
      }
    }
    let select = document.querySelector("select");
    output.forEach(dogBreed => {
      let option = document.createElement("option");
      option.innerText = dogBreed;
      select.appendChild(option);
    });
  };

  const showImage = data => {
    let image = document.querySelector("img");
    if (image) {
      image.parentNode.removeChild(image);
    }
    image = document.createElement("img");
    image.src = data.message;
    document.body.appendChild(image);
  };

  fetchData("https://dog.ceo/api/breeds/list/all", populateSelect);

  let select = document.querySelector("select");
  select.addEventListener("change", e => {
    let target = e.currentTarget.value;
    target = target
      .split(" ")
      .reverse()
      .join("/");
    let url = "https://dog.ceo/api/breed/" + target + "/images/random";
    fetchData(url, showImage);
  });
});
