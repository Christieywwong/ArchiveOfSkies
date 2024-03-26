// document.addEventListener("DOMContentLoaded", function() {
//     const selectionsText = document.querySelectorAll(".selections-text");
  
//     selectionsText.forEach(function(element) {
//       element.addEventListener("click", function() {
//         element.classList.toggle("clicked");
//       });
//     });
//   });


// let button1 = document.getElementById('button1');
// let container = document.getElementById("output-container");

//   fetch('skies.json')
//   .then(function(response) {
//       return response.json();
//   })
//   .then(function(collection){
//     displayData(collection);

//       function displayData(collection){
//         container.innerHTML = "";
//         for (let item of collection){
//         const itemElement = document.createElement("div");
//         itemElement.innerHTML = `
//        <button><img src="${item.image}"></button>
//         `;
//         container.appendChild(itemElement);
//         }
//     }
    
//     button1.addEventListener("click", function(){
//         const filteredData = collection.filter((item) => item.coordinates == "22.3193° N, 114.1694° E");
//         displayData(filteredData);
//     });
//   });

let locationToronto = document.getElementById('locationToronto');
let locationHongKong = document.getElementById('locationHongKong');
let locationJapan = document.getElementById('locationJapan');  
let locationMalaysiaSingapore = document.getElementById('locationMalaysiaSingapore');  
let locationNewYork = document.getElementById('locationNewYork');  

let year2021 = document.getElementById('year2021');  
let year2022 = document.getElementById('year2022');  
let year2023 = document.getElementById('year2023');  
let year2024 = document.getElementById('year2024'); 

let withWhomAlone = document.getElementById('withWhomAlone'); 
let withWhomFamily = document.getElementById('withWhomFamily'); 
let withWhomFriends = document.getElementById('withWhomFriends'); 

let timeDay = document.getElementById('timeDay'); 
let timeNight = document.getElementById('timeNight'); 

let additionalVisualElementsBuildings = document.getElementById('additionalVisualElementsBuildings'); 
let additionalVisualElementsCarOrRoad = document.getElementById('additionalVisualElementsCarOrRoad'); 
let additionalVisualElementsLandscape = document.getElementById('additionalVisualElementsLandscape'); 
let additionalVisualElementsPeople = document.getElementById('additionalVisualElementsPeople'); 
let additionalVisualElementsWater = document.getElementById('additionalVisualElementsWater');


let colorOrange = document.getElementById('colorOrange'); 
let colorBlue = document.getElementById('colorBlue'); 
let colorPinkAndPurple = document.getElementById('colorPinkAndPurple'); 
let colorBlackAndGrey = document.getElementById('colorBlackAndGrey'); 

let allFilter = document.getElementById('allFilter'); 

let container = document.getElementById("output-container");


