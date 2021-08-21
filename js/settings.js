
filterSelection("profile")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  // if (c == "profile") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}





// Get the container element
var btnContainer = document.getElementById("topnav");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName('lis');
var current;
let card = document.getElementsByClassName('card');

// Array.from(card).filter((sam) => {
//     let value = sam.textContent;
//     if (value.includes('Active') === true) {
//        console.log('active');
//     }

//     console.log('');
// })
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    current = document.getElementsByClassName("active");

  
    current[0].className = current[0].className.replace("active", "");
    // Add the active class to the current/clicked button
    this.className += " active";
    
    // card.filter()

  });

} 



