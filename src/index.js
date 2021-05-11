let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  fetchToys(); //Calls fetchToys function when page loads
});

const toyCollectionDiv = document.getElementById('toy-collection'); 
let createCard = document.createElement('div').className = 'card';





//Step 1 - Create a fetch request
function fetchToys(){
fetch('http://localhost:3000/toys')
  .then(resp => resp.json())
  .then(data => console.log(data)); //Log verifies fetch returned obj
    let toys = data;
    toys.forEach(function(singleToy){ //Iterates over each toy

    })

}
