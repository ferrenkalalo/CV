console.log("hai, this is a test");

function myFunction() {
    var element = document.getElementById("all");
  
    if (element.classList) { 
      element.classList.toggle("blueMode");
    } else {
      var classes = element.className.split(" ");
      var i = classes.indexOf("blueMode");
  
      if (i >= 0) 
        classes.splice(i, 1);
      else 
        classes.push("blueMode");
        element.className = classes.join(" "); 
    }
  }

let myButton = document.getElementById("myButton");
myButton.onclick = showMessage;
function showMessage(){
  alert("Hai, Thankyou for send me a message ;)");
}