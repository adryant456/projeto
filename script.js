function toggleMode() {
    const html = document.documentElement
/*
    if (html.classList.contains('light')){
        html.classList.remove('light')
    } else {html.classList.add('light')}*/

    html.classList.toggle('light')

const img = document.querySelector("#profile img")

console.log(img)

if(html.classList.contains('light')){

    img.src="./assets/assets/avatar-light.png"} 
else
    {img.src="./assets/assets/avatar.png"}    
    
}