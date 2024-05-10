// const image = async ()=> {
//     let response = await fetch('https://pokeapi.co/api/v2/pokemon/4')
//     let data = await response.json()
//     console.log(data.sprites);
// }

// image()





const img = document.querySelector('img')
const btn =  document.querySelector('.btn')
btn.addEventListener('click', function(){
  
    const number = Math.floor(Math.random() * 10) + 1;;
    img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" +number +".png";
    console.log(number);
})