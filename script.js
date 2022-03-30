function clock(){
    var hours=document.getElementById("hour");
    var minutes=document.getElementById("min");
    var seconds=document.getElementById("sec");
    var am=document.getElementById("ampm");
      
    var time=new Date();
    var hrs=time.getHours();
    var mins=time.getMinutes();
    var secs=time.getSeconds();
    var am_pm="AM";
    if(hrs==0){
        hrs=12;
    }
    if(hrs>12){
        hrs=hrs-12;
        am_pm="PM";
    }
    if(hrs<10){
        hrs="0"+hrs
    }
    if(mins<10){
        mins="0"+mins;
    }
    if(secs<10){
        secs="0"+secs;
    }
    hours.innerText=hrs;
    minutes.innerText=mins;
    seconds.innerText=secs;
    am.innerHTML=am_pm
}
setInterval(clock,1000)
function settime(){

    var x=document.getElementById('morning').value;
    var y = document.getElementById("lunch").value;
    var t = document.getElementById("nap").value;
    var z = document.getElementById("night").value;
    var hour = new Date().getHours();
    


    if(x==hour){

        document.getElementById('imagecontainer').style.background="url(./Component.svg)"
        document.getElementById('textcontainer').innerText='Wake Up !!';
        document.getElementById("smallbox").innerText="Good Morning !!";
     
    }

    if(y==hour){
        document.getElementById("imagecontainer").style.backgroundImage="url(./lunchtime.svg)"
        document.getElementById("textcontainer").innerText="Let's Have Some Lunch !!";
        document.getElementById("smallbox").innerText="Good Afternoon !!";
    }

    if(t==hour){
        document.getElementById("imagecontainer").style.backgroundImage="url(./eveng.png)"
        document.getElementById("textcontainer").innerText="Have Some Tea !!";
        document.getElementById("smallbox").innerText="Enjoy your Drink !!";
    }  
    
    if(z==hour){
        document.getElementById("imagecontainer").style.backgroundImage="url(./comp.svg)"
        document.getElementById("textcontainer").innerText="Good Night !!";
        document.getElementById("smallbox").innerText="Good Night !!";
    }    
    
    
   

}