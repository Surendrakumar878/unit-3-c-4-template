// Save the user to local storage with key "user", in following format:- 
// let data {
//     name: ,
//     image: ,
//     email: ,
//     country: "" (store country code "in", "ch", "nz", "us", "uk")
// }
document.querySelector("#submit").addEventListener("click", Submit);
var user = []

function Submit() {
    event.preventDefault();
    var Obj = {
        name: document.querySelector("#user_name").value,
        image: document.querySelector("#user_pic").value,
        email: document.querySelector("#user_email").value,
        country: document.querySelector("#user_country").value,
    };
    user.push(Obj);
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));

    window.location.href = "index.html";

}