const centerdiv = document.getElementById('centerdiv');

fetch("https://jsonplaceholder.typicode.com/photos?_limit=30").then((apiData) => {
    return apiData.json();
  }).then((jsonData) => {
    jsonData.map((val) => {
        key = val.id;
        let img = document.createElement("img");
        img.src = `https://picsum.photos/200/350/?random=${val.id}`;
        centerdiv.appendChild(img);
        console.log(val.url)
    })
  })