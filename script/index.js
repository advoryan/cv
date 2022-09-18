const dateTag = document.querySelector('.current-date')

let year = new Date().getFullYear();
dateTag.innerHTML = year;