// document.getElementById('recipes').style.color = 'green'
// let searchButton = document.querySelector("#search")

const searchForm = document.querySelector('form')
const searchResultDiv = document.querySelector('.search-result')
const container = document.querySelector('.container')
let searchQuery = ''
const APP_ID = 'd5c69d5f'
const APP_key = '9347c2e9ad93b8aaa1541a7b5da990bf'
// console.log(container)
searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  searchQuery = e.target.querySelector('input').value
  fetchAPI()
})

async function fetchAPI() {
  const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`
  const response = await fetch(baseURL)
  const data = await response.json()
  generateHTML(data.hits)
  console.log(data)
}

function generateHTML(results) {
  container.classList.remove('initial')
  let generatedHTML = ''
  let id = 0
  results.map((result) => {
    generatedHTML += `
      <div class="item">
        <img src="${result.recipe.image}" alt="img">
        <div class="flex-container">
          <h1 class="title">${result.recipe.label}</h1>
          <a class="view-btn" target="_blank" href="${
            result.recipe.url
          }">View Recipe</a>
        </div>
        <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
        <p class="item-data">Diet label: ${
          result.recipe.dietLabels.length > 0
            ? result.recipe.dietLabels
            : 'No Data Found'
        }</p>
        <p class="item-data">Health labels: ${result.recipe.healthLabels}</p>
        <center> <i id="favorite_${id}" class="small  material-icons waves-effect waves-light"   onClick="select(${id})">favorite_border  </i>
    
        </center>
      </div>
    `

    id++
  })

  searchResultDiv.innerHTML = generatedHTML
}
function select(id) {
  const element = document.querySelector(`#favorite_${id}`)
  const body = element.innerHTML.split('<')[0]

  if (body === 'favorite') {
    element.innerHTML = 'favorite_border'
  } else {
    element.innerHTML = 'favorite'
  }
}
