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
  //code above was already added by Flatiron

  fetchToys(); //Calls fetchToys function when page loads
});

//declare global variables
const toyCollectionDiv = document.getElementById('toy-collection'); 


//Step 1 - Create a fetch request
function fetchToys(){
fetch('http://localhost:3000/toys')
  .then(resp => resp.json())
  .then(data => { 
    data.forEach(function(singleToy){ //iterates
      //console.log(singleToy); // confirms single toy is returned from fetch
      let cardDiv = document.createElement('div'); // creates a new div
      cardDiv.className = 'card'; // set cardDiv class to 'card'.
      toyCollectionDiv.appendChild(cardDiv) //appends cardDiv with classname to toycollection div
      let hTwo = document.createElement('h2'); 
      hTwo.innerHTML = singleToy.name; //Creates an h2 and sets innerHTML and displays toy name.
      let image = document.createElement('img'); //Creates img element
      cardDiv.appendChild(hTwo) // creates a new h2 header inside div
      image.src = singleToy.image;
      image.className = 'toy-avatar';
      cardDiv.appendChild(image);
      let p = document.createElement('p');
      cardDiv.appendChild(p);
      p.innerHTML = singleToy.likes;
      let likeButton = document.createElement('button');
      cardDiv.appendChild(likeButton)
      likeButton.className = 'like-btn';
      likeButton.setAttribute('id', 'toy_id');
    
    })
  });     
}

const likeButtons = document.querySelectorAll('.likeButton')
likeButtons.forEach(function(button){
  document.addEventListener('click', likeToy)
})
  

//Step 2: Creat a post request
const formData = {
  toyName: '',
  toyUrl: ''
};
const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};
fetch('http://localhost:3000/toys', configurationObject)
  .then(function(response){
    console.log(response.json());
  })
  .then(function(object){
    console.log(object);
  })
  .catch(function(error){
    console.log(error);
  })



  //STEP 3 - PATCH REQUEST




