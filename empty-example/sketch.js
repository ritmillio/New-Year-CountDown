main();

function main(){
  const newYearDate = new Date("Jan 1, 2020 00:00:00").getTime();

  let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = newYearDate - now;
  
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("timer").innerHTML = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";
    
    if (distance == 0) {
      clearInterval(x);
      window.location.replace("newyear.html");
    }
  }, 1000);
  
}
