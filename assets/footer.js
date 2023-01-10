const footer = document.createElement("footer");
footer.classList.add("container", "pt-5", "fixed-bottom");

const rowfooter = document.createElement("div");
rowfooter.classList.add("row", "pt-4", "slide-in-right");

const col1footer = document.createElement("div");
col1footer.classList.add("col-6");
col1footer.innerHTML = 'Copyright &copy; Tristan Erard - <span id="date"></span>';

const col2footer = document.createElement("div");
col2footer.classList.add("col-6", "text-end");

//Condition to acces the right page depending on wich one we are
const link = document.createElement("a");
link.href = basePath + "pages/moreinfo.html";

link.classList.add("underline");
link.innerText = "En savoir plus sur ce site";
col2footer.appendChild(link);

rowfooter.appendChild(col1footer);
rowfooter.appendChild(col2footer);
footer.appendChild(rowfooter);

const body = document.querySelector('body');
body.appendChild(footer);