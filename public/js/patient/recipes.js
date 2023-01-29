<<<<<<< HEAD
document.getElementById("recipes").style.color = "green";
let searchButton = document.querySelector("#search");
=======
// document.getElementById('recipes').style.color = 'green'
// let searchButton = document.querySelector("#search")
>>>>>>> 0ec21a4deb8258c797f05b04a71d7f2f3f6d2bdf

const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');
let searchQuery = '';
const APP_ID = "d5c69d5f";
const APP_key = "9347c2e9ad93b8aaa1541a7b5da990bf";
// console.log(container)
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector('input').value;
  fetchAPI();
})

async function fetchAPI() {
  const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`;
  const response = await fetch(baseURL);
  const data = await response.json();
  generateHTML(data.hits)
  console.log(data);
}

function generateHTML(results) {
  container.classList.remove('initial');
  let generatedHTML = '';
  results.map(result => {
    generatedHTML += `
      <div class="item">
        <img src="${result.recipe.image}" alt="img">
        <div class="flex-container">
          <h1 class="title">${result.recipe.label}</h1>
          <a class="view-btn" target="_blank" href="${result.recipe.url}">View Recipe</a>
        </div>
        <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
        <p class="item-data">Diet label: ${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels : 'No Data Found'}</p>
        <p class="item-data">Health labels: ${result.recipe.healthLabels}</p>
        <center> <i class="small material-icons waves-effect waves-light">favorite</i>
    
        </center>
      </div>
    `
  })
  searchResultDiv.innerHTML = generatedHTML;
}


/* 
//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", () => {
  console.log("button pressed");
  sendApiRequest();
});

//An asynchronous function to fetch data from the API.
async function sendApiRequest() {
  let APP_ID = "d5c69d5f";
  let API_KEY = "9347c2e9ad93b8aaa1541a7b5da990bf";
  let response = await fetch(
    `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=chicken`
  );
  console.log(response);

  let data = await response.json();
  console.log(data);
  useApiData(data);
}

//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data) {
  document.querySelector("#content").innerHTML = `
              <div class="card col-3 offset-1" style="width: 20rem;">
               <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
                 <div class="card-body">
                  <h5 class="card-title"> ${data.hits[0].recipe.label} </h5>
                  <i class="small material-icons waves-effect waves-light">favorite_border</i> 
                  <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">add</i></a>
                 <p class="card-text">Source: ${data.hits[0].recipe.source}</p>
                 <a href="${data.hits[0].recipe.url}" class="btn btn-primary"> More Details</a>
               </div> 
             </div>`;
}
*/