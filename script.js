let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");
function opentab(tabName){
    for(tabLink of tabLinks)
    {
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents)
    {
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

const sideMenu = document.getElementById("sideMenu");

function closeMenu(){
    sideMenu.style.right=' -200px';
    console.log("mcmc");
}

function openMenu(){
    sideMenu.style.right='0';
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyB6eymHxbpTICvT1q-Z4Y55dIso4aM4z_woBtYhJ-lXiamP7l9TRRvWjAJNLZs3oyBpQ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message Sent Successfully!";
        setTimeout(function(){
            msg.innerHTML=""
        },100000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
const msg = document.getElementById("msg");