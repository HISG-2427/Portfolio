import figlet from "figlet";

const nav = document.querySelector("nav");
const brandName = "";

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

const h1 = document.createElement("h1");
h1.append(`${brandName}`);
nav.insertAdjacentElement("afterbegin", h1);
