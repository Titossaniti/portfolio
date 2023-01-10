let sidelink = document.createElement('div');
sidelink.setAttribute('id', 'sidelink');
sidelink.setAttribute('class', 'fs-1');

let githubLink = document.createElement('a');
githubLink.setAttribute('href', 'https://github.com/Titossaniti');
githubLink.setAttribute('target', '_blank');
githubLink.setAttribute('class', 'bg-dark d-block text-center d-flex align-items-center');

let githubIcon = document.createElement('i');
githubIcon.setAttribute('class', 'fa-brands fa-square-github mx-auto');

githubLink.appendChild(githubIcon);
sidelink.appendChild(githubLink);

let linkedinLink = document.createElement('a');
linkedinLink.setAttribute('href', 'https://fr.linkedin.com/in/tristan-erard-2ba7b9128');
linkedinLink.setAttribute('target', '_blank');
linkedinLink.setAttribute('class', 'bg-primary d-block text-center d-flex align-items-center');

let linkedinIcon = document.createElement('i');
linkedinIcon.setAttribute('class', 'fa-brands fa-linkedin mx-auto');

linkedinLink.appendChild(linkedinIcon);
sidelink.appendChild(linkedinLink);

document.body.appendChild(sidelink);