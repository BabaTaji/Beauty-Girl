const godisable = document.querySelector("#godisable")
const dacy = document.querySelector("#dacy")
const johnson = document.querySelector("#johnson")

document.querySelector('#godisableNext').addEventListener('click', godisableNext)
document.querySelector('#dacyNext').addEventListener('click', dacyNext)
document.querySelector('#johnsonNext').addEventListener('click', johnsonNext)

function godisableNext(){
    dacy.classList.add("hidden")
    johnson.classList.add("hidden")
    godisable.classList.toggle("hidden")
};

function dacyNext(){
    godisable.classList.add("hidden")
    johnson.classList.add("hidden")
    dacy.classList.toggle("hidden")
};

function johnsonNext(){
    dacy.classList.add("hidden")
    godisable.classList.add("hidden")
    johnson.classList.toggle("hidden")
};


