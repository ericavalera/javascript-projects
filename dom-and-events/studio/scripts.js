// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){

const takeOff = document.getElementById('takeoff');
let flightStatus = document.getElementById('flightStatus');
let shuttleBackground = document.getElementById('shuttleBackground');
let shuttleHeight = document.getElementById('spaceShuttleHeight')
const landButton = document.getElementById('landing');
const abortMission = document.getElementById('missionAbort');
let up = document.getElementById('up');
let down = document.getElementById('down');
let right= document.getElementById('right');
let left = document.getElementById('left');
let rocket = document.getElementById('rocket')
rocket.style.position = "absolute";
rocket.style.bottom = "0px";
rocket.style.left = "250px";


takeOff.addEventListener('click', function(){
   let response= confirm('Confirm that the shuttle is ready for takeoff.');
   if(response === true){
    flightStatus.innerHTML= 'Shuttle in flight.';
    shuttleBackground.style.backgroundColor = "blue";
    shuttleHeight.innerHTML = '10000';
    if(flightStatus.innerHTML !=='Shuttle in flight.'){
    rocket.style.bottom = parseInt(rocket.style.bottom) + 10 +"px";
    }
        }

    });
    
landButton.addEventListener('click', function(){
    alert('The shuttle is landing. Landing gear engaged.')
    flightStatus.innerHTML='The shuttle has landed.';
    shuttleBackground.style.backgroundColor = 'green';
    shuttleHeight.innerHTML = 0;
    rocket.style.bottom = "0px";
    });

abortMission.addEventListener('click', function(){
   let response = confirm('Confirm you want to abort the mission.')
    if(response === true){
        flightStatus.innerHTML = 'Mission aborted.';
        shuttleBackground.style.backgroundColor = 'green';
        shuttleHeight.innerHTML = "0";
        rocket.style.left='250px'
        rocket.style.bottom='0px'
        }

    });

up.addEventListener('click', function(){
    if(flightStatus.innerHTML === "Shuttle in flight." &&  parseInt(shuttleHeight.innerHTML) < 250000){
    rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
    shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;}

    });

down.addEventListener('click', function(){
    if(flightStatus.innerHTML === "Shuttle in flight." && parseInt(shuttleHeight.innerHTML) !== 0){
        rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px";
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
     }
    });

right.addEventListener('click', function(){
    if(flightStatus.innerHTML === "Shuttle in flight."){
        rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
    }
    });

left.addEventListener('click', function(){
    if(flightStatus.innerHTML === "Shuttle in flight."){
        rocket.style.left = parseInt(rocket.style.left) - 10 + "px";}
    });
});