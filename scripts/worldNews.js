import { Sidebar } from "../components/Sidebar.js"
document.getElementById("Sidebar").innerHTML = Sidebar()
let divbox = document.querySelector('#Sideba')
let user = JSON.parse(localStorage.getItem("user"))
getdata(user)

function getdata(data) {
    data.forEach((el) => {
        let div = document.createElement("div")
        let img = document.createElement("img");
        let h1 = document.createElement("h3");
        let h2 = document.createElement("h3");
        let h3 = document.createElement("h3");
        img.src = el.image
        h1.innerText = el.name
        h2.innerText = el.email
        h3.innerText = el.country
        div.append()
        divbox.append(img, h1, h2, h3)
    })
}


let country = document.getElementById("country").children;

for (let el of country) {
    el.addEventListener("click", hello);
}

function hello() {
    Country(this.id);
}

let search = (e) => {
    if (e.key === "Enter") {
        searchImages();
    }
};

document.getElementById("query").addEventListener("keydown", search);
let c = document.getElementById("query").value;
let searchImages = async(q) => {
    let query = document.getElementById("query").value;
    if (q) {
        query = q;
    }
    let res = await fetch(
        `https://masai-mock-api.herokuapp.com/news?q=${query} `
    );

    let data = await res.json();

    console.log(data.articles);

    append(data.articles);
};
let Country = async(q) => {
    let query = document.getElementById("query").value;
    if (q) {
        query = q;
    }
    let res = await fetch(
        `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}  `
    );

    let data = await res.json();

    console.log(data.articles);

    append(data.articles);
};

let append = (data) => {
    let news_result = document.getElementById("news_result");
    news_result.innerHTML = null;
    data.forEach((el) => {
        let div = document.createElement("div");
        div.setAttribute("class", "image");
        let img = document.createElement("img");
        let h3 = document.createElement("h3");
        let h4 = document.createElement("h4");

        img.src = el.urlToImage;
        h3.innerText = el.title;
        h4.innerText = el.description;

        div.append(img, h3, h4);
        news_result.append(div);
    });
};