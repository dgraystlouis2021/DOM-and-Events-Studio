// Write your JavaScript code here.
// Remember to pay attention to page loading!
let test=document.getElementById("testjs");
test.innerHTML="testjs";
window.addEventListener("load",function(){
    window.alert("load completed");
    console.log("load completed");
    let btnTakeOff=document.getElementById("takeoff");
    btnTakeOff.addEventListener("click",function(){
        console.log("takeoff btn clicked");
        let ans=window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(ans===true){
            let flightStatus=document.getElementById("flightStatus");
            flightStatus.innerHTML="Shuttle in flight.";
            let shuttleBackground=document.getElementById("shuttleBackground");
            shuttleBackground.style.backgroundColor="blue";
            let spaceShuttleHeight=document.getElementById("spaceShuttleHeight").innerText;
            let val=Number(spaceShuttleHeight.trim())+100;
            //let val=spaceShuttleHeight.innerText;
            let val=String(val);
            window.alert(`number=${val}`);
            //spaceShuttleHeight.innerText=String(val);
        }
    });
    let btnLand=document.getElementById("landing");
        btnLand.addEventListener("click",function(){
            window.alert("The shuttle is landing. Landing gear engaged.");
            let flightStatus=document.getElementById("flightStatus");
            flightStatus.innerHTML="The shuttle has landed.";
        });
});