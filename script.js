let inp1 = document.querySelector('.inp1')
let click = document.querySelector('.click')
let ul = document.querySelector('.ul')



click.addEventListener('click', ()=> {
    let li = document.createElement('li')
    li.textContent = inp1.value 
    ul.appendChild(li)
        inp1.value=("")
})
let isBlue = false; // dastlabki holat

let myFunction = function () {
    if (!isBlue) {
        
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        isBlue = true;
       rue
    } else {
        
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        isBlue = false;
      
    }
}
