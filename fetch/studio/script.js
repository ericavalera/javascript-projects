//TODO: Add Your Code Below
window.addEventListener ("load", function (){

    async function astronauts(){
        let response= await fetch('https://handlers.education.launchcode.org/static/astronauts.json');
        let data = await response.json();
        const div = document.getElementById('container');

        for(let i =0; i< data.length; i++){
            let astroData= data[i];

            div.innerHTML +=`<div class="astronaut">
            <div class="bio">
                <h3>${astroData.firstName} ${astroData.lastName} </h3>
                <ul>
                <li>Hours in Space: ${astroData.hoursInSpace}</li>
                <li>Active: ${astroData.active}</li>
                <li>Skills: ${astroData.skills.join(", ")}</li>
                </ul>
            </div>
            <img class="avatar" src="${astroData.picture}">
        </div>`
        }
       
    
        } 
        astronauts();
    });
    