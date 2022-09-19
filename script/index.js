const dateTag = document.querySelector('.current-date')

let currentYear = new Date().getFullYear();

dateTag.innerHTML = currentYear || "2022";