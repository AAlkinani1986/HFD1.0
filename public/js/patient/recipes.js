document.getElementById('recipes').style.color = 'green'
let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
  let APP_ID = "d5c69d5f"
  let API_KEY = "9347c2e9ad93b8aaa1541a7b5da990bf"
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=pizza`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}

//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
  document.querySelector("#content").innerHTML = `
  <div class="col s12 m7">
  <div class="card">
    <div class="card-image">
      <img src="images/sample-1.jpg">
      <span class="card-title">Card Title</span>
    </div>
    <div class="card-content">
      <p>I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively.</p>
    </div>
    <div class="card-action">
      <a href="#">This is a link</a>
    </div>
  </div>
</div>
</div> `
}