document.addEventListener("DOMContentLoaded", function() {
  const selectionsText = document.querySelectorAll(".selections-text");
  
  selectionsText.forEach(function(element) {
    element.addEventListener("click", function() {
      element.classList.toggle("clicked");
    });
  });

  fetch('skies.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(collection){
      displayData(collection);

      function displayData(collection){
        container.innerHTML = "";
        for (let item of collection){
          const itemElement = document.createElement("div");
          itemElement.innerHTML = `
                <a href="#" id="popup-link" class="bwImages imageButton"><img src="${item.image}"></a>            
          `;
          container.appendChild(itemElement);
        }
      }

// fetch('skies.json')
// .then(function(response) {
//   return response.json();
// })
// .then(function(collection){
//   displayData(collection);

//   function displayData(collection){
//     container.innerHTML = "";
//     for (let item of collection){
//       const itemElement = document.createElement("div");
//       itemElement.innerHTML = `
//             <div class=""><button class="bwImages"><img src="${item.image}"></button></div>
//       `;
//       container.appendChild(itemElement);
//     }
//   }
       
      locationToronto.addEventListener("click", function(){
        const filteredData = collection.filter((item) => item.coordinates == "43.6532° N, 79.3832° W"); // Toronto coordinates
        displayData(filteredData);
      });
      locationHongKong.addEventListener("click", function(){ // Event listener for the new button
        const filteredData = collection.filter((item) => item.coordinates == "22.3193° N, 114.1694° E");   
        displayData(filteredData);
      });
      locationJapan.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.coordinates == "36.2048° N, 138.2529° E");   
        displayData(filteredData);
      });
      locationNewYork.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.coordinates == "40.7128° N, 74.0060° W");   
        displayData(filteredData);
      });
      locationMalaysiaSingapore.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.coordinates == "1.3521° N, 103.8198° E &  4.2105° N, 101.9758° E");   
        displayData(filteredData);
      });






      year2021.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.year === "2021");   
        displayData(filteredData);
      });
      year2022.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.year === "2022");   
        displayData(filteredData);
      });
      year2023.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.year === "2023");   
        displayData(filteredData);
      });
      year2024.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.year === "2024");   
        displayData(filteredData);
      });





      
      withWhomAlone.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.withWhom === "Alone");   
        displayData(filteredData);
      });
      withWhomFamily.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.withWhom === "Family");   
        displayData(filteredData);
      });
      withWhomFriends.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.withWhom === "Friend(s)");   
        displayData(filteredData);
      });





      timeDay.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.dayOrNight === "Day");   
        displayData(filteredData);
      });
      timeNight.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.dayOrNight === "Night");   
        displayData(filteredData);
      });


      additionalVisualElementsBuildings.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.additionalVisualElements.includes("Buildings"));
        displayData(filteredData);
        console.log("Clicked on 'Buildings' button");
      });
      additionalVisualElementsCarOrRoad.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.additionalVisualElements.includes("Road/Car"));
        displayData(filteredData);
        console.log("Clicked on 'Buildings' button");
      });
      additionalVisualElementsLandscape.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.additionalVisualElements.includes("Landscape"));
        displayData(filteredData);
      });
      additionalVisualElementsPeople.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.additionalVisualElements.includes("People"));
        displayData(filteredData);
      });
      additionalVisualElementsWater.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.additionalVisualElements.includes("Water"));
        displayData(filteredData);
      });




      colorOrange.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.colorOfTheSky.includes("Orange"));
        displayData(filteredData);
      });
      colorBlue.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.colorOfTheSky.includes("Blue"));
        displayData(filteredData);
      });
      colorPinkAndPurple.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.colorOfTheSky.includes("Pink/Purple"));
        displayData(filteredData);
      });
      colorBlackAndGrey.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.colorOfTheSky.includes("Black/Grey"));
        displayData(filteredData);
      });

      
      timeDay.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.dayOrNight === "Day");   
        displayData(filteredData);
      });
      timeNight.addEventListener("click", function(){ 
        const filteredData = collection.filter((item) => item.dayOrNight === "Night");   
        displayData(filteredData);
      });


      allFilter.addEventListener("click", function(){ 
        displayData(collection); 
      });

    });
});


  
// function renderItems(collection){
//     const collectionList = document.querySelector('.collection')

//     console.log("data records in JSON", collection);
//     collection.forEach(function(item){
//         console.log(item.date);
//     });

//     collection.forEach(function(item){
//     const listItems = document.createElement('div')
//     listItems.classList.add("skies");


//     const itemDetails = 
//     `
//         <img src="${item.image}"/>
//         <p>date: ${item.date}</p>
//         <p>time: ${item.time}</p>
//         <p>Color Of The Sky: ${item.colorOfTheSky}</p>
//         <p>Location: ${item.location}</p>
//         <p>With Whom: ${item.withWhom}</p>
//         <p>Additional Visual Elements: ${item.additionalVisualElements}</p>

//     `
//     listItems.insertAdjacentHTML('beforeend', itemDetails)

//     collectionList.appendChild(listItems)

//     })

// }

// function displayData(collection){
//     container.innerHTML = "";
//     for (let item of collection){
//     const itemElement = document.createElement("div");
//     itemElement.innerHTML = `
//     <div class="item">
//     <h3>${item.time}</h3>
//     <img src="${item.image}">
//     </div>
//     `;
//     container.appendChild(itemElement);
//     }










// function openPopup(imageSrc) {
//     const popupImage = document.getElementById('popupImage');
//     popupImage.src = imageSrc;
//     document.getElementById('popupContainer').style.display = 'block';
//   }
  
//   // Function to close the popup
//   function closePopup() {
//     document.getElementById('popupContainer').style.display = 'none';
//   }
  
//   // Event listener for close button
//   document.querySelector('.close').addEventListener('click', closePopup);


// var popupLink = document.getElementById("popup-link");
// var popupWindow = document.getElementById("popup-window");
// var closeButton = document.getElementById("close-button");
// // Show the pop-up window when the link is clicked
// popupLink.addEventListener("click", function(event) {
//   event.preventDefault();
//   popupWindow.style.display = "block";
// });
// // Hide the pop-up window when the close button is clicked
// closeButton.addEventListener("click", function() {
//   popupWindow.style.display = "none";
// });