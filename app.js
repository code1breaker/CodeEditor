// ----------variables-----------
let html = document.querySelector('#html')
let css = document.querySelector('#css') 
let js = document.querySelector('#js')
let iframe = document.querySelector('#iframe')
let tabBtn = document.querySelectorAll('.tab-btn')
let tabContent = document.querySelectorAll('.tab-content')
let editor = document.querySelector('.editor')
let cross = document.querySelector('.bi-x')
let play = document.querySelector('.bi-play')

// -------------function---------------
function run() {
    iframe.contentDocument.body.innerHTML = html.value + `<style> ${css.value} </style>`
    iframe.contentWindow.eval(js.value)
}
function toggleEditor(e) {
    if (e.ctrlKey && e.key == "."){
        editor.classList.toggle("editorDisplay")
    }
}

// ---------localStorage-------------
let html_code = `<html>
<head>
<title>Document</title>
</head>
<body>
<h1>Welcome To Code Editor</h1>
<p>Here you can write and excute  your html, css & js code </p>
<p>Press "Ctrl + ." to toggle code editor</p>
<p>Click run button to execute JS</p>
</body>
</html>`

let css_code = `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap');

body{
    font-family: 'Poppins', sans-serif;
    background-image: linear-gradient(to right bottom, #eaeaec, #e9eaee, #e9e9f0, #e8e9f2, #e7e9f4);
} 
h1{
    color:#fff;
    text-shadow: 2px 3px 0px #898999;
    font-size:30px;
    text-align:center;
}
p{
    font-size:16px;
    color:#2C2C72;
}`

localStorage.setItem("html",html_code)
localStorage.setItem("css",css_code)
html.value=html_code
css.value=css_code
run()

// ----------Event Listen------------ 
html.addEventListener('keyup',run)
css.addEventListener('keyup',run)
// js.addEventListener('keyup',run)

document.addEventListener("keydown",e=>{
    toggleEditor(e)
})
 
iframe.contentDocument.addEventListener("keydown",e=>{
    toggleEditor(e)
})

tabBtn.forEach(function(tab,idx){
    
    tab.addEventListener('click',function(){
        tabContent.forEach(function(tabCont){
            tabCont.classList.remove("activeEditor")
        })
        
        tabBtn.forEach(function(tab){
            tab.classList.remove("activeTab")
        })

        tabContent[idx].classList.add("activeEditor")
        tabBtn[idx].classList.add("activeTab")  
    })

    tabContent[0].classList.add("activeEditor")
    tabBtn[0].classList.add("activeTab")
})

cross.addEventListener("click",()=>{editor.classList.remove("editorDisplay")})

play.addEventListener("click",run)
