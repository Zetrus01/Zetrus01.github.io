document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body'),
          sidebar = body.querySelector('nav'),
          toggle = body.querySelector(".toggle"),
          modeSwitch = body.querySelector(".toggle-switch"),
          modeText = body.querySelector(".mode-text"),
          logo = sidebar.querySelector('#logo');
          home = sidebar.querySelector('.icon-home');
          trendy = sidebar.querySelector('.icon-trendy');
          texts = sidebar.querySelector('.icon-texts');
          proposition = sidebar.querySelector('.icon-proposition');
          liked = sidebar.querySelector('.icon-liked');
          language = sidebar.querySelector('.icon-language');
          login = sidebar.querySelector('.icon-login')

    toggle.addEventListener("click" , () => {
        sidebar.classList.toggle("close");
    });


    modeSwitch.addEventListener("click" , () => {
        body.classList.toggle("dark");
        
        if(body.classList.contains("dark")){
            modeText.innerText = "Világos mód";
            logo.src = 'book.png'; // Dark mode logo path
        } else {
            modeText.innerText = "Sötét mód";
            logo.src = 'open-book.png'; // Light mode logo path
        }
    });
});
