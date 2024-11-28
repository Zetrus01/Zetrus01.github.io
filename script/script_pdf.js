document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body'),
          sidebar = body.querySelector('nav'),
          toggle = body.querySelector(".toggle"),
          modeSwitch = body.querySelector(".toggle-switch"),
          modeText = body.querySelector(".mode-text"),
          logo = sidebar.querySelector('#logo');




    modeSwitch.addEventListener("click" , () => {
        body.classList.toggle("dark");
        
        if(body.classList.contains("dark")){
            modeText.innerText = "Világos mód";
            logo.src = '../../open-book.png'; // Dark mode logo path
        } else {
            modeText.innerText = "Sötét mód";
            logo.src = '../../book.png'; // Light mode logo path
        }
    });
});
