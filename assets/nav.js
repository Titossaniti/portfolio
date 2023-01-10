const nav = document.createElement("nav");
nav.classList.add("container", "py-3");

const row = document.createElement("div");
row.classList.add("row", "fs-3");
nav.appendChild(row);

const col1 = document.createElement("div");
col1.classList.add("col-6", "text-start", "slide-in-right");
row.appendChild(col1);

//Condition to acces the right page depending on wich one we are
const col1Link = document.createElement("a");

if (window.location.pathname === "/index.html") {
    col1Link.href = "/index.html";
  } else {
    col1Link.href = "../index.html";
  }

col1Link.textContent = "Tristan Erard";
col1.appendChild(col1Link);

const col2 = document.createElement("div");
col2.classList.add("col-6", "text-end", "slide-in-right");
row.appendChild(col2);

//Condition to acces the right page depending on wich one we are
const col2Link = document.createElement("a");

if (window.location.pathname === "/index.html") {
    col2Link.href = "pages/contact.html";
  } 
  else {
    col2Link.href = "contact.html";
  }

col2.appendChild(col2Link);

const underline = document.createElement("span");
underline.classList.add("underline");
underline.textContent = "Contactez-moi !";
col2Link.appendChild(underline);


// Get the first child of the body element
const firstChild = document.body.firstChild;
// Insert the nav element before the first child of the body element
document.body.insertBefore(nav, firstChild);