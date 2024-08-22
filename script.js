
window.addEventListener("load", function() {
    const form = document.querySelector('[data-testid="testForm"]');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

    const pilotName = document.getElementById("pilotName");
    const copilotName = document.querySelector('input[name=copilotName]');
    const fuelLevel = document.querySelector('input[name=fuelLevel]');
    const cargoMass = document.querySelector('input[name=cargoMass]');
    const faultyItems = document.getElementById("faultyItems");
  
    validDataType =["Not a Number","Not a Number","Is a Number","Is a Number"];
    formDataArr = [pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value];
    let emptyFields = false;
    let badData = false;
    for (let i = 0; i < formDataArr.length; i++) {
            if (validateInput(formDataArr[i]) ===  "Empty"){
                emptyFields = true;
            }
            else if (validateInput(formDataArr[i]) !== validDataType[i]){
                badData = true; 
            }
        }
    if (emptyFields===true){
        alert("All fields are required!");
    }
    if (badData===true){
        alert("Make sure to enter valid information for each field!");
    }
    if (emptyFields === false && badData === false){
        let fuelInfo = Number(fuelLevel.value);
        let massInfo = Number(cargoMass.value);
        formSubmission(document,faultyItems,pilotName.value,copilotName.value,fuelInfo,massInfo)  
    }
    }); 

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    //console.log("Before fetch")
    let listedPlanetsResponse =  myFetch();
    //console.log(listedPlanetsResponse);
    //console.log("After fetch")

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
       // console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
    })
 });