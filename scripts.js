// Write your JavaScript code here.
// Remember to pay attention to page loading!
//let test=document.getElementById("testjs");
//test.innerHTML="testjs";
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
}
function moveLeft(element) {
    //window.alert("move left");
    var elStyle = window.getComputedStyle(element);
    var leftValue = elStyle.getPropertyValue("left").replace("px", "");
    window.alert("leftValue"+leftValue);
    let num=Number(leftValue);
    window.alert("num"+num);
    /*
    window.alert(Number(element.style.left));
    let number =Number(element.style.left);
    number=number-10;
    */
    num=num-10;
    window.alert(num);
    //element.style.left = String(number) + 'px';
    element.style.left = String(num) + 'px';
}
function moveDown(element) {
    //window.alert("move left");
    var elStyle = window.getComputedStyle(element);
    var topValue = elStyle.getPropertyValue("top").replace("px", "");
    //window.alert("topValue"+topValue);
    let num=Number(topValue);
    //window.alert("num="+num);
    console.log("num="+num);
    /*
    window.alert(Number(element.style.left));
    let number =Number(element.style.left);
    number=number-10;
    */
    let shuttleBackground=document.getElementById("shuttleBackground");
    let backgrd=window.getComputedStyle(shuttleBackground);
    let topVal=backgrd.getPropertyValue("top").replace("px","");
    let top=Number(topVal);
    //window.alert("top="+top);
    let bottomVal=backgrd.getPropertyValue("bottom").replace("px","");
    bot=Number(bottomVal);
    //window.alert("bot="+bot);
    if(num<250){
        num=num+10;
    }else{
        window.alert("num="+num);
        window.alert("Rocket at bottom of box. Try another direction");
    }
    //window.alert(num);
    element.style.top = String(num) + 'px';
}
window.addEventListener("load",function(){
    //window.alert("load completed");
    //console.log("load completed");
    let btnTakeOff=document.getElementById("takeoff");
    btnTakeOff.addEventListener("click",function(){
        console.log("takeoff btn clicked");
        let ans=window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(ans===true){
            let flightStatus=document.getElementById("flightStatus");
            flightStatus.innerHTML="Shuttle in flight.";
            let shuttleBackground=document.getElementById("shuttleBackground");
            shuttleBackground.style.backgroundColor="blue";
            
            let spaceShuttleHeight=document.getElementById("spaceShuttleHeight");
            let val=spaceShuttleHeight.innerText;
            let num=Number(val);
            let hundred=100;
            num=num+hundred;
            window.alert(num);
            spaceShuttleHeight.innerHTML=String(num);
        }
    });
    let btnLand=document.getElementById("landing");
        btnLand.addEventListener("click",function(){
            window.alert("The shuttle is landing. Landing gear engaged.");
            let flightStatus=document.getElementById("flightStatus");
            flightStatus.innerHTML="The shuttle has landed.";
            let shuttleBackground=document.getElementById("shuttleBackground");
            shuttleBackground.style.backgroundColor="green";
            let spaceShuttleHeight=document.getElementById("spaceShuttleHeight");
            let val=spaceShuttleHeight.innerText;
            let num=Number(val);
            let hundred=100;
            num=num-hundred;
            window.alert(num);
            spaceShuttleHeight.innerHTML=String(num);
        });
        let btnAbort=document.getElementById("missionAbort");
        btnAbort.addEventListener("click",function(){
            let ans=window.confirm("Confirm that you want to abort the mission.");
            if(ans===true){
                let flightStatus=document.getElementById("flightStatus");
                flightStatus.innerHTML="Mission aborted.";
                let shuttleBackground=document.getElementById("shuttleBackground");
                shuttleBackground.style.backgroundColor="green";
                let spaceShuttleHeight=document.getElementById("spaceShuttleHeight");
                spaceShuttleHeight.innerHTML=String(0);
            }
        });
        /*
        let rocket=document.getElementById("rocket");
        rocket.style.position = 'relative';
        //rocket.style.left = 30;
 	    //rocket.style.top = 0;
        let left=document.getElementById("left");
        left.addEventListener("click",function(){
            moveLeft(rocket);
        });
        */
        let rocket=document.getElementById("rocket");
        rocket.style.position = 'relative';
        let buttonsGroup=document.getElementsByName("buttonGroup");
        this.window.alert("buttons"+buttonsGroup.length);
        //let rocket=document.getElementById("rocket");
        for(let n=0;n<buttonsGroup.length;n++){
            buttonsGroup[n].addEventListener("click",function(){
                switch(n) {
                    case 0:
                      // code block
                      break;
                    case 1:
                        //window.alert("case1");
                        moveDown(rocket);
                        let spaceShuttleHeight=document.getElementById("spaceShuttleHeight");
                        let val=spaceShuttleHeight.innerText;
                        let num=Number(val);
                        let hundred=100;
                        num=num-hundred;
                        //window.alert(num);
                        spaceShuttleHeight.innerHTML=String(num);
                      break;
                    case 2:
                      // code block
                      break;
                    case 3:
                      //let x=getOffset(rocket).left;
                      window.alert("case3");
                      moveLeft(rocket);
                      break;
                    default:
                }
            });
        }
});