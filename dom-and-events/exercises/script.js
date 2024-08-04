function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    button.addEventListener('click',() => {
        paragraph.innerHTML='Houston, we have liftoff!'
    });

    missionAbort.addEventListener('mouseover',() => {
        missionAbort.style.backgroundColor= 'red'

    });

    missionAbort.addEventListener('mouseout',() => {
        missionAbort.style.backgroundColor= ''
    });
  
    missionAbort.addEventListener('click', () => {
       alert('Are you sure you want to abort the mission?');
       window.confirm('Mission aborted! Space shuttle returning home')
    });
    

}

window.addEventListener("load", init);
