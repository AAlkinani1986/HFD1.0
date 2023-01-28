document.getElementById('recipes').style.color = 'green'
let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", () => {
  console.log("button pressed")
  sendApiRequest()
})

//An asynchronous function to fetch data from the API.
async function sendApiRequest() {
  let APP_ID = "d5c69d5f"
  let API_KEY = "9347c2e9ad93b8aaa1541a7b5da990bf"
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=chicken`);
  console.log(response)

  let data = await response.json()
  console.log(data)
  useApiData(data)
}

//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data) {
  document.querySelector("#content").innerHTML = `
              <div class="card col-3 offset-1" style="width: 20rem;">
               <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
                 <div class="card-body">
                  <h5 class="card-title"> ${data.hits[0].recipe.label} </h5>
                 <p class="card-text">Source: ${data.hits[0].recipe.source}</p>
                 <a href="${data.hits[0].recipe.url}" class="btn btn-primary"> Go somewhere </a>
               </div> 
             </div>`
}
