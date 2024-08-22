// Write your helper functions here!
require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    const container = document.getElementById("missionTarget");

    container.innerHTML = `<h2>Mission Destination</h2>
                            <ol>
                                <li>Name: ${name}</li>
                                <li>Diameter: ${diameter}</li>
                                <li>Star: ${star}</li>
                                <li>Distance from Earth: ${distance}</li>
                                <li>Number of Moons: ${moons}</li>
                            </ol>
                            <img src="${imageUrl}">
                            `;
 }
 
 function validateInput(testInput) {
    if (testInput === ''){
        dataInput = "Empty";
    } else if (isNaN(testInput)){
        dataInput = "Not a Number";
    }  else{
        dataInput = "Is a Number";
    }
   return dataInput; 
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    const launchStatus = document.getElementById("launchStatus");
    const pilotDisplay = document.getElementById("pilotStatus");
    const copilotDisplay = document.getElementById("copilotStatus");
    const fuelDisplay = document.getElementById("fuelStatus");
    const cargoDisplay = document.getElementById("cargoStatus");

    list.style.visibility = "visible"
    pilotDisplay.innerHTML = `Pilot ${pilot} is ready for launch`
    copilotDisplay.innerHTML = `Co-pilot ${copilot} is ready for launch`
    fuelDisplay.innerHTML = "Fuel level high enough for launch"
    cargoDisplay.innerHTML = "Cargo mass low enough for launch"

    if (fuelLevel < 10000 || cargoLevel > 10000) {
        launchStatus.style.color = "red"
        launchStatus.innerHTML = "Shuttle Not Ready for Launch"
        if (fuelLevel < 10000){
            fuelDisplay.innerHTML = "Fuel level too low for launch"
        }
        if (cargoLevel > 10000){
            cargoDisplay.innerHTML = "Cargo mass too heavy for launch"
        }
    }
    else {
        launchStatus.style.color = "green"
        launchStatus.innerHTML = "Shuttle is Ready for Launch"
    }
 }
 
 async function myFetch() {
     let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
     let response = planetsReturned; 
     return response.json();
 }
 
 function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;